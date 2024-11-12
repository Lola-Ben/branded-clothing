import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios"

const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishabelKey = "pk_test_51QA7Dw2MVu4hzWW4M2pMOf4sOdXK53C4DYpz3QbSov1lwiy8T8ZtCjPWoR0H6F9CHuwZwlirDUM9Klt7R5GkyZ55004iKKWHRx"

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: publishabelKey,
                token
            }
        }).then(res =>{
            alert("Payment successfully")
        }).catch(error =>{
         console.log("Payment error:", JSON.parse(error))
         alert("There is an issue with your payment. Please sure you use the provided test credit card")
        });
    }
    return (
   <StripeCheckout
    name="Branded clothing ltd."
    imag="src/asset/favicon.ico"
    label="Pay now"
    billingAddress
    shippingAddress
    amount={priceForStrip}
    description={`Your price is $${price}`}
    labelPanel="Pay now"
    token={onToken}
    stripeKey={publishabelKey}
   />
)}

export default StripeCheckoutButton;