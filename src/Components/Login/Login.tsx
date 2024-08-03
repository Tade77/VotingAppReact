import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="homepage">
      <section className="bg">
        <img
          src="/public/logoBgWhite.jpeg"
          className="inec w-[100vw] relative opacity-[0.45]"
          alt=""
        />
      </section>
      <section className=" absolute top-20 left-[40%]">
        <form
          action=""
          className="login flex flex-col justify-center items-center space-y-6 h-[100vh]"
        >
          <h1 className="-ml-[65px] text-2xl text-white">Sign in to proceed</h1>
          <input
            type="text"
            placeholder="email"
            className="bg-white p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="password"
            className="bg-white p-2 rounded-md"
          />
          <button className=" px-[6.8rem] py-2 rounded-md text-white bg-[rgb(35,194,44)]">
            Submit
          </button>
          <p className="text-white -ml-[65px]">
            Don't have account?
            <Link to={"/sign_up"}>
              <span className="text-blue-800 ml-2 underline">sign up</span>
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
