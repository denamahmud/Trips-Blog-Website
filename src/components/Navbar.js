import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import { baseUrl } from "./apiConfig"; 

function Navbar({ icon, whatsapp }) {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <nav className=" font-overlock bg-lightBrown p-5 flex justify-between">
      <Link to="/" className="block md:hidden m-0">
        <figure>
          <img
            lazy="true"
            loading="lazy"
            src={baseUrl + icon}
            alt="logo"
            width={100}
            height={100}
          />
        </figure>
      </Link>

      <ul
        ref={navRef}
        className="absolute mx-auto w-full md:w-fit left-0 -top-[100vh] md:static h-[100vh] 
        md:h-20 flex justify-center items-center bg-darkBrown md:bg-transparent flex-col md:flex-row transition-all duration-1000 z-10 gap-10 md:gap-0 "
      >
        <li className="hover:scale-[1.2] ease-in duration-300">
          <Link
            onClick={showNavbar}
            to="/blogs"
            className="capitalize text-lightBrown md:text-darkBrown  mx-4 hover:bg-darkBrown hover:text-lightBrown text-lg md:text-2xl p-1"
          >
            blogs
          </Link>
        </li>

        <li className="hover:scale-[1.2] ease-in duration-300">
          <Link
            onClick={showNavbar}
            to="/about"
            className="capitalize text-lightBrown md:text-darkBrown  mx-4
                    hover:bg-darkBrown hover:text-lightBrown text-lg md:text-2xl p-1"
          >
            about
          </Link>
        </li>
        <li className="mx-40 hidden md:block">
          <Link to="/" onClick={showNavbar}>
            <figure>
              <img
                lazy="true"
                loading="lazy"
                src={baseUrl + icon}
                alt="logo"
                width={100}
                height={100}
              />
            </figure>
          </Link>
        </li>
        <li className="hover:scale-[1.2] ease-in duration-300">
          <Link
            onClick={showNavbar}
            to="/tours"
            className="capitalize text-lightBrown md:text-darkBrown mx-4 hover:bg-darkBrown hover:text-lightBrown text-lg md:text-2xl p-1"
          >
            tours
          </Link>
        </li>
        <li className="hover:scale-[1.2] ease-in duration-300">
          <Link
            onClick={showNavbar}
            to="/contact"
            className="capitalize text-lightBrown mx-4 md:text-darkBrown  
                    hover:bg-darkBrown hover:text-lightBrown text-lg md:text-2xl "
          >
            contact
          </Link>
        </li>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <LiaTimesSolid size={35} color="#E3D5CB" />
        </button>

        <Link
          to={whatsapp}
          className="bg-lightBrown p-2 flex justify-center items-center border-solid border-2 border-darkBrown md:hidden cursor-pointer "
        >
          <FaWhatsapp size={30} color="#804216" />
        </Link>
      </ul>
      <button className="block md:hidden" onClick={showNavbar}>
        <RiMenu3Fill size={35} color="#5b3b24" />
      </button>
    </nav>
  );
}

export default Navbar;
