import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
     }
    
     handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
     }

    render(){
        return(
            <div className="sign-in">
                <h1>Already have an account</h1>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name="password" type="password" value={this.state.password} handleChange={this.handleChange}  required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;