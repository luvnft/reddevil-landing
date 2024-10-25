/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import WavyText from "../../global_componenets/WavyText";
import Link from "next/link";

export default function Story() {
  return (
    <div className="lg:flex flex-col bg-gradient-to-b from-black to-green-800">
      <div className="flex flex-wrap px-14">
        <div className="lg:flex justify-between my-24 pt-24">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center pl-[8.75%] h-auto lg:w-full"
          >
            <div className="flex flex-col md:pr-[8.75%]">
              <h1 className="lg:text-[65px] lg:pt-[10%] lg:pb-[3.5%] md:text-[28px] md:pt-[10%] font-[900] font-[Rancho] tracking-widest text-indigo-800">
                WTF is <br />
                <span className="text-main text-green-700">BDISC Emote</span>
              </h1>
              <h1 className="text-white font-bold text-3xl mt-5">
                Disc Golf's #1 Meme: BDISC Emotes
              </h1>
              <div className="pb-[7.1%]">
                <h1 className="text-green-600 font-bold text-xl">
                  BDISC Emotes are the ultimate collectible and tradable NFTs for disc golfers. As the #1 meme-inspired disc NFT, each Emote brings iconic emoji-style expressions to the BDISC community. Trade and share them in the BDISC Discord, where exclusive holders gain access to upcoming merch like BDISC Emote recycled discs, apparel, and more!
                </h1>
                <br />
                <h1 className="text-green-600 font-bold text-xl">
                  Whether you're a new player or a seasoned pro, these collectible emotes celebrate disc golf culture and connect players like never before. BDISC Emotes aren't just digital assets – they're a badge of honor for the BDISC community!
                </h1>
              </div>
            </div>
            <Link
              href="https://launchmynft.io/collections/F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh/RD8O4h6s6auRYistrGri"
              className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-black transition-all duration-500 font-bold py-4 mb-8 font-[Rancho] tracking-widest"
            >
              Mint Now
            </Link>
          </motion.div>

          <div className="flex-col w-full">
            <motion.div
              initial={{ opacity: 0, translateX: 20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="container -space-y-48">
                <div className="z-0">
                  <img
                    src="/images/44.jpg"
                    alt="Disc Image"
                    className="border-4 border-green-500/100 left-0 rounded-full z-0"
                  />
                </div>
                <div className="right-0 z-10">
                  <img
                    src="/images/995.jpg"
                    alt="Disc Image"
                    className="border-4 border-green-500/100 right-0 rounded-full z-10"
                  />
                </div>
                <div className="z-20">
                  <img
                    src="/images/997.jpg"
                    alt="Disc Image"
                    className="border-4 border-green-500/100 left-0 rounded-full z-20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <img src="/bright-bg.png" className="bottom-10" alt="Background" />
    </div>
  );
}

