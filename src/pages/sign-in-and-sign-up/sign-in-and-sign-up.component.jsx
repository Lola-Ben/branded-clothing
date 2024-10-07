import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.';
import SignUp from '../../components/sign-up/sign-up.component';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


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
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(SignInAndSignUp);