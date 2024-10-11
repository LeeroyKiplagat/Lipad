import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <div className="  md:h-[100px] w-screen border-b border-gray-400 fixed z-10 bg-white shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-[15px] ">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-14">
            <li className="nav-text">Home</li>
            <li className="nav-text">Other Products</li>
            <li className="nav-text">Pricing</li>
            <li className="nav-text">FAQ</li>
            <li className="nav-text">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-[15px]">
            <button className=" border border-gray-900 p-2 rounded-full nav-text">
              Login
            </button>
            <button className=" border border-gray-900 p-2 rounded-full text-lg bg-[#1F2544] text-white">
              Get's Started
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
