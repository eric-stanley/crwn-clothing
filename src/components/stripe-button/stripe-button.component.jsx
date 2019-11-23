import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import CustomButton from "../custom-button/custom-button.component";

import './stripe-button.styles.scss'

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="http://svgshare.com/i/CUz.svg"
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      >
        <div className='pay-now'>
          <CustomButton isGoogleSignIn>PAY NOW</CustomButton>
        </div>
      </StripeCheckout>
    );
}

export default StripeCheckOutButton