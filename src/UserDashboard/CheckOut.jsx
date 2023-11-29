import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();

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
        }
        else{
            console.log('payment method', paymentMethod)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button  className="btn bg-yellow-400 hover:bg-yellow-500 text-black w-full my-5" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOut;