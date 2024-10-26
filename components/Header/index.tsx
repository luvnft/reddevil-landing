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
  
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State for mobile menu

  return (
    <header className="mt-8 w-full backdrop-blur-sm bg-black/30 fixed font-[Rancho] tracking-widest">
      <div className="flex items-center md:w-[80%] md:mx-auto p-4 justify-between opacity-100">
        <img src="/logo.png" className="w-16" alt="logo" />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center font-regular">
          <Link href="/" className="text-2xl text-white transition-all duration-500 mx-5 font-bold">Home</Link>
          <Link href="https://discord.gg/vz5nd36Xsm" className="text-2xl text-white transition-all duration-500 mx-5">Discord</Link>
          <Link href="https://bdisc.golf" scroll={true} className="scroll-smooth text-2xl text-white transition-all duration-500 mx-5">BDISC</Link>
          <Link href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri" className="text-2xl text-white transition-all duration-500 mx-5" style={{ scrollBehavior: "smooth" }}>Mint</Link>
          <Link href="https://twitter.com/bdiscgolfr"><TwitterIcon className="text-white" /></Link>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" className="text-2xl text-white transition-all duration-500 mx-5 font-bold">Home</Link>
          <Link href="https://discord.gg/vz5nd36Xsm" className="text-2xl text-white transition-all duration-500 mx-5">Discord</Link>
          <Link href="https://bdisc.golf" scroll={true} className="scroll-smooth text-2xl text-white transition-all duration-500 mx-5">BDISC</Link>
          <Link href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri" className="text-2xl text-white transition-all duration-500 mx-5" style={{ scrollBehavior: "smooth" }}>Mint</Link>
          <Link href="https://twitter.com/bdiscgolfr"><TwitterIcon className="text-white" /></Link>
        </nav>

        <Login 
          opened={loginOpened} 
          open={() => setLoginOpen(true)} 
          close={() => setLoginOpen(false)} 
          signupOpen={() => setSignupOpen(true)} 
        />
        <SignUp 
          opened={signupOpened} 
          open={() => setSignupOpen(true)} 
          close={() => setSignupOpen(false)} 
          loginOpen={() => setLoginOpen(true)} 
        />
        <JoinUs open={show} closeJoinUs={closeJoinUs} />
      </div>
    </header>
  );
}
