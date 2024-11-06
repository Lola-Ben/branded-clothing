import React from 'react'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import ShopPage from './pages/ShopPage/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';


import './App.css';
import selectCurrentUser from './reducer/user/user.selectors';
import { checkUserSession } from './reducer/user/user.action';




class App extends React.Component {

 
   unsubcribeFromAuth = null

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();

  }
  
  componentWilUnmount(){
      this.unsubcribeFromAuth();
  }

  


  render(){
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
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 

})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
