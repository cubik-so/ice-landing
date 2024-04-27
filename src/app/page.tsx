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
      <div className="flex gap-12">
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
                  <CustomRadioButton
                    options={radioOptions}
                    defaultValue="liquid-stake"
                    name="viewDensity"
                    onChange={(newValue) => setValue(newValue)}
                    className=""
                    value={value}
                  />
                )}
              </div>
              <Button variant="primary" className="w-full">
                Stake
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
