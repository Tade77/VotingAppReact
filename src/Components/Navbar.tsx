import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-10 w-[100%] bg-white">
      <div className="logo ">
        <img
          src="/public/logoBgWhite.jpeg"
          alt="logo"
          className="inec_logo w-32 h-20 object-fill rounded-lg"
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
