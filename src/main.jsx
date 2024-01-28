import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Body from "./components/Body"
import Header from "./components/Header"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import ResturantMenu from './components/ResturantMenu'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart'
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },//this is comment
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resID",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
