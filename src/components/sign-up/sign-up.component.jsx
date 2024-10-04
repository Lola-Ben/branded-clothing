import React from "react";
import './sign-up.styles.scss';
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


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

                const user = await createUserWithEmailAndPassword(auth, email, password);

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
                <div className="sign-up">
                    <h1 className="title">I do not have an account</h1>
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
                        <CustomButton isGoogleSignIn >Sign Up</CustomButton>
                    </form> 
                </div>
            )
         }
}