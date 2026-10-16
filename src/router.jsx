import { Navigate, createBrowserRouter } from 'react-router'
import AppShell from './components/AppShell.jsx'
import RootLayout from './components/RootLayout.jsx'
import { screens } from './data/screens.js'
import Home from './pages/Home.jsx'
import { screenLoaders } from './screens/index.js'

export const router = createBrowserRouter(
  [
    {
      Component: RootLayout,
      // Shown while a deep-linked screen's chunk loads on first visit (a blink)
      HydrateFallback: () => null,
      children: [
        { index: true, Component: Home },
        {
          path: 'screens',
          Component: AppShell,
          children: screens.map((screen) => ({
            path: screen.id,
            handle: { screen },
            lazy: async () => ({ Component: (await screenLoaders[screen.id]()).default }),
          })),
        },
        // Unknown URLs (including unknown screen ids) go back to the launcher
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
