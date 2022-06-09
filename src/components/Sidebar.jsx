import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              className='gap-3 ml-3 mt-4 flex-row text-xl font-extrabold flex tracking-tight dark:text-white text-slate-900'
              onClick={() => {}}
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent
              content='Menu'
              position='BottomCenter'
            >
              <button
                type='button'
                onClick={() => {}}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((link) => (
              <div key={link.title}>
                <p className='text-gray-400 m-3 uppercase'>
                  {link.title}
                </p>
                {link.links.map((link1) => (
                  <NavLink
                    to={`/${link1.name}`}
                    key={link1.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link1.icon}
                    <span className='capitalize'>
                      {link1.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
