import Link from "next/link";

import { Button } from "@squaress/ui";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <div className="flex items-center space-x-6 z-99">
        <Link href="/">
          <Logo />
        </Link>

        {/* <div className="text-md text-gray-500 cursor-not-allowed">Stake</div>

        <Link href={"/system"}>
          <div className="text-md text-gray-500 cursor-pointer">System</div>
        </Link>
        <Link href={"/security"}>
          <div className="text-md text-gray-500 cursor-pointer">Security</div>
        </Link> */}
      </div>
      <Button className="hidden md:flex" disabled>
        Stake now
      </Button>
    </nav>
  );
};

export default Navbar;
