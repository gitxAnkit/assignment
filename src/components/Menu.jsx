import { Link } from "react-router-dom";
import { logoutMenu, menu } from "../data";

const Menu = () => {
  return (
    <div className="text-white h-[70%]">
      <h1 className="text-[#FFDF00] uppercase px-4 font-semibold my-2">
        Flame
      </h1>
      <div className="h-full flex flex-col justify-between">
        <div>
          {menu.map((itemtem) => (
            <Link to="" key={itemtem.id} className="flex px-2 py-2">
              <img src={itemtem.icon} alt="" className="h-8 w-10" />
              <span className="text-md inline-flex items-center">
                {itemtem.title}
              </span>
            </Link>
          ))}
        </div>
        <Link className="flex ">
          <img src={logoutMenu.icon} alt="Logout" />
          <span className="inline-flex items-center">{logoutMenu.title}</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
