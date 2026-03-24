import React from "react";
import heroImgage from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="bg-white text-black px-20 py-20 flex gap-10 justify-between items-center fixed ">
      <div>
        <h3 className="text-3xl font-bold pb-10">
          <span className="text-[#00BCFF]">English</span> is Easy!!
        </h3>
        <p>
          আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা
          আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে যাবে
          অন্য একটি Level এ
        </p>
        <fieldset className="fieldset rounded-box w-xs ">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input bg-gray-400 "
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input bg-gray-400"
            placeholder="Password"
          />

          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
      </div>
      <div>
        <img src={heroImgage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
