import {  Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import ScrollTop from "../Components/ScrollTop/ScrollTop";
import ContactNumber from "../Components/ContactNumber/ContactNumber";

const MainLayout = () => {
  return (
    <div className="max-w-[3000px] mx-auto">
      <Navbar />
      {/* FIXED CONTACT NUMBER FOR ALL PAGE */}
      <ContactNumber />
      {/* scroll up btn */}
      <ScrollTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
