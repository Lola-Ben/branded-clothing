import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import SignIn from '../../components/sign-in/sign-in.component.';
import SignUp from '../../components/sign-up/sign-up.component';
import selectCurrentUser from '../../reducer/user/user.selectors';
import {SignInAndSignUpContainer} from "./sign-in-and-sign-up.styles"


const SignInAndSignUp = ({currentUser}) => {
    if(currentUser){
        return <Navigate to="/" />;
    } else {
        return( 
        <SignInAndSignUpContainer >
           
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
        )
    }
}
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(SignInAndSignUp);