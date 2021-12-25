import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClose,
  AiOutlineLoading,
} from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { RiMessengerLine, RiMessengerFill } from "react-icons/ri";
import { MdOutlineExplore, MdExplore } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuUser from "./MenuUser";
const Header = () => {
  //!rotuer

  const router = useRouter();
  const logoUrl =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
  const menu = [
    {
      icon: <AiOutlineHome />,
      href: "/",
      activeIcon: <AiFillHome />,
    },
    {
      icon: <RiMessengerLine />,
      href: "/direct/inbox/",
      activeIcon: <RiMessengerFill />,
    },
    {
      icon: <MdOutlineExplore />,
      href: "/explore",
      activeIcon: <MdExplore />,
    },
  ];
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const handleSearchInput = async (e) => {
    await setSearchVal(e.target.value.trim());
  };
  return (
    <div className="border-b-2 bg-white h-16 px-64 flex items-center justify-around">
      <Link href={"/"}>
        <a className=" active:opacity-70">
          <img src={logoUrl} alt="Instagram" />
        </a>
      </Link>
      <label className="border z-10  relative  flex items-center group px-3 h-[2.3rem] w-72 bg-[#fafafa] border-[#DBDBDB]">
        <AiOutlineSearch className=" group-focus-within:scale-0 group-focus-within:invisible  group-focus-within:absolute scale-100 transition-all text-gray-500 text-[18px] mt-1/2" />
        <input
          type="text"
          placeholder="Ara"
          value={searchVal}
          onChange={handleSearchInput}
          className="px-2 w-full h-full outline-none"
        />
        {searchLoading ? (
          <AiOutlineLoading className="text-gray-500 transition-all animate-spin ease-linear" />
        ) : (
          <FaTimesCircle className="text-gray-500 scale-0 transition-all group-focus-within:scale-100 cursor-pointer z-50" />
        )}
        <div className="absolute rounded shadow-xl p-3  group-focus-within:block hidden top-[2.3rem] left-1/2 bg-white  -translate-x-1/2 translate-y-4 border-2 w-[150%]">
          <div className="w-full h-full relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1.4rem] h-[1.4rem]  bg-white   rotate-45 "></div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-semibold">Yakınlardakiler</h1>
              <button className=" text-[14px] text-linkColor font-semibold">
                Tümünü Temizle
              </button>
            </div>
            <div>
              <MenuUser />
            </div>
          </div>
        </div>
      </label>
      <div className="flex gap-x-6 items-center">
        {menu.map((m, key) => (
          <Link href={m.href}>
            <a className=" text-[1.7rem]" key={key}>
              {router.asPath == m.href ? m.activeIcon : m.icon}
            </a>
          </Link>
        ))}
        <div className=" flex items-center gap-x-4">
          <button>
            <AiOutlineHeart className="text-[1.7rem]" />
          </button>
          <button>
            <div>
              <img
                src="/aziz.jpg"
                className="w-[1.8rem] h-[1.8rem] rounded-full object-cover border"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
