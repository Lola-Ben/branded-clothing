import React, {useState} from "react";
import { connect } from "react-redux";


import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { googleSignInStart, emailSignInStart } from "../../reducer/user/user.action";


import {SignInContainer, SignInTitle, ButtonsBarContainer} from "./sign-in.styles"

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: "", password: ""});
    
    const {email, password} = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password)
        // this.setState({email: '', password: ''});
     }
    
     const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name]: value});
     }
    return(
        <SignInContainer>
            <SignInTitle>Already have an account</SignInTitle>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='email' name="email" type="email" value={email} handleChange={handleChange} required />
                <FormInput label='password' name="password" type="password" value={password} handleChange={handleChange}  required />
                <ButtonsBarContainer >
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

const mapStateToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})


export default connect(null, mapStateToProps)(SignIn);