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
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import { CustomRadioButton } from "./components/radio-group";
import solanaLogo from "../../public/solana.svg";

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
    <div className="">
      <div className="py-24 min-h-screen flex flex-col items-center ">
        <div className=" mx-auto max-w-3xl text-center flex flex-col gap-3">
          <Text className="text-7xl font-bold text-black leading-snug">
            Fund public goods by Staking your $SOL
          </Text>
          <Text className="mt-4 text-black text-2xl">
            iceSOL is an initiative by Cubik which funds public goods through
            grants using yield generated
          </Text>
          <div className="mt-8  w-full flex items-center justify-center">
            <div className="bg-white p-3 w-fit rounded-full flex">
              <Image
                src={solanaLogo}
                alt="solana logo"
                width={40}
                height={40}
              />

              <input
                type="text"
                placeholder="Enter Amount"
                className="px-4 py-2 rounded-md mr-2 text-gray-700"
              />

              <div className="border border-black border-r-2" />
              <select className="px-4 py-2 rounded-md mr-2 text-gray-700">
                <option>Native Stake</option>
                <option>Other Option</option>
              </select>
              <Button className="rounded-full" disabled>
                Stake Now
              </Button>
            </div>
          </div>
        </div>
        <div className=" w-full items-center justify-center flex gap-2 my-6">
          <Text className="text-xl text-black">Operated by</Text>
          <Logo />
          <Text className="text-xl font-bold text-black">Cubik</Text>
        </div>
      </div>
      <main className="container mx-auto text-center my-48">
        <div className="flex justify-around">
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-[32px]">TVL</p>

            <h2 className="text-5xl font-bold text-black">$10,877</h2>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-[32px]">APY</p>

            <h2 className="text-5xl font-bold text-black">6.9%</h2>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-[32px]">Holders</p>

            <h2 className="text-5xl font-bold text-black">7,890</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
