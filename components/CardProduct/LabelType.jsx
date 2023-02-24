const LabelType = ({ type, title }) => {
  return (
    <span
      className={`text-[#FEFEFE] lg:px-4 px-2 lg:py-2 py-1 lg:text-base text-sm rounded-r-full font-semibold ${type}`}
    >
      {title}
    </span>
  );
};

export default LabelType;
