import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Lnh63L06BeLEibkbHnwCtSLwUf6q3L7hmj5eAwdThBjnRFLIHWYSFUPCvhRpY2wN2pIYvjRW0v3vTqwLwQXYnzZ00x6knluLZ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
