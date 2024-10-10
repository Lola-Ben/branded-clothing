import React from 'react'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { getDoc } from 'firebase/firestore';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from './pages/ShopPage/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';


import './App.css';
import Header from './components/header/header.component';
import { createUserProfileDocument } from './firebase/firebase.utils';
import setCurrentUser from './reducer/user/user.action'
import selectCurrentUser from './reducer/user/user.selectors';




class App extends React.Component {

 
   unsubcribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    const auth = getAuth();
     this.unsubcribeFromAuth =  onAuthStateChanged(auth, async userAuth => {
     if(userAuth) { 
       const userRef =  await createUserProfileDocument(userAuth);

      const userSnapShot = getDoc(userRef)
      setCurrentUser({
        currentUser: {
          id: (await userSnapShot).id,
          ...(await userSnapShot).data()
        }
      })
      }else {
        setCurrentUser(userAuth)
      }

      })

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
                path: "/shop",
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
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
       setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
