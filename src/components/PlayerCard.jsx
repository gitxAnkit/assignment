const PlayerCard = (props) => {
  return (
    <div className="border-1 player-shadow-1 px-3 font-sans  py-1 my-6 rounded-[16px] bg-player grid grid-cols-2 ` ">
      <div className="inline-flex items-center p-1 col-span-1">
        <img
          src={props.img}
          className="rounded-full h-10 w-10 opacity-80 m-1"
          alt=""
        />
        <span className="text-[16px] font-semibold">{props.name}</span>
      </div>
      <div className="col-span-1 flex justify-between items-center">
        <span className="text-[#CBD1E1] text-[16px]">{props.rating}</span>
        <span className="text-[#CBD1E1] text-[16px]">({props.targets})</span>
        <span className="text-[#6B7B8E] text-[22px]"> {props.rank}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
