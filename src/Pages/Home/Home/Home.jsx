import About from "../../../Components/About/About";
import Featured from "../../../Components/Featured/Featured";
import FeaturedClass from "../../../Components/FeaturedClass/FeaturedClass";
import Hero from "../../../Components/Hero/Hero";
import LatestArticles from "../../../Components/LatestArticles/LatestArticles";
import Newsletter from "../../../Components/NewsLetter/NewsLetter";
import Team from "../../../Components/Team/Team";
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
      <Team/>
    </div>
  );
};

export default Home;
