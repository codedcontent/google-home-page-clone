import { useState } from "react";
import person from "./assets/person-unsplash.jpg";
import googleIcon from "./assets/googlelogo_color_272x92dp.png";

function App() {
  return (
    <div className="h-screen w-screen relative p-0 m-0 overflow-hidden">
      <div className="flex w-full justify-end items-center px-4 py-3 gap-6 absolute top-0 left-0">
        <a href="" className="text-sm">
          Gmail
        </a>
        <a href="" className="text-sm">
          Images
        </a>

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
          className="img h-8 w-8 object-cover rounded-full"
        ></img>
      </div>

      <div className="h-full w-full flex flex-col items-center mt-32">
        <div className="w-full">
          <div className="w-full m-auto flex items-center justify-center">
            <img src={googleIcon} alt="googleIcon" className="h-24" />
          </div>

          {/* Search bar */}
          <div className="h-12 w-1/2 m-auto  border-2 border-gray-200 rounded-full hover:shadow-[0_1px_6px_0px_rgba(32,33,36,0.28)] flex justify-between items-center gap-2 px-3">
            {/* Search icon */}
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-primary"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>

            <input type="text" className="w-full h-full" />
          </div>
        </div>
      </div>

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
