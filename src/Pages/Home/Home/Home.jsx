import About from "../../../Components/About/About";
import Featured from "../../../Components/Featured/Featured";
import FeaturedClass from "../../../Components/FeaturedClass/FeaturedClass";
import Hero from "../../../Components/Hero/Hero";
import LatestArticles from "../../../Components/LatestArticles/LatestArticles";
import Newsletter from "../../../Components/NewsLetter/NewsLetter";
import Testimonials from "../../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <About />
      <FeaturedClass />
      <Testimonials />
      <LatestArticles />
      <Newsletter />
    </div>
  );
};

export default Home;
