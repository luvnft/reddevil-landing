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
                🏗️ Community Build-UP 🏗️
              </p>
              <p className="text-green-200 font-bold text-xl">
                At first we will start with the community building, which
                includes Launching of our discord server, promotion of our
                project, Our target is to reach at least 10k discord members
                before 2025.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="md:p-10 flex-col space-y-10 grid justify-items-stretch lg:flex  ">
              <p className="text-green-200 font-bold text-2xl ">
                 ♻️ Recycled BDISC Discs ♻️
              </p>
              <p className="text-green-200 font-bold text-xl ">
                Once we reach 10k members on our discord, then it is the time to
                launch our first collection: Red Devils. A set of 1000 NFT will
                be launch on Red Devils Website on solana network.
              </p>
            </div>
            <div className="border-l-4">
              <h1 className="md:p-10 text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Fairway Goals 2️⃣
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Birdie Opportunity 3️⃣
              </h1>
            </div>
            <div className="md:p-10 flex-col space-y-10  grid justify-items-stretch lg:flex border-l-4 ">
              <p className="text-green-200 font-bold text-2xl ">👕 BDISC Emote Merch 👕</p>
              <p className="text-green-200 font-bold text-xl ">
                Once the Project sells out, Birdie Opportunity 3 AKA Merch will launch.
                Holders will receive free merch matching their BDISC Emote.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="md:p-10 flex-col space-y-10 grid justify-items-stretch lg:flex ">
              <p className="text-green-600  font-bold text-2xl ">
                💵 Staking and Traits Upgrade 💵
              </p>
              <p className="text-green-600  font-bold text-xl">
                Staking website will be launched. Launch of $Devil tokens, by
                staking of your Devils you will earn $Devil token which can
                later be converted into $Solana. Raffles, art upgrades through
                burning $Devil tokens.
              </p>
            </div>
            <div className="md:p-10 grid justify-items-stretch lg:flex border-l-4 ">
              <h1 className="md:p-10 text-white font-bold text-3xl mt-5 font-[Rancho] tracking-widest">
                 Ace Goals 4️⃣
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
                🥳 Livestream Events 🥳
              </p>
              <p className="text-green-600 font-bold text-xl ">
                Chain Link 5 will be focused on Live stream events and in-person
                meet ups at local parks and golf courses across the United States.
                Fun first is the motto and the GTM strategy to make BDISC the #1
                social media disc golf league starting with the ACE challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
