import Link from "next/link";

import { Button } from "@squaress/ui";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <Button>Connect Wallet</Button>
    </nav>
  );
};

export default Navbar;
