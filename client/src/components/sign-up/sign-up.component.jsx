import React, {useState} from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../reducer/user/user.action";


import { SignUpContainer, SignUpTitle } from "./sign-up.styles";


 const SignUp = ({signUpStart}) => {
        const [userCredentials, setCredentials] = useState({displayName: "", email: "", password: "", confirmPassword: ""})
        const {displayName, email, password, confirmPassword} = userCredentials;

        const handleSubmit = async (e) => {
            e.preventDefault();            
            if(password !== confirmPassword){
                alert("Passwords don't match")
                return;
            }   

            signUpStart(displayName, email, password, confirmPassword)
            
        }
        
        const handleChange = (e) => {
            const {name, value} = e.target;
            setCredentials({...userCredentials,[name]: value})
        }  
        return (
            <SignUpContainer className="sign-up">
                <SignUpTitle className="title">I do not have an account</SignUpTitle>
                <span>Sign up with email and password.</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput 
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="DisplayName"
                    required
                    />
                        <FormInput 
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="email"
                    required
                    />
                        <FormInput 
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required
                    />
                        <FormInput 
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="confirmPassword"
                    required
                    />
                    <CustomButton >Sign Up</CustomButton>
                </form> 
            </SignUpContainer>
        )
}



const mapDispatchToProps = dispatch =>({
    signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({displayName, email, password, confirmPassword}))
});

export default connect(null, mapDispatchToProps)(SignUp);