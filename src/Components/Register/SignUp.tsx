import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="homepage">
      <section className="bg">
        <img src="/public/INEC.jpg" className="inec mt-8" alt="" />
      </section>
      <form
        action=""
        className="login flex flex-col justify-center items-center space-y-6 h-[100vh]"
      >
        <h1 className="-ml-[450px] text-2xl text-white">Sign Up</h1>
        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="firstname"
            className="bg-green-100 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="lastname"
            className="bg-green-100 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="card number"
            className="bg-green-100 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="email"
            className="bg-green-100 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="password"
            className="bg-green-100 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="confirm password"
            className="bg-green-100 p-2 rounded-md"
          />
        </div>
        <button className=" px-[15.3rem] py-2 rounded-md bg-[rgb(48,195,110)] text-white">
          Submit
        </button>
        <p className="text-white -ml-[310px]">
          Already have an account?
          <Link to={"/login"}>
            <span className="text-blue-800 underline">sign in</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
