import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import {SignInContainer, SignInTitle, ButtonsBarContainer} from "./sign-in.styles"

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
           await signInWithEmailAndPassword(auth,email, password);
        } catch (error) {
            console.log(error.code, " : ", error.message);
            
        }
        this.setState({email: '', password: ''});
     }
    
     handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
     }

    render(){
        return(
            <SignInContainer>
                <SignInTitle>Already have an account</SignInTitle>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name="password" type="password" value={this.state.password} handleChange={this.handleChange}  required />
                    <ButtonsBarContainer >
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}


export default SignIn;