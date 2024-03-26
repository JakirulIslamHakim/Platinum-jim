
const TrainerSkeletonCard = () => {
    return (
        <div className="flex flex-col gap-4 border-2 border-base-200 rounded-lg p-4">
        <div className="skeleton h-40 w-1/2 md:w-3/4  lg:w-2/3 rounded-full mx-auto"></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-4 w-36"></div>
        <div className="skeleton h-4 w-36"></div>
        <div className="skeleton h-4 w-36"></div>
        <div className="skeleton h-4 w-36"></div>
        <div className="skeleton h-4 md:h-8 w-24"></div>
      </div>
    );
};

export default TrainerSkeletonCard;
