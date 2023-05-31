import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [navVissible, handleNavVissible] = useState(false);
  const [searchVissible, handleSearchVissible] = useState(false);
  const [searchClassState, handleSearchClassState] =
    useState("nav___searchField");

  const transitionNav = () => {
    if (window.scrollY > 50) {
      handleNavVissible(true);
    } else {
      handleNavVissible(false);
    }
  };
  const showSearchField = () => {
    handleSearchVissible(!searchVissible);
    let cS = searchClassState;
    cS = cS.includes("active")
      ? "nav___searchField"
      : "nav___searchField active";

    handleSearchClassState(cS);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);
  return (
    <div className="nav">
      <div className={`nav___container ${navVissible && "nav___black"}`}>
        <div className="nav___leftSideContent">
          <img
            src={"bharaflix_nobg.png"}
            alt="Bharaflix"
            className="nav___container_logo"
          />
          <ul className="nav___menuLinks">
            <li className="nav___link_active nav___menuLink">
              <a href="#">Home</a>
            </li>
            <li className="nav___menuLink">
              <a href="#">TV Shows</a>
            </li>
            <li className="nav___menuLink">
              <a href="#">Movies</a>
            </li>
            <li className="nav___menuLink">
              <a href="#">New & Popular</a>
            </li>
            <li className="nav___menuLink">
              <a href="#">My List</a>{" "}
            </li>
            <li className="nav___menuLink">
              <a href="#">Browser By Lenguages</a>{" "}
            </li>
          </ul>
        </div>
        <div className="nav___rightSideContent">
          <div className={searchClassState}>
            <input
              className="nav___searchInput"
              id="nav___searchInput"
              placeholder="People, titles, genres"
            />
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="nav___searchIcon"
              onClick={showSearchField}
            >
              <path
                d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                fill="#ffffff"
              />
            </svg>
          </div>

          <svg
            width="28px"
            height="28px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="nav___alertIcon"
          >
            <path
              fill="#ffffff"
              d="M3.423 7.003C3.352 3.308 6.171 0 10 0c3.83 0 6.648 3.308 6.576 7.003a28.69 28.69 0 00-.005.497c0 1.647.188 3.94.315 5.3.006.067.009.134.009.2H18a1 1 0 110 2h-4a4 4 0 01-8 0H2a1 1 0 110-2h1.105c0-.066.003-.133.01-.2.126-1.36.314-3.653.314-5.3 0-.16-.002-.325-.006-.497zM7.023 13h7.865l.003-.003a.017.017 0 00.003-.005v-.006c-.126-1.36-.323-3.736-.323-5.486 0-.174.002-.353.006-.536C14.63 4.253 12.578 2 10 2S5.37 4.253 5.423 6.964c.004.183.006.362.006.536 0 1.75-.197 4.126-.324 5.486a.02.02 0 000 .004v.002l.004.005a.013.013 0 00.003.003h1.911zM8 15a2 2 0 104 0H8z"
            />
          </svg>

          <div className="nav___dropdown">
            <div className="nav___dropdown-icon">
              {" "}
              <img
                src={"avatar.png"}
                alt="Avatar chiquiluki de chiguire"
                className="nav___container_avatar"
              />
            </div>
            <div className="nav___dropdown-content">
              <a href="#">
                <img
                  src={"pizza.jpg"}
                  alt="Avatar chiquiluki de pizza con piÑa "
                  className="nav___container_avatar"
                />
                <p>pizza w pinnapple</p>
              </a>
              <a href="#">
                <img
                  src={"furro.png"}
                  alt="Avatar chiquiluki de pizza con piÑa "
                  className="nav___container_avatar"
                />
                <p>Furro Alberto</p>
              </a>
              <a href="#">
                <img
                  src={"print.png"}
                  alt="Avatar chiquiluki de pizza con piÑa "
                  className="nav___container_avatar"
                />
                <p>Functional printer</p>
              </a>

              <hr />
              <a href="#">
                <svg
                  fill="#fff"
                  height="28px"
                  width="28px"
                  version="1.1"
                  id="XMLID_278_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="nav___dropdownOptionsIcons"
                >
                  <g id="edit" stroke="#fff">
                    <g>
                      <path d="M6.5,24H0v-6.5L17.5,0L24,6.5L6.5,24z M2,22h3.7L18,9.7L14.3,6L2,18.3V22z M15.7,4.6l3.7,3.7l1.8-1.8l-3.7-3.7L15.7,4.6z" />
                    </g>
                  </g>
                </svg>
                <p>Manage Prolifes</p>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  width="28px"
                  height="28px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>transfer</title>
                  <path d="M0 28v-8q0-0.832 0.576-1.408t1.44-0.608h8q0.8 0 1.408 0.608t0.576 1.408v8q0 0.832-0.576 1.408t-1.408 0.576h-8q-0.832 0-1.44-0.576t-0.576-1.408zM0 7.968q0.032-0.8 0.608-1.376l4-4q0.448-0.48 1.056-0.576t1.12 0.16 0.864 0.704 0.352 1.12v2.016h2.016v4h-2.016v1.984q0 0.672-0.352 1.152t-0.896 0.704-1.12 0.128-1.024-0.576l-4-4q-0.64-0.608-0.608-1.44zM4 25.984h4v-4h-4v4zM12 9.984v-4h2.016v4h-2.016zM14.016 25.984v-4h1.984v4h-1.984zM16 9.984v-4h2.016v4h-2.016zM18.016 25.984v-4h1.984v4h-1.984zM20 12v-8q0-0.832 0.576-1.408t1.44-0.608h8q0.8 0 1.408 0.608t0.576 1.408v8q0 0.832-0.576 1.408t-1.408 0.576h-8q-0.832 0-1.44-0.576t-0.576-1.408zM22.016 25.984v-4h1.984v-1.984q0-0.672 0.384-1.152t0.864-0.704 1.12-0.096 1.056 0.512l4 4q0.608 0.64 0.576 1.44t-0.576 1.408l-4 4q-0.48 0.448-1.088 0.544t-1.12-0.128-0.864-0.704-0.352-1.12v-2.016h-1.984zM24 9.984h4v-4h-4v4z"></path>
                </svg>
                <p>Transfer Profiles</p>
              </a>
              <a href="#">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="User / User_02">
                    <path
                      id="Vector"
                      d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <p>Account</p>
              </a>
              <a href="#">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Help center</p>
              </a>
              <hr />
              <a href="#">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z"
                    fill="#fff"
                  />
                </svg>
                <p>Sign Out</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
