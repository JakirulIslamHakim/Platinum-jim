import { useQuery } from "@tanstack/react-query";
import TrainerCard from "../TrainerCard/TrainerCard";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import SectionTitle from "../../Utils/SectionTitle";
import TrainerSkeletonCard from "../Skeleton/TrainerSkeletonCard";

const TrainerSection = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: trainersData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trainersData"],
    queryFn: async () => {
      const response = await axiosPublic.get("trainers");
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-2  pt-16">
        <div className="skeleton h-12 w-28 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <TrainerSkeletonCard />
          <TrainerSkeletonCard />
          <TrainerSkeletonCard />
          <TrainerSkeletonCard />
          <TrainerSkeletonCard />
          <TrainerSkeletonCard />
          <TrainerSkeletonCard />
        </div>
      </div>
    );
  }

  if (isError)
    return (
      <div className="text-xl text-center mt-10">Error fetching data...</div>
    );

  return (
    <div className="container mx-auto py-8">
      <SectionTitle title={"Our Trainers"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trainersData.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default TrainerSection;
