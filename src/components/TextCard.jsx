const TextCard = (props) => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center
       w-[249px] h-[118px] border-[1.36px] border-solid
        border-[#20262E] rounded-[21.76px] m-3 "
      >
        <h1 className="text-[#FFDF00] lg:text-card text-base font-semibold text-left  ">
          {props.title}
        </h1>
        <p className="text-[#6B7B8E] md:text-lg inline-flex items-center sm:text-sm">
          {props.text}
        </p>
      </div>
    </>
  );
};

export default TextCard;
