import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import SectionTitle from "../../Utils/SectionTitle";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    fetch("../../../public/Testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialsData(data);
      });
  }, []);

  return (
    <div className="container mx-auto py-4 md:py-12 px-2">
      <SectionTitle title={"Testimonials"} />
      <div className="flex  gap-4 overflow-hidden">
        <Marquee speed={40}>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
      {/* <TestimonialCard testimonialsData={testimonialsData}/> */}
    </div>
  );
};

export default Testimonials;
