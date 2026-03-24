import React from "react";
import { Grid2x2, CircleQuestionMark, BookOpen, LogIn } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-100 py-5 border border-gray-400 flex justify-between px-20">
        <h3 className="flex text-2xl text-black items-center gap-1">
          <span className="font-bold">English</span>
          <span className="bg-[#00BCFF] text-white">
            <Grid2x2 />
          </span>
          <span>Janala</span>
        </h3>
        <div className="space-x-2">
          <button className="btn btn-outline btn-primary">
            <CircleQuestionMark /> FAq
          </button>
          <button className="btn btn-outline btn-primary">
            <BookOpen />
            Learn
          </button>
          <button className="btn btn-outline btn-primary">
            <LogIn />
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
