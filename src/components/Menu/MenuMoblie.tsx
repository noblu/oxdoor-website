import React, { useState } from "react";
import {
  BiDice6,
  BiFolder,
  BiFoodMenu,
  BiHomeAlt,
  BiLayer,
  BiPurchaseTagAlt,
  BiRectangle,
} from "react-icons/all";
import useComponentVisible from "../../hooks/useComponentVisible";
import { Item, ItemCatallogue } from "../../types/Item";
import { Link } from "react-router-dom";

const MenuMoblie = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible, isOpen, setIsOpen } =
    useComponentVisible(false);
  return (
    <>
      <div className="pt-2 pb-3">
        <Link
          to="/"
          className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          <BiHomeAlt className="text-white" />
          <span className="ml-2">TRANG CHỦ</span>
        </Link>
        <div className="relative" ref={ref}>
          <button
            onClick={() => setIsComponentVisible(!isComponentVisible)}
            className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base font-medium text-left text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
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
            className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
            // role="menuitem"
          >
            {isComponentVisible && (
              <div>
                {Item.map((item, index) => (
                  <Link
                    to={item.link}
                    className="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                    role="menuitem"
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <a
          href="#"
          className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          <BiDice6 className="text-white" />
          <span className="ml-2">TỦ BẾP NHỰA</span>
        </a>
        <a
          href="#"
          className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          <BiRectangle className="text-white" />
          <span className="ml-2">TẤM ỐP NHỰA</span>
        </a>
        <a
          href="#"
          className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          <BiLayer className="text-white" />
          <span className="ml-2">PHỤ KIỆN</span>
        </a>
        <div className="relative" ref={ref}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base font-medium text-left text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            <BiFoodMenu className="text-white" />
            <span className="ml-2">CATALOGUE</span>
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
            className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
            // role="menuitem"
          >
            {isOpen && (
              <div className="py-1 bg-white rounded-md shadow-xs">
                {ItemCatallogue.map((item, index) => (
                  <a
                    href="#"
                    className="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                    role="menuitem"
                    key={index}
                  >
                    {item?.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <a
          href="#"
          className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          <BiPurchaseTagAlt className="text-white" />
          <span className="ml-2">BÁO GIÁ</span>
        </a>
      </div>
    </>
  );
};

export default MenuMoblie;
