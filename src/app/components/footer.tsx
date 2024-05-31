import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className=" mx-auto text-center">
        <div className="flex justify-around">
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-xl">DOCS</h3>
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
            <h3 className="text-xl">Links</h3>
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
            <h3 className="text-xl">SOCIALS</h3>
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
                    href="https://discord.gg/5z2ayPG8"
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
    </footer>
  );
};

export default Footer;
