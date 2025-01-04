
import { Helmet } from "react-helmet-async";
import DiscoverYourPath from "./FriendlyEnvironment/FriendlyEnvironment";
import Services from "./Serives/Services";
import Slider from "./Slider/Slider";
import OurAchievements from "./OurAchivements/OurAchivements";

const Home = () => {
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Career Compass | Home</title>
            </Helmet>
           <Slider></Slider>
           <DiscoverYourPath></DiscoverYourPath>
           <Services></Services>
           <OurAchievements></OurAchievements>
        </div>
    );
};

export default Home;