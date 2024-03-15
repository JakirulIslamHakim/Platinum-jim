// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className=" h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.ibb.co/KK1T1fC/anastase-maragos-7k-Ep-UPB8v-Nk-unsplash.jpg")`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.ibb.co/mDfDsMx/total-shape-TY-Ce5d2-G-k-unsplash.jpg")`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center "
            style={{
              backgroundImage: `url("https://i.ibb.co/f9HnxNV/alonso-reyes-0-Hl-I76m4jx-U-unsplash.jpg")`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center "
            style={{
              backgroundImage: `url("https://i.ibb.co/vwJM1yR/anastase-maragos-Hyv-E5-Si-KMUs-unsplash.jpg")`,
            }}
          />
        </SwiperSlide>
      </Swiper>
      <div className="bg-slate-800 bg-opacity-50 h-screen absolute top-0 left-0 w-full z-40 flex justify-center items-center">
        <div className="max-w-md text-center text-white">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase">
            Platinum Fitness{" "}
          </h1>
          <p className="mb-5 text-xl font-semibold">
            Make you harder, better, faster and stronger !
          </p>
          <button className="btn btn-outline bg-red-600 bg-opacity-25 outline outline-red-500 hover:bg-red-500 hover:text-white rounded-full text-white border-2 border-red-500 mt-10">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
