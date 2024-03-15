import { useEffect } from "react";
import SectionTitle from "../../Utils/SectionTitle";
import { useState } from "react";
import FeaturedClassCard from "../FeaturedClassCard/FeaturedClassCard";

const FeaturedClass = () => {
  const [featuredClasses, setFeaturedClasses] = useState([]);
  const [visibleClasses, setVisibleClasses] = useState(6);

  useEffect(() => {
    fetch("../../../public/FeaturedClass.json")
      .then((res) => res.json())
      .then((data) => setFeaturedClasses(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleClasses(featuredClasses.length);
  };

  const handleSeeLess = () => {
    setVisibleClasses(6);
  };

  return (
    <div className="container mx-auto py-4 md:py-12 px-2">
      <SectionTitle title={"Featured Classes"} />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {featuredClasses.slice(0, visibleClasses).map((featuredClass) => (
            <FeaturedClassCard
              featuredClass={featuredClass}
              key={featuredClass.id}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 ">
          {visibleClasses < featuredClasses.length ? (
            <button
              className=" bg-red-500 text-white px-4 py-2 rounded-full hover:bg-slate-500"
              onClick={handleSeeMore}
            >
              See more..
            </button>
          ) : (
            <button
              className=" bg-red-500 text-white px-4 py-2 rounded-full hover:bg-slate-500"
              onClick={handleSeeLess}
            >
              See less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedClass;
