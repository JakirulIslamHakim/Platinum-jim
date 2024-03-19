import { useEffect, useState } from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style/style.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";
import SectionTitle from "../../Utils/SectionTitle";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("../../../public/TeamMembers.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);

  return (
    <div className="container mx-auto py-12 ">
      <SectionTitle title={"Meet Our Team"} />
      <div className="w-[240px] md:w-[700px] md:h-[350px] mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              {/* card */}
              <div className="flex flex-col overflow-hidden">
                <div className="bg-white rounded-lg overflow-hidden md:flex border-2 border-red-400">
                  <div className="min-w-[200px] md:min-w-[300px] md:h-[300px] h-[250px]  mx-auto">
                    <img
                      className="rounded-xl md:rounded-none"
                      src={member.imageUrl}
                      alt={member.name}
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-500 mb-2">{member.position}</p>
                      <p className="text-gray-800 text-sm md:text-base flex-grow text-justify">
                        {member.description}
                      </p>
                    </div>
                    <div className="mt-4 text-3xl flex justify-center space-x-4">
                      <Link to={member.socialLinks[0].url} target="_blank">
                        <FaLinkedin className="text-[#0077B5]" />
                      </Link>
                      <Link to={member.socialLinks[1].url} target="_blank">
                        <FaFacebook className="text-[#1877F2]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
