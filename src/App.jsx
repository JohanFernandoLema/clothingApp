import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.scss'

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* Outlet is nesting all my pages within itself */}
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products/:id',
          element: <Products />,
        },
        {
          path: '/product/:id',
          element: <Product />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
