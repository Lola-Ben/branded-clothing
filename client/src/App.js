import React, { useEffect } from 'react'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/header/header.component';
import ShopPage from './pages/ShopPage/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';


import './App.css';
import { checkUserSession } from './reducer/user/user.action';




const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(checkUserSession())
    }, [dispatch]) 
    const router = createBrowserRouter([
      {
        element: <Header  />,
        children: [
              {
                path: "/",
                element: <HomePage/>,
                // errorElement:<ErrorPage />
              },
              {
                path: "shop/*",
                element: <ShopPage />
              },
              
              {
                path: '/signin',
                element: <SignInAndSignUp />
              
              },
              {
                path: '/checkout',
                element: <CheckoutPage />

              }
        ]
      },
    ])

    return (
      <div>  
         <RouterProvider router={router} />
      </div>
    );
  }





export default (App);
