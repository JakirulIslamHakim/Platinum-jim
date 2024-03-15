import Container from "../../Utils/Container";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { FaFan } from "react-icons/fa";

const Featured = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative -top-10 z-40">
        <FeaturedCard icon={FaFan} title={"Yoga"} />
        <FeaturedCard icon={FaFan} title={"Body Building"} />
        <FeaturedCard icon={FaFan} title={"Crossfit"} />
        <FeaturedCard icon={FaFan} title={"Hiit"} />
      </div>
    </Container>
  );
};

export default Featured;
