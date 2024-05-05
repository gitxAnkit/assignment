import React from "react";
import PlayerCard from "./PlayerCard";
import { battleHistory } from "../data";

const BattleHistory = () => {
  return (
    <div
      className="text-[#EFF5FB] lg:text-2xl 
    lg:flex lg:flex-col md:text-lg "
    >
      <h1 className="heading ">Battle History</h1>
      <div
        className="md:w-[668px] lg:player-card 
      md:text-sm w-[360px] sm:w-[500px]"
      >
        {battleHistory.map((player) => (
          <PlayerCard
            key={player.id}
            rating={player.rating}
            rank={player.rank}
            img={player.img}
            targets={player.targets}
            name={player.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BattleHistory;
