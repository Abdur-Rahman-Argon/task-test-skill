import React from "react";

const Navigation = () => {
  return (
    <nav id="Contact" class="navbar bg-base-100 flex justify-between px-10">
      <div class="flex justify-around">
        <a
          href="/"
          class="btn btn-ghost normal-case text-xl text-style text-3xl"
        >
          FOOD
        </a>
        <div class="navbar-start hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Manu">Manu</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-end hidden lg:flex">
        <a class="btn text-lime-600 bg-slate-300 border-0 font-bold">
          Contact us
        </a>
      </div>

      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 -left-32"
        >
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Manu</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
