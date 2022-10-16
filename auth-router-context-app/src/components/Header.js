import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("user", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn bg-cyan-500 text-sky-900 border-none hover:bg-cyan-500 normal-case text-xl">
          Auth Router Context
        </button>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>

        {user?.email || (
          <>
            <Link to="/login" className="btn btn-ghost normal-case text-xl">
              Login
            </Link>
            <Link to="/register" className="btn btn-ghost normal-case text-xl">
              Register
            </Link>
          </>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {user?.email && (
          <>
            <Link to="/profile" className="btn btn-ghost normal-case text-xl">
              Welcome {user.email}
            </Link>
            <button onClick={handleSignOut} className="btn btn-sm">
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
