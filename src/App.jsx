import { useState } from "react";
import person from "./assets/person-unsplash.jpg";

function App() {
  return (
    <div className="h-screen w-screen relative p-0 m-0 overflow-hidden">
      <div className="flex w-full justify-end items-center px-4 py-2 gap-4 absolute top-0 left-0">
        <p className="text-sm">Gmail</p>
        <p className="text-sm">Images</p>

        <svg
          class="gb_0e"
          focusable="false"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-gray-600"
        >
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>

        <img
          src={person}
          className="img h-7 w-7 object-cover rounded-full"
        ></img>
      </div>

      <div className="h-full w-full"></div>

      <footer className="absolute bottom-0 left-0 w-full bg-[#F2F2F2]">
        <div className="w-full py-3.5 px-7 text-gray-600 border-b-[1px] border-b-gray-300">
          <p className="text-semibold">Nigeria</p>
        </div>

        <div className="py-3.5 px-7 flex justify-between items-center relative">
          {/* Left side links */}
          <div className="flex gap-4 text-gray-600 text-sm">
            <p className="text-semibold">About</p>

            <p className="text-semibold">Advertising</p>

            <p className="text-semibold">Business</p>

            <p className="text-semibold">How Search works</p>
          </div>

          {/* Middle side links */}
          <div className="flex-gap-2 items-center-justify-center text-gray-600 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-semibold">🍀 Carbon neutral since 2007</p>
          </div>

          <div className="flex gap-4 text-gray-600 text-sm">
            <p className="text-semibold">Privacy</p>

            <p className="text-semibold">Terms</p>

            <p className="text-semibold">Setting</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
