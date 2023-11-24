import Banner from "../Components/Banner/Banner";
import Enquiry from "../Components/Enquiry/Enquiry";
import HowItWork from "../Components/HowItWork/HowItWork";
import PopularEstate from "../Components/PopularEstate/PopularEstate";
import Review from "../Components/Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularEstate></PopularEstate>
            <HowItWork></HowItWork>
            <Review></Review>
            <Enquiry></Enquiry>           
        </div>
    );
};

export default Home;