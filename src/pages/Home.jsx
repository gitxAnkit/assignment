import BattleHistory from "../components/BattleHistory";
import Leaderboard from "../components/Leaderboard";
import PlayOptions from "../components/PlayOptions";
import ProfileStats from "../components/ProfileStats";
import Varients from "../components/Varients";

const Home = () => {
  return (
    <div className=" text-white w-full py-20 px-10">
      <div className="lg:flex lg:w-full  ">
        <div className="font-sans ">
          <div className="p-16">
            <PlayOptions />
          </div>
          <div className="p-16">
            <Varients />
          </div>
          <div className="p-16 w-full">
            <BattleHistory />
          </div>
        </div>

        <div className=" w-full font-sans mt-20">
          <div className="p-16 w-full">
            <ProfileStats />
          </div>
          <div className="p-16 ">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
