import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import SectionTitle from "../../Utils/SectionTitle";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import InfiniteScroll from "react-infinite-scroll-component";
import GallerySkeleton from "../../Components/Skeleton/GallerySkeleton";
import { ColorRing } from "react-loader-spinner";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: galleryData = {},
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["Gallery"],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await axiosPublic.get(
          `/gallery?size=${12}&page=${pageParam}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });

  if (isError) {
    return (
      <p className="text-red-400 text-xl text-center mt-10">
        Error fetching data...
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-2  pt-16">
        <div className="skeleton h-12 w-28 mx-auto mb-8"></div>
        <GallerySkeleton />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-2">
      <SectionTitle title={"Gallery"} />
      <InfiniteScroll
        dataLength={
          galleryData.pages
            ? galleryData.pages.reduce(
                (total, page) => total + page.items.length,
                0
              )
            : 0
        }
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<GallerySkeleton />}
        endMessage={
          <p className="text-center font-semibold text-xl mt-5 text-red-400">
            You have seen it all
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {galleryData.pages &&
            galleryData.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xl font-bold bg-red-500 text-white rounded-full inline-block px-2 py-1">
                        {item.id}
                      </p>
                      <h2 className="text-lg  font-semibold mb-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
        </div>
      </InfiniteScroll>
      {isFetchingNextPage && (
        <div className="flex justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#b71540", "#b71540", "#b71540", "#b71540", "#b71540"]}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
