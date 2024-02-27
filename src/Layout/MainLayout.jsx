import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Home from "../Pages/Home/Home/Home";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            {/* <Home/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;