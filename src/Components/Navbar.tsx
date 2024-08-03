import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-10 w-[100%] bg-white">
      <div className="logo cursor-pointer ">
        <img
          src="/public/homelogo.png"
          alt="logo"
          className="inec_logo w-40 m-4"
        />
      </div>
      <ul className="flex flex-row gap-4 p-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
