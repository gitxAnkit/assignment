import BattleHistory from "../components/BattleHistory";
import Leaderboard from "../components/Leaderboard";
import PlayOptions from "../components/PlayOptions";
import ProfileStats from "../components/ProfileStats";
import Varients from "../components/Varients";

const Home = () => {
  return (
    <div className=" text-white w-full py-20 px-10">
      <div className="flex w-full ">
        <div className="font-sans ">
          <div className="p-16">
            <PlayOptions />
          </div>
          <div className="p-16">
            <Varients />
          </div>
        </div>
        <div className="p-16 w-full">
          <ProfileStats />
        </div>
      </div>

      <div className="flex flex-1 w-full font-sans">
        <div className="p-16 w-full">
          <BattleHistory />
        </div>
        <div className="p-16 ">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
