"use client";
import { Text } from "@squaress/ui";
import React from "react";

const Security = () => {
  return (
    <div className="">
      <div className="py-24 min-h-screen flex flex-col items-center ">
        <div className=" mx-auto max-w-3xl text-center flex flex-col gap-3">
          <Text className="text-7xl font-bold text-black leading-snug">
            Strong Security
          </Text>

          <div className="mt-8  w-full flex items-center justify-center flex-col gap-12">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#303A47] p-3 rounded-lg">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13283 15.3095L11.7523 17.9474C13.0122 15.7266 14.7558 13.8231 16.8516 12.3804L16.965 12.3023M11.4176 2.60968L4.38487 5.16979C2.88477 5.71587 1.86306 7.1245 1.80176 8.73111L1.63565 13.0849C1.42983 18.4797 4.21933 23.5416 8.87173 26.2158L10.8567 27.3567C12.0326 28.0326 13.4714 28.0484 14.6616 27.3985L16.6048 26.3374C21.5878 23.6165 24.5172 18.1955 24.0825 12.4995L23.7863 8.61694C23.6681 7.0687 22.6606 5.73409 21.2118 5.20668L14.0777 2.60968C13.2182 2.29677 12.2771 2.29677 11.4176 2.60968Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-xl text-black">
                Our servers can be accessed with only{" "}
                <b>Whitelisted SSH Keys</b>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#303A47] p-3 rounded-lg">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13283 15.3095L11.7523 17.9474C13.0122 15.7266 14.7558 13.8231 16.8516 12.3804L16.965 12.3023M11.4176 2.60968L4.38487 5.16979C2.88477 5.71587 1.86306 7.1245 1.80176 8.73111L1.63565 13.0849C1.42983 18.4797 4.21933 23.5416 8.87173 26.2158L10.8567 27.3567C12.0326 28.0326 13.4714 28.0484 14.6616 27.3985L16.6048 26.3374C21.5878 23.6165 24.5172 18.1955 24.0825 12.4995L23.7863 8.61694C23.6681 7.0687 22.6606 5.73409 21.2118 5.20668L14.0777 2.60968C13.2182 2.29677 12.2771 2.29677 11.4176 2.60968Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-xl text-black">
                Our withdraw authority is assigned to a <b>Ledger</b>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#303A47] p-3 rounded-lg">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13283 15.3095L11.7523 17.9474C13.0122 15.7266 14.7558 13.8231 16.8516 12.3804L16.965 12.3023M11.4176 2.60968L4.38487 5.16979C2.88477 5.71587 1.86306 7.1245 1.80176 8.73111L1.63565 13.0849C1.42983 18.4797 4.21933 23.5416 8.87173 26.2158L10.8567 27.3567C12.0326 28.0326 13.4714 28.0484 14.6616 27.3985L16.6048 26.3374C21.5878 23.6165 24.5172 18.1955 24.0825 12.4995L23.7863 8.61694C23.6681 7.0687 22.6606 5.73409 21.2118 5.20668L14.0777 2.60968C13.2182 2.29677 12.2771 2.29677 11.4176 2.60968Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-xl text-black">
                We enforce an active set of <b>UWF Rules</b>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#303A47] p-3 rounded-lg">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13283 15.3095L11.7523 17.9474C13.0122 15.7266 14.7558 13.8231 16.8516 12.3804L16.965 12.3023M11.4176 2.60968L4.38487 5.16979C2.88477 5.71587 1.86306 7.1245 1.80176 8.73111L1.63565 13.0849C1.42983 18.4797 4.21933 23.5416 8.87173 26.2158L10.8567 27.3567C12.0326 28.0326 13.4714 28.0484 14.6616 27.3985L16.6048 26.3374C21.5878 23.6165 24.5172 18.1955 24.0825 12.4995L23.7863 8.61694C23.6681 7.0687 22.6606 5.73409 21.2118 5.20668L14.0777 2.60968C13.2182 2.29677 12.2771 2.29677 11.4176 2.60968Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-xl text-black">
                A <b>WatchBot</b> notifies us in case of abnormalities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
