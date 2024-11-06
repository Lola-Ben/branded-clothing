import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../reducer/user/user.action";


import { SignUpContainer, SignUpTitle } from "./sign-up.styles";


 class SignUp extends React.Component{
         constructor(){
            super();

            this.state = {
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }

         }

         handleSubmit = async (e) => {
            e.preventDefault();
            const {signUpStart} = this.props;
         
            const {displayName, email, password, confirmPassword} = this.state;

            if(password !== confirmPassword){
                alert("Passwords don't match")
                return;
            }   

            signUpStart(displayName, email, password, confirmPassword)
            
         }
         
         handleChange = (e) => {
            const {name, value} = e.target;
            this.setState({
                [name]: value
            })
         }  

         render(){
            const {displayName, email, password, confirmPassword} = this.state;
            return (
                <SignUpContainer className="sign-up">
                    <SignUpTitle className="title">I do not have an account</SignUpTitle>
                    <span>Sign up with email and password.</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInput 
                        name="displayName"
                        type="text"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="DisplayName"
                        required
                        />
                         <FormInput 
                        name="email"
                        type="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                        />
                         <FormInput 
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                        />
                         <FormInput 
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="confirmPassword"
                        required
                        />
                        <CustomButton >Sign Up</CustomButton>
                    </form> 
                </SignUpContainer>
            )
         }
}


const mapDispatchToProps = dispatch =>({
    signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({displayName, email, password, confirmPassword}))
});

export default connect(null, mapDispatchToProps)(SignUp);