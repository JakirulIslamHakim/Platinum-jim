import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStarRating from "react-rating-stars-component";

const TrainerCard = ({ trainer }) => {
  const {
    name,
    photo,
    position,
    experience,
    socialLinks,
    availableTimeSlots,
    rating,
  } = trainer;

  return (
    <div className="rounded-lg border-2 border-red-200 shadow-md overflow-hidden">
      <img
        src={"https://i.ibb.co/hmGjdtS/user.png"}  // NOTE : SET Dynamic image from database
        alt={name}
        className=" mx-auto h-48 object-cover" 
      />
      <div className="p-4  bg-base-200 border-t-2 border-red-200">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{position}</p>
        <p className="text-gray-600 mb-2">Experience: {experience} years</p>
        <div className="flex items-center mb-2 text-2xl">
          {socialLinks.facebook && (
            <Link href={socialLinks.facebook} target="_blank">
              <FaFacebook className="text-blue-500 mr-2" />
            </Link>
          )}
          {socialLinks.twitter && (
            <Link href={socialLinks.twitter} target="_blank">
              <FaTwitter className="text-blue-400 mr-2" />
            </Link>
          )}
          {socialLinks.instagram && (
            <Link href={socialLinks.instagram} target="_blank">
              <FaInstagram className="text-pink-500" />
            </Link>
          )}
        </div>
        {/* <p className="text-gray-600 mb-4">
          Available Time Slots: {availableTimeSlots.length} -- {availableTimeSlots.join(", ")}
        </p> */}
        {/*  */}
        <div className="flex items-center  gap-1 ">
          <ReactStarRating
            count={5}
            isHalf={true}
            value={rating}
            edit={false}
            size={26}
            activeColor="#ffd32a"
          />
          <h2> {rating}</h2>
        </div>
        <button className=" btn btn-sm md:btn-md bg-red-400 hover:bg-red-600 text-white font-bold rounded-md mt-4">
          Know More
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
