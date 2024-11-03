 import React from "react";


import { Group, FormInputContainer } from "./form-input.styles"; 
const FormInput = ({ handleChange ,label, ...otherInputProps }) => (
    <Group>
        <FormInputContainer  onChange={handleChange} {...otherInputProps} />
        {
            label ? 
            (<label className={`${ otherInputProps.value.length ? 'shrink' : ''}  form-input-label`  }>
             {label}
            </label> )
            : null
        }
    </Group>
) 

export default FormInput;