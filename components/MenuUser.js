import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const MenuUser = () => {
  return (
    <Link href={"/"}>
      <a className="flex rounded items-center p-2 transition-all duration-100 hover:bg-gray-100 cursor-pointer">
        <img
          src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
          alt=""
          className="rounded-full mr-4 h-12 w-12 object-cover"
        />
        <div className="flex  flex-col">
          <span className="text-[15px]">thisisdog</span>
          <span className="text-gray-500 text-[15px]">
            This is dogs account
          </span>
        </div>
        <AiOutlineClose className="ml-auto text-gray-500 text-2xl" />
      </a>
    </Link>
  );
};

export default MenuUser;
