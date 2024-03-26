import GallerySkeletonCard from "./GallerySkeletonCard";

const GallerySkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <GallerySkeletonCard />
        <GallerySkeletonCard />
        <GallerySkeletonCard />
        <GallerySkeletonCard />
        <GallerySkeletonCard />
        <GallerySkeletonCard />
        <GallerySkeletonCard />
        <GallerySkeletonCard />
      </div>
    </>
  );
};

export default GallerySkeleton;
