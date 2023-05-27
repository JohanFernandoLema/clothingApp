import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home'
function App() {
  const router = createBrowserRouter([
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
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
