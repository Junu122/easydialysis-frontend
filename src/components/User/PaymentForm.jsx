import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentForm = ({ amount, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // Send payment request to the backend
        // const response = await fetch("http://localhost:4000/api/payment", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ amount, currency: "INR" }),
        // });

        // const { clientSecret } = await response.json();

        // Confirm payment with Stripe
        // const result = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: { card: elements.getElement(CardElement) },
        // });

        // setProcessing(false);

        // if (result.error) {
        //     alert(`Payment failed: ${result.error.message}`);
        // } else {
        //     alert("Payment successful!");
        //     onPaymentSuccess();
        // }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded-lg bg-white shadow-lg">
            <CardElement className="p-2 border rounded-lg" />
            <button type="submit" disabled={!stripe || processing} className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg">
                {processing ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};

export default PaymentForm;
