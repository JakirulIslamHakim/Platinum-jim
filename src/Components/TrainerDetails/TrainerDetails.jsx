import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ReactStarRating from "react-rating-stars-component";

const TrainerDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const {
    data: trainersDetails = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trainersDetails"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/trainer/details/${id}`);
      return response.data;
    },
  });

  const {
    name,
    photo,
    experience,
    position,
    description,
    socialLinks,
    availableTimeSlots,
    certifications,
    rating,
  } = trainersDetails;


  return (
    <div className="container mx-auto py-8 min-h-screen ">
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/3 flex items-center  p-2">
          <img
            src="https://i.ibb.co/F5jG1Sj/IMG-20220217-230939.jpg" // NOTE : set dynamic image url
            alt={name}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="md:w-2/3 p-8 text-white ">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-gray-200 mb-4">{position}</p>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="mb-4">
            <p className="text-gray-200 font-bold mb-2">Experience:</p>
            <p className="text-gray-300">{experience} years</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-200 font-bold mb-2">Social Links:</p>
            <div className="flex items-center text-lg">
              {socialLinks?.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  className="text-white mr-2"
                >
                  <FaFacebook />
                </a>
              )}
              {socialLinks?.twitter && (
                <a
                  href={socialLinks?.twitter}
                  target="_blank"
                  className="text-white mr-2"
                >
                  <FaTwitter />
                </a>
              )}
              {socialLinks?.instagram && (
                <a
                  href={socialLinks?.instagram}
                  target="_blank"
                  className="text-white"
                >
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-200 font-bold mb-2">
              Available Time Slots: {availableTimeSlots?.length} Slots
            </p>
            <ul className="list-disc ml-4 text-gray-300">
              {availableTimeSlots?.map((slot, index) => (
                <li key={index}>{slot}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-gray-200 font-bold mb-2">Certifications:</p>
            <ul className="list-disc ml-4 text-gray-300">
              {certifications?.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center  gap-1 ">
            <ReactStarRating
              count={5}
              isHalf={true}
              value={rating}
              edit={false}
              size={26}
              activeColor="#ffd32a"
            />
            <p> {rating}</p>
          </div>
          <button className="bg-white text-red-600 font-bold py-2 px-4 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 mt-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
