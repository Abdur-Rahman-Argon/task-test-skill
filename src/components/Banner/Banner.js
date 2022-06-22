import React from "react";

const Banner = () => {
  return (
    <div class="card lg:card-side bg-base-100 p-20 lg:flex-row-reverse gap-20 shadow-xl">
      <figure className="flex-1">
        <iframe
          className=" rounded-xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DTlCC4-XcoU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </figure>

      <div class="flex-1 text-left mx-auto">
        <h5 className="text-sm font-bold my-2 text-orange-600">Food Market</h5>
        <h2 class="text-5xl font-extrabold  my-1 text-style ">Welcome to </h2>
        <h2 class="text-5xl  font-extrabold mb-2 text-style "> Food Market</h2>
        <p class="text-md  my-2">
          The sky was cloudless and of a deep dark blue. The spectacle before us
          was indeed sublime.
        </p>
        <div class="  my-2 ">
          <button class="bg-[#96E4DD] border-0 text-white btn btn-accent">
            See Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
