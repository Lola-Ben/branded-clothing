import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({children,isGoogleSignIn, ...$otherProps}) => (
    <CustomButtonContainer {...$otherProps} $isGoogleSignIn={isGoogleSignIn}  >{children} </CustomButtonContainer>
        
)


export default CustomButton;