import React from "react";
import Card from "../Card";

const Manu = () => {
  return (
    <div id="Manu" class="">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-xl text-orange-600 font-bold text-style ">
            Our Menu
          </h1>
          <h1 class="text-5xl font-extrabold text-style ">Favorite Food</h1>
          <p class="py-6">
            The sky was cloudless and of a deep dark blue. The spectacle before
            us was indeed sublime.
          </p>
        </div>
      </div>

      <Card></Card>

      <div>
        <button class=" text-xl  my-20 font-semibold text-[#62D9CF] ">
          Full manu
        </button>
      </div>
    </div>
  );
};

export default Manu;
