const FeaturedClassCard = ({ featuredClass }) => {
  const { title, description, instructor, duration, image, enrolled } =
    featuredClass;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-400">
      <img
        src={image}
        alt="Featured Classes Image"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title} </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 inline-block">Instructor: <span className="font-semibold">{instructor}</span> </p>
          <span className="bg-red-500 text-white px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-500">Enrolled: {enrolled} </span>
          <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded-full">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClassCard;
