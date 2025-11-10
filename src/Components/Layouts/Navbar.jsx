import React, { use } from "react";
import logo from "../../Assets/logo1.png";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/browseCars">BROWSE CARS</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/addCar">ADD CAR</Link>
          </li>
          <li>
            <Link to="/myListings">MY LISTINGS</Link>
          </li>
          <li>
            <Link to="/myBookings">MY BOOKINGS</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm font-primary py-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-[170px] h-[60px] lg:pl-2"
              src={logo}
              alt="Brand Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu   menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end px-10">
          {user && (
            <div className="font-primary mr-4">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="rounded-full w-8"
                    src={user.photoURL}
                    alt="User's photo"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 p-3 shadow-md space-y-2"
                >
                  <li>
                    <h4 className="font-semibold text-[18px] font-primary">
                      {user.displayName}
                    </h4>
                  </li>
                  <li>
                    <a className="font-semibold text-[18px] font-primary">
                      {user.email}
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="px-10 py-3 bg-[#7D0125] text-white font-semibold border-0 hover:bg-[#253241] text-center rounded-none "
                    >
                      LOG OUT
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div>
            {user ? (
              ""
            ) : (
              <Link to="/login">
                <button className="px-10 py-3 bg-[#7D0125] text-white font-semibold border-0 hover:bg-[#253241]">
                  LOGIN
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
