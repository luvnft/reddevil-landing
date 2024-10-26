import Link from "next/link";
import { motion } from "framer-motion";
import TwitterIcon from '@mui/icons-material/Twitter'; // Ensure this line is included

export default function Landing() {
  return (
    <div>
      {/* Header Section */}
      <header className="mt-8 w-full backdrop-blur-sm bg-black/30 fixed font-[Rancho] tracking-widest z-10">
        <div className="flex items-center md:w-[80%] md:mx-auto p-4 justify-between">
          <img src="/logo.png" className="w-16" alt="logo" />
          <nav className="items-center font-regular md:flex hidden">
            <Link href="/" className="text-2xl text-white transition-all duration-500 mx-5 font-bold">Home</Link>
            <Link href="https://discord.gg/vz5nd36Xsm" className="text-2xl text-white transition-all duration-500 mx-5">Discord</Link>
            <Link href="https://bdisc.golf" scroll={true} className="scroll-smooth text-2xl text-white transition-all duration-500 mx-5">BDISC</Link>
            <Link href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri" className="text-2xl text-white transition-all duration-500 mx-5">Mint</Link>
            <Link href="https://twitter.com/bdiscgolfr">
              <TwitterIcon className="text-white" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Landing Section */}
      <div className="flex items-center justify-between bg-[url('/landing.jpg')] bg-cover h-[calc(100vh-60px)] relative">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="lg:flex justify-between my-24 pt-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center pl-[8.75%] h-[100%] lg:w-full"
          >
            <div className="flex flex-col md:pr-[8.75%]">
              <h1 className="lg:text-[75px] md:text-[32px] lg:pt-[10%] lg:pb-[3.5%] md:pt-[10%] md:font-[900] font-[Rancho] tracking-widest text-white drop-shadow-lg">
                <span className="text-green-500">BDISC EMOTES</span>
              </h1>
              <div className="text-[26px] pb-[7.1%] text-white font-black drop-shadow-lg">
                Introducing BDisc Emotes Collectibles on Solana – a vibrant,
                playful collection of 1,111 disc-shaped emote NFTs that capture
                the thrill and emotion of the disc golf experience! Each emote
                is uniquely crafted to resemble an expressive emoji face on a disc
                golf-inspired shape, featuring an array of traits and themes that
                range from lighthearted to ultra-rare collectibles.
              </div>
              <Link
                href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri"
                className="text-[20px] text-center text-black w-[28.8%] rounded-[12px] bg-white transition-all duration-500 font-bold py-4 mb-8 font-[Rancho] tracking-widest"
              >
                Mint Now
              </Link>
            </div>
          </motion.div>

          <div className="flex-col overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0, translateX: 20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="container">
                <img
                  src="/images/44.jpg"
                  alt="Logo"
                  className="border-4 border-indigo-500/100 left-0 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

