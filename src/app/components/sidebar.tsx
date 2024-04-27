"use client";
import Icon from "@squaress/ui/icons";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState("home");
  return (
    <div className="bg-color-white h-screen w-fit p-4 mt-16">
      <ul className="space-y-8">
        <li>
          <Link href="/" className=" flex items-center space-x-2">
            <div
              className={`p-4 rounded-xl ${
                isActive === "home"
                  ? "bg-menu-list-item-surface-hovered"
                  : "bg-transparent"
              }`}
              onClick={() => setIsActive("home")}
            >
              <Icon
                name={isActive ? "home" : "homeDefaultFilled"}
                height={26}
                width={26}
                // color={isActive ? "color-bg-info-base" : "menu-list-item-icon"}
                color="#000"
                strokeWidth={2}
              />
            </div>
          </Link>
        </li>

        <li>
          <Link href="/">
            <div
              className={`p-4 rounded-xl ${
                isActive === "user"
                  ? "bg-menu-list-item-surface-hovered"
                  : "bg-transparent"
              }`}
              onClick={() => setIsActive("user")}
            >
              <Icon
                name={isActive ? "user" : "UserTwoFilled"}
                // name="UserTwoFilled"
                height={26}
                width={26}
                // color={isActive ? "color-bg-info-base" : "menu-list-item-icon"}
                color="#000"
                strokeWidth={2}
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M17.3333 7.58333C17.3333 9.97657 15.3932 11.9167 12.9999 11.9167C10.6067 11.9167 8.66658 9.97657 8.66658 7.58333C8.66658 5.1901 10.6067 3.25 12.9999 3.25C15.3932 3.25 17.3333 5.1901 17.3333 7.58333Z"
                  stroke="#666666"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.3547 22.75H19.6451C20.7616 22.75 21.6666 21.845 21.6666 20.7286C21.6666 17.3876 18.4824 14.9661 15.2629 15.8586L14.509 16.0676C13.5216 16.3414 12.4783 16.3414 11.4909 16.0676L10.7369 15.8586C7.51739 14.9661 4.33325 17.3876 4.33325 20.7286C4.33325 21.845 5.23828 22.75 6.3547 22.75Z"
                  stroke="#666666"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
