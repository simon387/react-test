import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51IuKnqCW5yRxefpVmrX6bVFE8vNyv7TQhD8IBjIHJMhZmku37kpd4xmM3SgirAzJ3kDpTgGuaRaCQGvmeXepMQ9b00JgU2VWlv';

	const onToken = token => {
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress=''
			shippingAddress=''
			image='https://svgshare.com/i/Cuz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
};

export default StripeCheckoutButton;
