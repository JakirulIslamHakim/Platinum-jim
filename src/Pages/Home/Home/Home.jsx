import About from "../../../Components/About/About";
import Featured from "../../../Components/Featured/Featured";
import FeaturedClass from "../../../Components/FeaturedClass/FeaturedClass";
import Hero from "../../../Components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <About/>
      <FeaturedClass/>
    </div>
  );
};

export default Home;