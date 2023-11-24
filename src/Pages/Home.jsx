import Banner from "../Components/Banner/Banner";
import Enquiry from "../Components/Enquiry/Enquiry";
import Footer from "../Components/Footer/Footer";
import HowItWork from "../Components/HowItWork/HowItWork";
import Navbar from "../Components/Navbar/Navbar";
import PopularEstate from "../Components/PopularEstate/PopularEstate";
import Review from "../Components/Review/Review";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PopularEstate></PopularEstate>
            <HowItWork></HowItWork>
            <Review></Review>
            <Enquiry></Enquiry>
            <Footer></Footer>
        </div>
    );
};

export default Home;