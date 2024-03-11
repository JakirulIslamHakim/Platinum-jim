
const FeaturedCard = ({ image, title, description, icon: Icon }) => {
  return (
    <div className="card card-compact rounded-md  bg-red-600 p-3 text-white border ">
      <figure className="w-1/2 rounded-full mx-auto text-5xl mt-3 ">
        {/* <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        /> */}
        <Icon />
      </figure>
      <div className="p-3 ">
        <h2 className="text-2xl font-semibold text-center pb-3">{title}</h2>
        <p className="text-justify  ">
          Aerobics is a form of physical exercise that combines rhythmic aerobic
          exercise with stretching and strength training routines with the goal
          of improving all elements of fitness Many gyms offer a variety of
          aerobic classes.
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
