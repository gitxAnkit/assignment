import { varient } from "../data";
import TextCard from "./TextCard";

const Varients = () => {
  return (
    <div className="">
      <h1 className="text-[#EFF5FB] heading">Varients</h1>
      <div className="flex justify-evenly">
        {varient.map((item) => (
          <TextCard title={item.title} text={item.text} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Varients;
