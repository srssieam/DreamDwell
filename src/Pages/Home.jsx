import Banner from "../Components/Banner/Banner";
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
        </div>
    );
};

export default Home;