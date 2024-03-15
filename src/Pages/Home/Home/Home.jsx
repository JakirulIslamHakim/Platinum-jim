import About from "../../../Components/About/About";
import Featured from "../../../Components/Featured/Featured";
import FeaturedClass from "../../../Components/FeaturedClass/FeaturedClass";
import Hero from "../../../Components/Hero/Hero";
import Testimonials from "../../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <About/>
      <FeaturedClass/>
      <Testimonials/>
    </div>
  );
};

export default Home;