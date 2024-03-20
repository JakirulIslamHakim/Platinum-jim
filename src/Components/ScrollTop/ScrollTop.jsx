import Lottie from "lottie-react";
import ScrollToTop from "react-scroll-up";
import upArrow from "../../assets/Lottie Json/upArrow.json";

const ScrollTop = () => {
  return (
    <div className="fixed z-50">
      <ScrollToTop className="z-50" showUnder={500} duration={2000}>
        <Lottie
          animationData={upArrow}
          className="w-[80px] inline-block z-40"
        />
      </ScrollToTop>
    </div>
  );
};

export default ScrollTop;
