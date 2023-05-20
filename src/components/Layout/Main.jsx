import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ScrollProvider from "../Providers/ScrollProvider";


const Main = () => {
    return (
        <ScrollProvider>
            <div className="max-w-[1440px] mx-auto">
                <Navbar></Navbar>
                <div style={{ minHeight: '100vh' }}>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </ScrollProvider>
    );
};

export default Main;