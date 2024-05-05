import React from "react";

const LineChart = ({ percentage, color }) => {
  return (
    <div className="w-full h-[1.5px] bg-[#474D84] rounded-full relative">
      <div
        className={`h-full  absolute left-5 top-0`}
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

const GameType = ({ title, percentage, color }) => {
  return (
    <div>
      <h1 className="text-[18px] font-semibold font-mont text-[#F4F4F5CC]">
        {title}
      </h1>
      <span className="text-[#F4F4F5E5] font-light">Top {percentage}%</span>
      <div>
        <LineChart percentage={percentage} color={color} />
      </div>
    </div>
  );
};
const ProfileStats = () => {
  return (
    <div className="font-mont">
      <div>
        <h1 className="text-[22px] font-light text-gray-400  leading-5 text-left">
          Profile
          <span className="text-[#F4F4F5E5] text-[22px] font-semibold leading-5 text-left">
            {" "}
            Statistics
          </span>
        </h1>
        <div className="flex items-center">
          <span className="font-light text-[18px]">Status:</span>
          <span className="text-[10px] font-light p-1 ml-1 rounded-full border border-[#40ff609b] bg-[#40FF5FCC]"></span>
          <span className=" text-[#40FF5FCC] font-bold">Online</span>
        </div>
        <div className="flex m-1 text-[18px] font-light text-[#F4F4F5CC] items-center">
          <p className="h-5 w-5 m-2 rounded-full p-1 bg-[#474D84]"></p>
          <span>146 Countries, 2759 cities</span>
        </div>
      </div>

      <div>
        <GameType title={"Classical"} percentage={65.9} color="#2477FF" />
        <GameType title={"Rapid"} percentage={89.4} color="#DB2A34" />
        <GameType title={"Blitz"} percentage={71.2} color="#2D8515" />
      </div>

      <div>
        <h1 className=" my-2 text-[18px] font-semibold font-mont text-[#F4F4F5CC] ">
          Map Distributions
        </h1>
        <span className="text-[#f4f4f5da] font-light">Tracking:</span>
        <span className="font-bold text-[#F4F4F5CC] px-0.5">Active</span>
      </div>

      <div className="flex m-1 text-[14px] font-light text-[#F4F4F5CC] items-center">
        <p className="h-4 w-4 m-2 rounded-full p-1 bg-[#474D84]"></p>
        <span>391 elements installed, 84 sets</span>
      </div>

      <div className="w-[276px] h-[36px]bg-black">
        <div className="bg-[#474D84] rounded-[5px] w-[235px] ">
          <input
            type="text"
            className="p-2 font-light text-[15px] text-[#798892] rounded-l-[5px] w-[200px] bg-[#2D3740]"
            placeholder="Search player"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
