import React from "react";

const About = () => {
  return (
    <div id="About" class="card lg:card-side bg-base-100 p-20 gap-20">
      <figure className="flex-1">
        <img src="https://i.ibb.co/BKSDSB0/about.png" className="w-96" alt="" />
      </figure>

      <div class="flex-1 text-left">
        <h5 className="text-sm font-bold my-2 text-orange-600">About Us</h5>
        <h2 class="text-5xl font-extrabold  my-1 text-style ">Most Biggest</h2>
        <h2 class="text-5xl  font-extrabold mb-2 text-style "> Food Market</h2>
        <h3 class="text-xl  font-bold mb-2 text-style ">
          The sky was cloudless and of a deep
        </h3>
        <p class="text-md  my-2">
          A peep at some distant orb has power to raise and purify our thoughts
          like a strain of sacred music.
        </p>
        <div class="  my-2 ">
          <button class="text-[#62D9CF] border-0 bg-slate-100 font-bold btn btn-ghost">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
