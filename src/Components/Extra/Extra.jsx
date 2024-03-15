const Hero = () => {
  return (
    <div>
      <div
        className="hero  min-h-screen "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KK1T1fC/anastase-maragos-7k-Ep-UPB8v-Nk-unsplash.jpg)",
          // backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase">
              Platinum Fitness{" "}
            </h1>
            <p className="mb-5 text-xl font-semibold">
              Make you harder, better, faster and stronger !
            </p>
            <button className="btn btn-outline outline outline-red-500 hover:bg-red-500 hover:text-white rounded-full text-white border-2 border-red-500 mt-10">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
