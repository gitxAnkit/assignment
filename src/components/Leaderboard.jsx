import React from "react";
import { topPlayers } from "../data";
// import PlayerCard from "./PlayerCard";
import TopPlayer from "./TopPlayer";

const Leaderboard = () => {
  return (
    <div className="leaderboard-layout font-sans flex flex-col ">
      <h1 className="text-[#EFF5FB] heading my-2">Leaderboard</h1>
      <div className="rounded-full border h-10 border-[#27313A] p-1 text-[15px] flex justify-between">
        <span className="bg-red-100 rounded-full px-8 w-32 lg-shadow bg-leaderboard lb-global-card py-1 ">
          Global{" "}
        </span>
        <span className="mr-8 inline-flex items-center">Friends Only</span>
      </div>

      <div>
        {topPlayers.map((player) => (
          <TopPlayer
            img={player.img}
            name={player.name}
            rating={player.rating}
            targets={player.targets}
            className={``}
          />
        ))}
      </div>
      <div className="w-[288px] m-auto h-[38.4px] p-2 rounded-[40px] inline-flex items-center justify-center shadow-inner bg-[#323F4A]">
        See top 100
      </div>
    </div>
  );
};

export default Leaderboard;
