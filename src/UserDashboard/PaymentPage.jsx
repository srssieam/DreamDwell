import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";


const PaymentPage = () => {
    const loadedProperty = useLoaderData().data;
    const paymentAmount = loadedProperty[0].offered_amount
    console.log(paymentAmount)
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div className="lg:px-4">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Payment !</h1>
            <div className="md:px-24 mt-16">
                <Elements stripe={stripePromise}>
                    <CheckOut paymentAmount={parseFloat(paymentAmount)}></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;