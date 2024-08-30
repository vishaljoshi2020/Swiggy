import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4 mx-3 my-2 rounded-lg">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="logo" />
      </div>
      <nav className="flex items-center space-x-8  font-bold">
        {" "}
        <span className="text-gray-600 text-lg">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>
        <Link
          className="text-gray-800 hover:text-red-500 hover:font-serif text-lg"
          to="/">
          Home
        </Link>
        <Link
          className="text-gray-800 hover:text-red-500 hover:font-serif text-lg"
          to="/About">
          About
        </Link>
        <Link
          className="text-gray-800 hover:text-red-500 hover:font-serif text-lg"
          to="/Contact">
          Contact Us
        </Link>
        <Link
          className="text-gray-800 hover:text-red-500 hover:font-serif text-lg"
          to="/grocery">
          Grocery
        </Link>
        <Link
          className="text-gray-800 hover:text-red-500 hover:font-serif text-lg"
          to="/cart">
          Cart
        </Link>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:text-red-500 hover:bg-white hover:border-red-500 border hover:font-serif text-lg transition-all duration-200"
          onClick={() => {
            setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
          }}>
          {loginBtn}
        </button>
      </nav>
    </header>
  );
};

export default Header;
