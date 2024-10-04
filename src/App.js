import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/header.component';
import ShopPage from './pages/ShopPage/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { getDoc } from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
class App extends React.Component {

  state = {
    currentUser: null
  }
   unsubcribeFromAuth = null

  componentDidMount(){
    const auth = getAuth();
     this.unsubcribeFromAuth =  onAuthStateChanged(auth, async userAuth => {
     if(userAuth) { 
       const userRef =  await createUserProfileDocument(userAuth);

      const userSnapShot = getDoc(userRef)
      this.setState({
        currentUser: {
          id: (await userSnapShot).id,
          ...(await userSnapShot).data()
        }
      })
      }else {
        this.setState({currentUser: userAuth})
      }

      })

  }
  
  componentWilUnmount(){
      this.unsubcribeFromAuth();
  }


  render(){
    const router = createBrowserRouter([
      {
        element: <Header currentUser={ this.state.currentUser } />,
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


export default App;
