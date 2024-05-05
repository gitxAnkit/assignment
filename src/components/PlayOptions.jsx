import TextCard from "./TextCard";
import { playOptoin } from "../data";

const PlayOptions = () => {
  return (
    <div className="">
      <h1 className="text-[#EFF5FB] heading">Play options</h1>
      <div className="flex justify-evenly">
        {playOptoin.map((item) => (
          <TextCard title={item.title} text={item.text} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PlayOptions;
