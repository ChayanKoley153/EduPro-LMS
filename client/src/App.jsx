import Hero from './components/Hero';
import Navbar from './components/layout/Navbar';
import { Button } from './components/ui/button'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/auth/Login';
import Courses from './Pages/Courses';
import Signup from './Pages/auth/Signup';
import AppLayout from './components/layout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },

])



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;