 import React from "react";


import {FormInputLabel, Group, Input } from "./form-input.styles"; 
const FormInput = ({ handleChange ,label, ...otherInputProps }) => (
    <Group>
        <Input  onChange={handleChange} {...otherInputProps} />
        {
            label ? 
            (<FormInputLabel $shrink={ otherInputProps.value.length}>
             {label}
            </FormInputLabel> )
            : null
        }
    </Group>
) 

export default FormInput;