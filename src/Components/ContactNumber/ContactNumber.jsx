import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import callIcon from "../../assets/Lottie Json/callIcon.json";

const ContactNumber = () => {
  return (
    <div className="fixed bottom-10  left-0 lg:left-10 z-50">
      <Link to={"tel:01736100945"} className=" flex items-center">
        <Lottie animationData={callIcon} className="w-[90px] z-40" />{" "}
        <span className="bg-red-600 bg-opacity-70 text-white px-4 py-2 rounded-tr-full rounded-br-full relative -left-6 hidden md:block">
          01736100945
        </span>
      </Link>
    </div>
  );
};

export default ContactNumber;
