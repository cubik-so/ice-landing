"use client";

import { Text } from "@squaress/ui";
import React from "react";

const System = () => {
  return (
    <div className="">
      <div className="py-24 min-h-screen flex flex-col items-center ">
        <div className=" mx-auto max-w-3xl text-center flex flex-col gap-5">
          <Text className="text-7xl font-bold text-black leading-snug">
            Reliable Performance
          </Text>

          <div className="mt-8  w-full flex items-center justify-center flex-col gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#303A47] p-4 rounded-lg">
                <svg
                  width="32"
                  height="39"
                  viewBox="0 0 32 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.52097 13.507L15.3884 5.77175C18.1963 3.57059 19.6003 2.47001 20.5614 2.57877C21.3934 2.67292 22.1255 3.20568 22.5105 3.99718C22.9554 4.91159 22.5043 6.70558 21.6021 10.2936L20.8461 13.2998C20.4849 14.7363 20.3043 15.4545 20.4287 16.078C20.5381 16.6265 20.8077 17.124 21.1987 17.4992C21.6433 17.9258 22.3173 18.1182 23.6653 18.5031L24.5399 18.7529C27.1322 19.493 28.4284 19.8631 28.9465 20.6165C29.3971 21.2716 29.5415 22.1104 29.3386 22.8933C29.1052 23.7936 28.0167 24.63 25.84 26.3026L16.1512 33.7474C13.3607 35.8917 11.9654 36.9639 11.009 36.8488C10.181 36.7491 9.45448 36.215 9.07309 35.4255C8.63257 34.5137 9.0778 32.743 9.96824 29.2018L10.6441 26.5142C11.0053 25.0777 11.1859 24.3595 11.0615 23.736C10.9521 23.1875 10.6825 22.69 10.2915 22.3147C9.84688 21.8882 9.17288 21.6957 7.82488 21.3108L6.85166 21.033C4.2866 20.3006 3.00407 19.9344 2.48625 19.186C2.0359 18.5351 1.88842 17.7011 2.08562 16.9202C2.31237 16.0223 3.38191 15.1839 5.52097 13.507Z"
                    stroke="#FAFAFA"
                    stroke-width="3.42857"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-black text-[32px] font-bold">
                AMD Milan EPYC™ 9254
              </h4>

              <p className="text-xl text-black">
                Equipped with <b>24 cores</b> & powered by <b>384 GB Memory</b>,
                capable of running <b>48 threads</b> at <b>2.9 GHz - 4 GHz</b>
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#303A47] p-4 rounded-lg">
                <svg
                  width="35"
                  height="32"
                  viewBox="0 0 35 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.8392 19.828L30.1979 10.0973C29.4108 7.19769 29.0172 5.74786 28.1866 4.6704C27.4535 3.71952 26.4836 2.9778 25.3739 2.51941C24.1165 2 22.6142 2 19.6096 2H16.3155C13.1111 2 11.5089 2 10.2627 2.50893C9.10298 2.98252 8.23814 3.63476 7.46402 4.61961C6.63213 5.67797 6.16238 7.32106 5.2229 10.6072C4.19454 14.2043 3.18412 17.4672 2.6584 19.6307M32.8392 19.828C32.1159 17.6412 30.1766 16.0182 27.8146 15.752C27.4797 15.7143 27.0817 15.7143 26.2856 15.7143H9.14279C8.34672 15.7143 7.94869 15.7143 7.61386 15.752C5.32342 16.0101 3.43053 17.544 2.6584 19.6307M32.8392 19.828C32.9677 20.2165 33.0578 20.6228 33.1051 21.0425C33.1428 21.3773 33.1428 21.7754 33.1428 22.5714C33.1428 23.3675 33.1428 23.7655 33.1051 24.1004C32.7916 26.8821 30.5963 29.0774 27.8146 29.3908C27.4797 29.4286 27.0817 29.4286 26.2856 29.4286H9.14279C8.34672 29.4286 7.94869 29.4286 7.61386 29.3908C4.83214 29.0774 2.6368 26.8821 2.32337 24.1004C2.28564 23.7655 2.28564 23.3675 2.28564 22.5714C2.28564 21.7754 2.28564 21.3773 2.32337 21.0425C2.37873 20.5512 2.49278 20.0782 2.6584 19.6307M26.2856 22.5714H19.4285"
                    stroke="#FCFCFC"
                    stroke-width="3.42857"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-black text-[32px] font-bold">
                2x 480 GB SSD + 2x 1.92TB NVMe
              </h4>
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto text-center my-48">
        <div className="flex justify-around px-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold text-black">25 Gbps</h2>
            <p className="text-black text-lg">Connection Speed</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold text-black">Madrid</h2>
            <p className="text-black text-lg">Location</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold text-black">Ubuntu</h2>
            <p className="text-black text-lg">Version 22.X</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default System;
