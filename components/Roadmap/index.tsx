import { motion } from "framer-motion";
import WavyText from "../../global_componenets/WavyText";

export default function Roadmap() {
  return (
    <div className="lg:flex flex-col bg-gradient-to-b from-black to-white">
      <div className="flex flex-wrap px-14  mb-12">
        <div className="flex flex-col ">
          <h1 className="lg:text-[65px] font-bold mb-6  md: text-[28px] md:font-[900] font-[Rancho] tracking-widest text-indigo-800">
            Roadmap <br />{" "}
            {/* <span className="text-main text-red-700">Red Devils?</span> */}
          </h1>

          <h1 className="text-indigo-600 font-bold text-xl"></h1>
          <br />
        </div>
        <div className="flex-col space-y">
          <div className="grid grid-cols-2 ">
            <div>
              <h1 className="md:p-10 text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                Tee-Off 1️⃣
              </h1>
            </div>
            <div className="md:p-10 flex-col space-y-10 justify-items-stretch lg:flex border-l-4">
              <p className="text-green-200 font-bold text-2xl">
                🏗️ Community
              </p>
              <p className="text-green-200 font-bold text-xl">
                We tee-off with community building, launching a Discord server,
                and promoting it to reach 10k members by 2025.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="md:p-10 flex-col space-y-10 grid justify-items-stretch lg:flex  ">
              <p className="text-green-200 font-bold text-2xl ">
                 ♻️ BDISC Discs
              </p>
              <p className="text-green-200 font-bold text-xl ">
                BDISC cares about nature and recycled Emote themed discs will be
                for sale in our upcoming e-commerce marketplace.
              </p>
            </div>
            <div className="border-l-4">
              <h1 className="md:p-10 text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Fairway 2️⃣
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Birdie 3️⃣
              </h1>
            </div>
            <div className="md:p-10 flex-col space-y-10  grid justify-items-stretch lg:flex border-l-4 ">
              <p className="text-green-200 font-bold text-2xl ">👕 BDISC Merch</p>
              <p className="text-green-200 font-bold text-xl ">
                Once the Project sells out, Birdie Opportunity 3 AKA Merch will launch.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="md:p-10 flex-col space-y-10 grid justify-items-stretch lg:flex ">
              <p className="text-green-600  font-bold text-2xl ">
                💵 Challenges
              </p>
              <p className="text-green-600  font-bold text-xl">
                Win $DISC tokens airdropped to our verified members Solana
                wallet account for winning social challenges on TikTok that
                include a branded AR effect trophy. BDISC Emote Legendary and
                Super-Rare shareholders vote on the challenges and rewards.
              </p>
            </div>
            <div className="md:p-10 grid justify-items-stretch lg:flex border-l-4 ">
              <h1 className="md:p-10 text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Ace 4️⃣
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="md:p-10 text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Chain Link 5️⃣
              </h1>
            </div>
            <div className="md:p-10 flex-col space-y-10 grid justify-items-stretch lg:flex border-l-4 ">
              <p className="text-green-600 font-bold text-2xl ">
                🥳 Events
              </p>
              <p className="text-green-600 font-bold text-xl ">
                Chain Link 5 will be focused on Live stream events and in-person
                meet ups at local parks and golf courses across the United States.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
