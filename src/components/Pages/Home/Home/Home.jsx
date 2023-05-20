import Banner from "../Banner/Banner";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Home = () => {
    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerFeedback></CustomerFeedback>
            <Services></Services>
            
        </div>
    );
};

export default Home;