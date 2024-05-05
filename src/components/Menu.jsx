import { Link } from "react-router-dom";
import { logoutMenu, menu } from "../data";

const Menu = () => {
  return (
    <div className="text-white h-full py-8 flex-1 flex flex-col font-mont menu-layout">
      <h1 className="text-[#FFDF00] uppercase px-4 ml-6 text-[20px] font-light align-top w-[250px]">
        Flame
      </h1>
      <div className="h-full flex flex-col justify-between  ">
        <div>
          {menu.map((item) => (
            <Link to="" key={item.id} className="flex px-2 py-2 m-3">
              <img src={item.icon} alt="" className="h-8 w-10" />
              <span className="text-md inline-flex items-center">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Link className="flex  w-[270px]">
        <img src={logoutMenu.icon} alt="Logout" />
        <span className="inline-flex items-center text-[20px] font-light text-[#F4F4F599]">
          {logoutMenu.title}
        </span>
      </Link>
    </div>
  );
};

export default Menu;
