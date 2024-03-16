import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import Lottie from "lottie-react";
import callIcon from "../assets/Lottie Json/callIcon.json";
import upArrow from "../assets/Lottie Json/upArrow.json";
import ScrollToTop from "react-scroll-up";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* FIXED CONTACT NUMBER FOR ALL  MAINLAYOUT */}
      <div className="fixed bottom-10  left-0 lg:left-10 z-50">
        <Link to={"tel:01736100945"} className=" flex items-center">
          <Lottie animationData={callIcon} className="w-[90px] z-40" />{" "}
          <span className="bg-red-600 bg-opacity-70 text-white px-4 py-2 rounded-tr-full rounded-br-full relative -left-6 hidden md:block">
            01736100945
          </span>
        </Link>
      </div>
      {/* SCROOL UP BUTTON */}
      <ScrollToTop className="z-50" showUnder={500} duration={2000}>
        <Lottie
          animationData={upArrow}
          className="w-[90px] inline-block z-40"
        />
      </ScrollToTop>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
