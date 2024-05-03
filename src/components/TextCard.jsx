const TextCard = (props) => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center
       w-[249px] h-[118px] border-[1.36px] border-solid border-[#20262E] rounded-[21.76px] m-3"
      >
        <h1 className="text-[#FFDF00] text-2xl font-bold ">Play1v1</h1>
        <p className="text-[#6B7B8E] text-xl inline-flex items-center">
          241 games played
        </p>
      </div>
    </>
  );
};

export default TextCard;
