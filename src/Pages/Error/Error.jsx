import Lottie from "lottie-react";
import errorAnimation from "../../assets/Lottie Json/Error_Animation (2).json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center">
      <Lottie
        className="h-screen w-full relative"
        animationData={errorAnimation}
        loop={true}
      />
      <div className="absolute space-x-5 bottom-14 inline-block">
        <Link
          className="btn btn-sm md:btn-md  btn-outline outline outline-red-500 hover:bg-red-500 hover:text-white rounded-full  border-2 border-red-500"
          to={-1}
          replace={true}
        >
          Go Back
        </Link>
        <Link
          className="btn btn-sm md:btn-md  btn-outline outline outline-red-500 hover:bg-red-500 hover:text-white rounded-full  border-2 border-red-500"
          to={"/"}
          replace={true}
        >
          {/* Go  */}Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
