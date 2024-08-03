import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <section className="bg">
        <img src="/public/INEC.jpg" className="inec mt-8" alt="" />
      </section>
      <section className="">
        <form
          action=""
          className="login flex flex-col justify-center items-center space-y-6 h-[100vh]"
        >
          <h1 className="-ml-24 text-white">Sign in to proceed</h1>
          <input
            type="text"
            placeholder="email"
            className="bg-green-100 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="password"
            className="bg-green-100 p-2 rounded-md"
          />
          <button className=" px-[6.8rem] py-2 rounded-md bg-[rgb(48,195,110)] text-white">
            Submit
          </button>
          <p className="text-white">
            Don't have account?
            <Link to={""}>
              <span className="text-blue-800 ml-2 underline">sign up</span>
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Home;

// <div className="bg">
//         <img src="/public/INEC.jpg" className="" alt="" />
//       </div>
