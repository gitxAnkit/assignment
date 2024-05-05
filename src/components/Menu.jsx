import { Link } from "react-router-dom";
import { logoutMenu, menu } from "../data";

const Menu = () => {
  return (
    <div className="text-white h-full flex-1 flex flex-col font-mont menu-layout">
      <h1 className="text-[#FFDF00] uppercase px-4 font-semibold my-2">
        Flame
      </h1>
      <div className="h-full flex flex-col justify-between  ">
        <div>
          {menu.map((item) => (
            <Link to="" key={item.id} className="flex px-2 py-2">
              <img src={item.icon} alt="" className="h-8 w-10" />
              <span className="text-md inline-flex items-center">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <Link className="flex mb-12">
          <img src={logoutMenu.icon} alt="Logout" />
          <span className="inline-flex items-center">{logoutMenu.title}</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
