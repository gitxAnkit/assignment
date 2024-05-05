import React from "react";
import PlayerCard from "./PlayerCard";
import { battleHistory } from "../data";

const BattleHistory = () => {
  return (
    <div className="text-[#EFF5FB] text-2xl flex flex-col">
      <h1 className="heading ">Battle History</h1>
      <div className="w-[332px] player-card">
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
