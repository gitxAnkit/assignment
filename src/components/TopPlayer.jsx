import React from "react";

const TopPlayer = (props) => {
  return (
    <div className=" border-1 player-shadow-1  my-6 rounded-[40px] bg-player flex ">
      <img
        src={props.img}
        className="rounded-full h-10 w-10 opacity-80 m-1 "
        alt=""
      />
      <div className=" p-1 ">
        <span className="text-[15px] font-medium">{props.name}</span>
        <div className=" flex justify-between items-center text-[#A0B3C6]">
          <span className=" text-[16px] mr-2">{props.rating}</span>
          <span className=" text-[16px]">({props.targets})</span>
        </div>
      </div>
    </div>
  );
};

export default TopPlayer;
