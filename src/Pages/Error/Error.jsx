// import BackgroundSlider from "react-background-slider";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/Lottie Json/Error_Animation (2).json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center">
      <Lottie
        className="h-screen w-full border-4 border-black relative"
        animationData={errorAnimation}
        loop={true}
      />
      <div className="absolute space-x-5 bottom-10  inline-block">
        <Link className="btn bg-orange-400" to={-1}>Go Back</Link>
        <Link className="btn bg-orange-400" to={"/"}>Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
