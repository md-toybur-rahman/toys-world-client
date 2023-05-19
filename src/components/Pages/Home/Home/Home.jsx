import Banner from "../Banner/Banner";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerFeedback></CustomerFeedback>
            <Services></Services>
            
        </div>
    );
};

export default Home;