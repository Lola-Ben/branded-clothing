import React from "react";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { SignUpContainer, SignUpTitle } from "./sign-up.styles";


export default class SignUp extends React.Component{
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
            const {displayName, email, password, confirmPassword} = this.state;
            if(password !== confirmPassword){
                alert("Passwords don`t match")
                return;
            } 
            try {

                const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredentials.user;
                if(!user.displayName){
                   user.displayName = displayName;
                }
                await createUserProfileDocument(user, {displayName});
                this.setState = {
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }
                
            } catch (error) {
                console.log(error);
            }

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