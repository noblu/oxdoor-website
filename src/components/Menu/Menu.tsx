import React, { useState } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";
import { Item, ItemCatallogue } from "../../types/Item";
import { Link } from "react-router-dom";
import {
  BiDice6,
  BiFolder,
  BiFoodMenu,
  BiHomeAlt,
  BiLayer,
  BiMenu,
  BiPurchaseTagAlt,
  BiRectangle,
  BiX,
} from "react-icons/all";
import MenuMoblie from "./MenuMoblie";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible, isOpen, setIsOpen } =
    useComponentVisible(false);

  return (
    <>
      <nav className=" bg-pink">
        <div className="container px-6 mx-auto md:px-8">
          <div className="flex items-center justify-start md:justify-center lg:justify-center h-16">
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="flex flex-row items-center px-3 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <BiHomeAlt className="text-white" />
                  <span className="ml-2">TRANG CHỦ</span>
                </Link>

                <div className="relative z-10" ref={ref}>
                  <button
                    onClick={() => setIsComponentVisible(!isComponentVisible)}
                    className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <BiFolder className="text-white" />
                    <span className="mx-2">SẢN PHẨM</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 mt-1 transform ${
                        isComponentVisible ? "rotate-180" : "rotate-0"
                      } feather feather-chevron-down `}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div
                    ref={ref}
                    x-show="open"
                    x-transition:enter="transition ease-out duration-100"
                    x-transition:enter-start="transform opaity-0 scale-95"
                    x-transition:enter-end="transform opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-75"
                    x-transition:leave-start="transform opacity-100 scale-100"
                    x-transition:leave-end="transform opacity-0 scale-95"
                    className="absolute right-0 w-52 mt-2 origin-top-right rounded-md shadow-lg"
                  >
                    {isComponentVisible && (
                      <div className="py-1 bg-white rounded-md shadow-xs">
                        {Item.map((item, index) => (
                          <Link
                            to={item.link}
                            className="flex flex-row items-center px-4 py-2 text-md text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                            key={index}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  to="/types/kitchen"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <BiDice6 className="text-white" />
                  <span className="ml-2">TỤ BẾP NHỰA</span>
                </Link>

                <Link
                  to="/types/plasticsheet"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <BiRectangle className="text-white" />
                  <span className="ml-2">TẤM ỐP NHỰA</span>
                </Link>

                <Link
                  to="/types/accessory"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <BiLayer className="text-white" />
                  <span className="ml-2">PHỤ KIỆN</span>
                </Link>
                <div className="hidden relative z-10 lg:block" ref={ref}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <BiFoodMenu className="text-white" />
                    <span className="mx-2">CATALOGUE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 mt-1 transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      } feather feather-chevron-down `}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div
                    ref={ref}
                    x-show="open"
                    x-transition:enter="transition ease-out duration-100"
                    x-transition:enter-start="transform opaity-0 scale-95"
                    x-transition:enter-end="transform opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-75"
                    x-transition:leave-start="transform opacity-100 scale-100"
                    x-transition:leave-end="transform opacity-0 scale-95"
                    className="absolute right-0 w-52 mt-2 origin-top-right rounded-md shadow-lg"
                  >
                    {isOpen && (
                      <div className="py-1 bg-white rounded-md shadow-xs">
                        {ItemCatallogue.map((item, index) => (
                          <Link
                            to="#"
                            className="flex flex-row items-center px-4 py-2 text-md text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                            key={index}
                          >
                            {item?.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  to="#"
                  className="hidden lg:flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <BiPurchaseTagAlt className="text-white" />
                  <span className="ml-2">BÁO GIÁ</span>
                </Link>
              </div>
            </div>

            {/* mobile */}
            <div className="md:hidden">
              <div className="flex items-center justify-between w-full">
                <div className="mt-1">
                  <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex items-center justify-center md:pr-8 lg:p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                    x-bind:aria-label="open ? 'Close main menu' : 'Main menu'"
                    x-bind:aria-expanded="open"
                  >
                    {open ? (
                      <BiX size={30} className=" fill-white " />
                    ) : (
                      <BiMenu size={30} />
                    )}
                  </button>
                </div>
                <div>
                  <span className="text-[14px] md:text-[24px] lg:text-xl pl-2">
                    Sản Phẩm Bền Đẹp, Vững Chắc Cho Ngôi Nhà Của Bạn
                  </span>
                </div>
              </div>
            </div>
          </div>
          {open === true && <MenuMoblie />}
        </div>
      </nav>
    </>
  );
};

export default Menu;
