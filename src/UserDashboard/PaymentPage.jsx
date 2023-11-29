import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const PaymentPage = () => {
    const loadedProperty = useLoaderData().data;
    const stripePromise = loadStripe('');
    return (
        <div className="lg:px-4">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Payment !</h1>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;