import React, { useState } from 'react';
import Link from 'next/link';
import Login from '../Login';
import JoinUs from '../JoinUs';
import SignUp from '../SignUp';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const closeJoinUs = () => setShow(false);

  const [loginOpened, setLoginOpen] = useState<boolean>(false);
  const [signupOpened, setSignupOpen] = useState<boolean>(false);

  return (
    <header className="mt-8 w-full backdrop-blur-sm bg-black/30 fixed font-[Rancho] tracking-widest z-20">
      <div className="flex items-center md:w-[80%] md:mx-auto p-4 justify-between opacity-100">
        <img src="/logo.png" className="w-16" alt="logo" />
        <nav className="items-center font-regular md:flex hidden">
          <Link href="https://emote.bdisc.golf" className="text-2xl text-white transition-all duration-500 mx-5 font-bold">Home</Link>
          <Link href="https://discord.gg/vz5nd36Xsm" className="text-2xl text-white transition-all duration-500 mx-5">Discord</Link>
          <Link href="https://bdisc.golf" scroll={true} className="scroll-smooth text-2xl text-white transition-all duration-500 mx-5">BDISC</Link>
          <Link href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri" className="text-2xl text-white transition-all duration-500 mx-5" style={{ scrollBehavior: "smooth" }}>Mint</Link>
          <Link href="https://twitter.com/bdiscgolfr">
            <TwitterIcon className="text-white" />
          </Link>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <nav className="md:hidden flex flex-col items-center mt-4">
        <Link href="https://emote.bdisc.golf" className="text-lg text-white transition-all duration-500 mx-2">Home</Link>
        <Link href="https://discord.gg/vz5nd36Xsm" className="text-lg text-white transition-all duration-500 mx-2">Discord</Link>
        <Link href="https://bdisc.golf" className="text-lg text-white transition-all duration-500 mx-2">BDISC</Link>
        <Link href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri" className="text-lg text-white transition-all duration-500 mx-2">Mint</Link>
      </nav>
    </header>
  );
}
