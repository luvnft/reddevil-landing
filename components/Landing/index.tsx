/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="flex items-center justify-between bg-[url('/landing.jpg')] bg-cover h-1/3">
      <div className="lg:flex justify-between my-24 pt-24">
        <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center pl-[8.75%] h-[100%] lg:w-full"
        >
          <div className="flex flex-col md:pr-[8.75%]">
            <h1 className="lg:text-[65px] lg:pt-[10%] lg:pb-[3.5%] md:text-[28px] md:pt-[10%] md:font-[900] font-[Rancho] tracking-widest">
              BDISC <span className="text-green-700">EMOTES</span>
            </h1>
            <div className="text-[24px] pb-[7.1%] text-indigo-600 font-black">
              Introducing BDisc Emotes Collectibles on Solana – a vibrant,
              playful collection of 1,111 disc-shaped emote NFTs that capture
              the thrill and emotion of the disc golf experience! Each emote
              is uniquely crafted to resemble an expressive emoji face on a disc
              golf-inspired shape, featuring an array of traits and themes that
              range from lighthearted to ultra-rare collectibles.
            </div>
            <Link
              href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri"
              className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-black transition-all duration-500 font-bold py-4 mb-8 font-[Rancho] tracking-widest"
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
  );
}
