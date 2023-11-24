import Banner from "../Components/Banner/Banner";
import HowItWork from "../Components/HowItWork/HowItWork";
import Navbar from "../Components/Navbar/Navbar";
import PopularEstate from "../Components/PopularEstate/PopularEstate";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PopularEstate></PopularEstate>
            <HowItWork></HowItWork>
        </div>
    );
};

export default Home;