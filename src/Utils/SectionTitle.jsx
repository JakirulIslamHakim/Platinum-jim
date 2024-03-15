const SectionTitle = ({ title }) => {
  return (
    <div className="grid place-items-center ">
      <h2 className="text-2xl md:text-4xl font-semibold mb-5 md:mb-10 pb-1  border-b-4 border-red-500 inline-block">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
