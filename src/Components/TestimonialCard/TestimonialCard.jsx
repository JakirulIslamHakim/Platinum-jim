
const TestimonialCard = ({ testimonial }) => {


  return (
    <div className="bg-white  overflow-hidden py-8 md:px-4 w-[300px] md:w-[500px] mr-2 ">
      <div className="px-2 md:px-4 pb-2 md:pb-4 border-4 border-red-400 shadow-xl rounded-lg ">
        <div className="flex flex-col items-center relative -top-8 ">
          <img
            className="w-14 h-14 border-red-400 rounded-full border-4  bg-white"
            src={testimonial.photo}
            alt={testimonial.name}
          />
          <div className="text-center">
            <h3 className="font-semibold text-lg text-red-500">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.title}</p>
          </div>
        </div>
        <p className="text-gray-800 text-justify h-24 text-sm md:text-base">{testimonial.quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
