import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { Text } from "@squaress/ui";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className=" mx-auto text-center">
        <div className="flex max-w-7xl w-full mx-auto justify-between items-start">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <Logo />
            </Link>
            <Text className="text-2xl font-bold">Ice Staking</Text>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col items-start gap-6">
              <h3 className="text-lg">DOCS</h3>
              <div>
                <ul className="flex flex-col gap-3 items-start">
                  <li>
                    <Link
                      href="https://cubik.gitbook.io/ice-staking"
                      className="font-lg font-light"
                    >
                      Gitbook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6">
              <h3 className="text-lg">LINKS</h3>
              <div>
                <ul className="flex flex-col gap-3 items-start">
                  <li>
                    <Link
                      href="https://app.sanctum.so/lsts"
                      className="font-lg font-light"
                    >
                      Sanctum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://stakewiz.com/validator/votem3UdGx5xWFbY9EFbyZ1X2pBuswfR5yd2oB3JAaj"
                      className="font-lg font-light"
                    >
                      Stakewiz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://solanabeach.io/validator/votem3UdGx5xWFbY9EFbyZ1X2pBuswfR5yd2oB3JAaj"
                      className="font-lg font-light"
                    >
                      Solana Beach
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6">
              <h3 className="text-lg">SOCIALS</h3>
              <div>
                <ul className="flex flex-col gap-3 items-start">
                  <li>
                    <Link
                      href="https://x.com/iceSOL_"
                      className="font-lg font-light"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/vxrT3gJR"
                      className="font-lg font-light"
                    >
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://t.me/irffanasiff"
                      className="font-lg font-light"
                    >
                      Telegram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
