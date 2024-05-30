"use client";
import {
  Button,
  SegmentItem,
  SegmentContainer,
  Text,
  InputField,
  CustomRadioButton,
} from "@/lib/ui";

import { useState } from "react";
import Logo from "./components/logo";
import Icon from "@squaress/ui/icons";
import Image from "next/image";
import Link from "next/link";
// import { CustomRadioButton } from "./components/radio-group";

const radioOptions = [
  {
    id: "liquid-stake",
    value: "liquid-stake",
    label: (
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[2px]">
          <Text className="l1-heavy">Liquid Stake</Text>
          <Text className="l2-light">Unlock stake liquidity for DeFi</Text>
        </div>
        <div className="flex flex-col gap-[2px]">
          <Text className="b4-light">APY</Text>
          <Text className="l1-heavy">-</Text>
        </div>
      </div>
    ),
  },
  {
    id: "native-stake",
    value: "native-stake",
    label: (
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[2px]">
          <Text className="l1-heavy">Native Stake</Text>
          <Text className="l2-light">Stake natively with ice validator</Text>
        </div>
        <div className="flex flex-col gap-[2px]">
          <Text className="b4-light">APY</Text>
          <Text className="l1-heavy">7.46%</Text>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [stakeState, setStakeState] = useState("stake");
  const [value, setValue] = useState("liquid-stake");
  const [expandSetting, setExpandSetting] = useState(false);

  console.log("vale", value);
  //imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66c41648-d23e-4bee-45df-5ec4ecce5200/public

  return (
    <div className="m-16 w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center h-full p-3 md:p-10 lg:p-24">
          <div className="flex flex-col gap-20 text-center">
            <div className="flex flex-col gap-5">
              <Text className="font-semibold text-[2rem] lg:text-[3rem]">
                Welcome to Ice Staking 🧊
              </Text>
              <Text className="">
                The liquid staking token that funds public goods on solana.
              </Text>
            </div>
            <div className="flex flex-col justify-center sm:gap-8 gap-4">
              <h2 className="text-lg font-medium text-center">Operators</h2>
              <div>
                <Link
                  href={"https://twitter.com/_cubik"}
                  target="_blank"
                  className="flex flex-col gap-2 items-center"
                >
                  <Logo />
                  <Text className="">Cubik</Text>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 w-full sm:pb-[40px] pb-[10px] right-0">
          <div className=" w-full mx-auto text-center">
            <div className="flex flex-row justify-center gap-10">
              <Link href={"https://twitter.com/iceSOL_"} target="_blank">
                <svg
                  className="sm:h-[40px] h-[30px] w-auto"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </Link>
              <Link
                href={
                  "https://stakewiz.com/validator/votem3UdGx5xWFbY9EFbyZ1X2pBuswfR5yd2oB3JAaj"
                }
                target="_blank"
              >
                <svg
                  className="sm:h-[40px] h-[30px] w-auto"
                  fill="currentColor"
                  viewBox="882 166.5 1485 466.3"
                >
                  <path d="M1307.9 455.5c-17.7 0-31.2-11.3-35-29.5l11.8-2.9c1.7 12.8 11.1 21.3 23.7 21.3 12.9 0 23.3-10.4 23.3-23.3 0-28.8-53.1-18.8-53.1-55.2 0-16.5 13.9-29 32.2-29 12.5 0 22.1 5.7 28.8 17l-9.4 6c-5.3-8.4-10.8-11.7-19.4-11.7-11.1 0-20.2 7.9-20.2 17.6 0 24.8 53.3 16.5 53.3 54.5 0 19.9-15.6 35.2-36 35.2zM1437.3 349.9v103.3h-12.2V349.9h-27.8v-11.1h67.7v11.1h-27.7zM1600.4 453.2l-13.4-31.5h-51.8l-13.7 31.5h-13l53.3-118.7 51.6 118.7h-13zm-38.9-91.6-21.4 49h42.3l-20.9-49zM1734.8 453.2l-46.6-53.8-4.8 4.8v49h-12.2V338.8h12.2v50.9l50.2-50.9h15.9l-52.8 52.6 54.5 61.9-16.4-.1zM1808.7 453.2V338.8h59.4v11.1h-47.3v34.9h45.9V396h-45.9v46.1h47.3v11.1h-59.4zM2036.8 457.5l-33.1-90.1-35 90.1-44.7-118.7h13.7l31.5 86.2 35-90.5 33.2 90.5 34.3-86.2h13.2l-48.1 118.7zM2142.9 453.2V338.8h12.1v114.5h-12.1zM2234.6 442.1h61.2v11.1h-80.9l61.7-103.3h-54v-11.1h73.7l-61.7 103.3zM1029.9 389.9l115.9-125.2 4.8-5.1-5.3-53.9-24.1 25.7-1.9-19.7-187.5 201.1 122.6 45.1-69.4 74.6 5.3 53.9 24.1-25.7 1.9 19.7 136.2-145.5-122.6-45zm67.3 57.9-65.1-23.2-7.5 7.5 55.7 19.9-69.3 74.5 2.2 21.5-15.4 16.5-2.8-28.7 76.2-82-122.6-45 163.3-175.3 2.8 28.6L987.1 400l59.8 21.3 7.5-7.5-50.5-18 120.7-130.3-2.1-21.5 15.4-16.5 2.8 28.7-127.6 137.7 122.6 45-111.9 119.5-.7-7-2.1-21.6 76.2-82z"></path>
                </svg>
              </Link>
              <Link href={"https://github.com/cubik-so"} target="_blank">
                <svg
                  className="sm:h-[40px] h-[30px] w-auto"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-12">
        <div className="flex flex-col flex-[0.6] gap-16">
          <div className="gap-3 flex flex-col">
            <Text className="h3">Stake</Text>
            <Text className="b2-light" color="secondary">
              Stake with ice staking and help fund public goods
            </Text>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col min-h-32 min-w-44 justify-between">
              <div>
                <Text className="l1-light" color="secondary">
                  APY
                </Text>
                <Text className="h4">7.84%</Text>
              </div>
              <div>graph</div>
            </div>
            <div className="flex flex-col min-h-32 justify-between">
              <div>
                <Text className="l1-light" color="secondary">
                  Volume
                </Text>
                <Text className="h4">$305.6k</Text>
              </div>
              <div>graph</div>
            </div>
          </div>
        </div>

        <div className="flex-[0.5]">
          <div className="bg-color-white w-full p-6 rounded-2xl shadow-xl flex flex-col gap-11 items-center ">
            <div className="w-full">
              <SegmentContainer size="sm">
                <SegmentItem
                  isActive={stakeState === "stake"}
                  onClick={() => setStakeState("stake")}
                >
                  Stake
                </SegmentItem>
                <SegmentItem
                  isActive={stakeState === "unstake"}
                  onClick={() => setStakeState("unstake")}
                >
                  Unstake
                </SegmentItem>
              </SegmentContainer>
            </div>

            <div className="flex flex-col gap-6 items-center w-full px-6">
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between w-full">
                  <div className="flex gap-[10px]">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66c41648-d23e-4bee-45df-5ec4ecce5200/public"
                        alt="ice sol logo"
                        className="rounded-full w-full"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div>
                      <Text className="h5">SOL</Text>
                      <Text className="b3-light" color="secondary">
                        Stake $SOL
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <Button
                      variant="unStyled"
                      className="bg-color-surface-primary-transparent"
                      size="sm"
                    >
                      Use max
                    </Button>
                    <Text className="b3-light" color="secondary">
                      13.301
                    </Text>
                  </div>
                </div>
                <div className="h-[1px] bg-color-surface-primary-transparent" />
              </div>

              <div className="flex items-center flex-col">
                <InputField
                  defaultValue="0.0"
                  className="text-[48px] text-color-fg-primary-subdued flex items-center justify-center text-center"
                  type="number"
                  min={0}
                />
                <Text className="l3-light" color="secondary">
                  = $0.0
                </Text>
              </div>

              {value === "liquid-stake" && (
                <>
                  <div className="bg-color-surface-primary-transparent rounded-full flex items-center justify-center p-2">
                    <Icon
                      name="arrow-down"
                      color="#666666"
                      height={14}
                      width={14}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex gap-[10px]">
                      <div className="flex-shrink-0">
                        <Image
                          src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/14ecae6e-2c9f-448d-d695-a1853550e200/public"
                          alt="ice sol logo"
                          className="rounded-full w-full"
                          height={40}
                          width={40}
                        />
                      </div>

                      <div>
                        <Text className="h5">iceSOL</Text>
                        <Text className="b3-light" color="secondary">
                          Recieve $iceSOL
                        </Text>
                      </div>
                    </div>
                    <div>
                      <Text className="h4">135.6</Text>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="w-full flex items-center flex-col justify-center gap-5">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between w-full">
                  <Text className="b4">Transaction Fees</Text>
                  <Text className="b4">0.0004 SOL</Text>
                </div>
                <div className="flex justify-between w-full">
                  <Text className="b4">Stake Settings</Text>
                  <div className="bg-color-surface-primary-transparent rounded-full flex items-center justify-center p-1">
                    {expandSetting ? (
                      <div onClick={() => setExpandSetting(!expandSetting)}>
                        <Icon
                          name="chevron-down"
                          color="#666666"
                          height={14}
                          width={14}
                        />
                      </div>
                    ) : (
                      <div onClick={() => setExpandSetting(!expandSetting)}>
                        <Icon
                          name="chevron-right"
                          color="#666666"
                          height={14}
                          width={14}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {expandSetting && (
                  <div>
                    <CustomRadioButton
                      options={radioOptions}
                      defaultValue="liquid-stake"
                      name="viewDensity"
                      onChange={(newValue) => setValue(newValue)}
                      className=""
                      value={value}
                    />
                  </div>
                )}
              </div>
              <Button variant="primary" className="w-full">
                Stake
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
