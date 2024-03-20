import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import SectionTitle from '../../Utils/SectionTitle';
import useAxiosPublic from '../../Hooks/Axios/useAxiosPublic';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    queryKey: ['Gallery'],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await axiosPublic.get(`/gallery?size=${12}&page=${pageParam}`);
        return response.data;
      } catch (error) {
        throw new Error('Error fetching data');
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });

  
  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div className="container mx-auto py-12 px-2">
      <SectionTitle title={'Gallery'} />
      <InfiniteScroll
        dataLength={galleryData.pages ? galleryData.pages.reduce((total, page) => total + page.items.length, 0) : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<div>Loading...</div>}
        endMessage={
          <p className='text-center font-semibold text-xl mt-5 text-red-400' >
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.pages &&
            galleryData.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.items.map((item) => (
                  <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
                    <div className="p-4">
                      <p className="text-xl font-bold bg-red-500 text-white rounded-full inline-block px-2 py-1">
                        {item.id}
                      </p>
                      <h2 className="text-lg  font-semibold mb-2">{item.title}</h2>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
        </div>
      </InfiniteScroll>
      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  );
};

export default Gallery;
