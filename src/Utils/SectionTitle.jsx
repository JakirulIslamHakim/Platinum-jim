const SectionTitle = ({ title }) => {
  return (
    <div className="grid place-items-center ">
      <h2 className="text-4xl font-semibold my-5 pb-1  border-b-4 border-red-500 inline-block">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
