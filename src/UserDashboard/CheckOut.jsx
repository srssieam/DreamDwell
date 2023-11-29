import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const CheckOut = ({paymentAmount}) => {
    const {user} = useAuth();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: paymentAmount}) // send total price to the server
        .then(res => {
            console.log(res.data.clientSecret); // receive clientSecret from server
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, paymentAmount])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error)
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,   // CardElement
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                transactionId && <p className="text-green-600 my-3">Your transaction ID: {transactionId}</p>
            }
            <CardElement className="p-5 border border-yellow-700"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'red',
                            '::placeholder': {
                                color: 'green',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-600">{error}</p>
            <button  className="btn bg-yellow-400 hover:bg-yellow-500 text-black w-full my-5" type="submit" disabled={!stripe  || !clientSecret}>
                Pay
            </button>
            
        </form>
    );
};

export default CheckOut;