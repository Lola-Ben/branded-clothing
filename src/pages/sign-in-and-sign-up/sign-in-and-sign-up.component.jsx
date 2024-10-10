import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.';
import SignUp from '../../components/sign-up/sign-up.component';
import selectCurrentUser from '../../reducer/user/user.selectors';


const SignInAndSignUp = ({currentUser}) => {
    if(currentUser){
        return <Navigate to="/" />;
    } else {
        return( 
        <div className='sign-in-and-sign-up'>
           
            <SignIn />
            <SignUp />
        </div>
        )
    }
}
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(SignInAndSignUp);