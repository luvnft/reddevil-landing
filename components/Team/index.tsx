/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import JoinUs from "../JoinUs";
import Link from "next/link";

const teamMembers = [
  {
    avatar: "images/990.jpg",
    name: "Legendary",
    role: "5%"
  },
  {
    avatar: "images/972.jpg",
    name: "Super Rare",
    role: "10%"
  },
  {
    avatar: "images/835.jpg",
    name: "Rare",
    role: "15%"
  },
  {
    avatar: "images/810.jpg",
    name: "Common",
    role: "70%"
  }
];

const Team = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const closeJoinUs = () => setShow(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div
          className="flex flex-col items-center justify-center  px-10 bg-[url('/back.jpg')] bg-cover"
          id="team"
        >
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col container mt-32 sm:mt-10"
          >
            <div className="flex items-center justify-between sm:mt-10">
              <h1 className="lg:text-4xl font-extrabold text-green-800 text-left md: text-[28px] font-[900] font-[Rancho] tracking-widest">
                 Rarities
              </h1>
              <div className="flex items-center justify-center">
                <button className="next-btn w-[50px] h-[50px] px-3 py-2 bg-[#5051F90D] rounded-lg mr-4">
                  <img src="images/arrow-left.png" alt="left" />
                </button>
                <button className="prev-btn w-[50px] h-[50px] px-3 py-2 bg-[#5051F90D] rounded-lg mr-4">
                  <img src="images/arrow-right.png" alt="right" />
                </button>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              style={{ overflow: "hidden" }}
              className="w-full mt-6"
              loop
              navigation={{
                nextEl: ".prev-btn",
                prevEl: ".next-btn"
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2
                },
                1280: {
                  slidesPerView: 3
                },
                1536: {
                  slidesPerView: 4
                }
              }}
            >
              {teamMembers.map((member, j) => (
                <SwiperSlide key={j}>
                  <div className="slider-item bg-white p-5 bg-gradient-to-b from-black to-green-800 shadow-lg my-14 border-4 border-indigo-500/100">
                    <div className="flex flex-col">
                      <div className="flex items-center flex-col space-y-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className=" rounded-full"
                        />
                        <div className="flex flex-col items-center ml-3">
                          <h2 className="text-white text-2xl font-[FeastOfFlesh] tracking-widest">
                            {member.name}
                          </h2>
                          <p className="text-white text-xl">{member.role}</p>
                        </div>
                      </div>
                      {/* <div className="flex justify-start mt-3">
                        {member.detail.map((d, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 border border-gray-400 text-gray-400 rounded mr-2"
                          >
                            {d}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <div className="lg:flex flex-row items-center w-[100%]  justify-between overflow-x-hidden pb-12 ">
            <div className=" lg:w-[59%] h-[100%] md:w-full md:pb-12 pr-[8.75%] pb-12">
              <div className="text-[46px] h-1/2 text-white pt-[30px] pl-[8.75%] font-[Rancho] tracking-widest">
                Take a Shot: Blind Mint Your BDISC Emote!
              </div>
              <div className="text-[20px] h-1/2 text-white pt-[20px] pl-[8.75%]">
                BDISC Emote empower disc golf players by providing them with
                a unique stake in the company through Solana-based, tradable
                Emote meme stocks. When you mint a BDISC Emote, you enter a game
                of chance with exciting odds: Legendary Emotes have a 5% chance,
                Super Rare Emotes come in at 10%, Rare Emotes at 15%, and the most
                common variant, Common Emotes, boasts a 70% likelihood. Each Emote
                you hold gives you the opportunity to connect with other players
                in the BDISC community, enhancing your chances to unlock shareholder
                voting power and influence the future of BDISC Emote. Join the BDISC
                Discord today to find fellow Emote holders and make your voice heard
                in shaping the next chapter of disc golf!
              </div>
            </div>

            <div className="flex lg:w-[41%] h-[100%] items-center justify-center md: w-[50%]">
              <Link
                href="https://discord.gg/vz5nd36Xsm"
                className="text-[18px] border-none text-center text-white w-[34.6%] h-[71.89px] rounded-[12px] bg-green-700 transition-all duration-500 font-bold py-5 font-[Rancho] tracking-widest"
              >
                BDISC Discord
              </Link>
              <JoinUs open={show} closeJoinUs={closeJoinUs}></JoinUs>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;
