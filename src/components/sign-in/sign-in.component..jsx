import React from "react";
import { connect } from "react-redux";


import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { googleSignInStart, emailSignInStart } from "../../reducer/user/user.action";


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
        const {emailSignInStart} = this.props;
     
        emailSignInStart(email, password)
        // this.setState({email: '', password: ''});
     }
    
     handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
     }

    render(){
        const {googleSignInStart} = this.props
        return(
            <SignInContainer>
                <SignInTitle>Already have an account</SignInTitle>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name="password" type="password" value={this.state.password} handleChange={this.handleChange}  required />
                    <ButtonsBarContainer >
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapStateToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})


export default connect(null, mapStateToProps)(SignIn);