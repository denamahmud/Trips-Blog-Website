import { Link } from "react-router-dom";
import { FaTiktok, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer({ about, facebook, insta, twitter, tiktok, whatsapp }) {
  // pages
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];
  // destination
  const destination = [
    { id: 1, name: "Baghdad" },
    { id: 2, name: "Babylon& Karbala" },
    { id: 3, name: "Ur Ziggurat &Marshes" },
    { id: 4, name: "Najaf& Uruk" },
    { id: 5, name: "Samarra&Hatra& Mosul" },
    { id: 6, name: "Mosul& lalish& Erbil" },
    { id: 7, name: "Erbil" },
  ];

  // social media
  const socialMedia = [
    { id: 1, icon: <FaTiktok size={26} color="#E3D5CB" />, to: { tiktok } },
    {
      id: 2,
      icon: <FaSquareFacebook size={26} color="#E3D5CB" />,
      to: { facebook },
    },
    { id: 3, icon: <FaTwitter size={26} color="#E3D5CB" />, to: { twitter } },
    { id: 4, icon: <FaInstagram size={26} color="#E3D5CB" />, to: { insta } },
    { id: 5, icon: <FaWhatsapp size={26} color="#E3D5CB" />, to: { whatsapp } },
  ];
  return (
    <footer className="bg-lightBrown ">
      <div className="mx-5 md:mx-20 grid grid-cols-1 md:grid-cols-4  ">
        <div className="text-center p-2 md:p-5">
          <h2 className=" text-darkBrown text-center my-8 capitalize font-bold text-xl">
            about us
          </h2>
          <p className="text-justify leading-8 text-darkBrown">{about}</p>
        </div>

        <div className="text-center p-5">
          <h2 className="text-darkBrown capitalize my-8 font-bold text-xl">
            destination
          </h2>
          <ul className="text-darkBrown">
            {destination.map((dest, index) => {
              return (
                <li
                  key={index}
                  className="border-b-[1px] border-b-darkBrown p-5"
                >
                  <Link to="/" className="text-darkBrown">
                    {dest.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-center p-5">
          <h2 className="text-darkBrown capitalize my-8 font-bold text-xl">
            pages
          </h2>
          <ul>
            {pages.map((page, index) => {
              return (
                <li
                  key={index}
                  className="border-b-[1px] border-b-darkBrown p-5"
                >
                  <Link to={page.path} className="text-darkBrown">
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-center p-5 w-full">
          <h2 className="text-darkBrown capitalize my-8 font-bold text-xl">
            Follow Us
          </h2>

          <ul className="flex justify-center">
            {socialMedia.map((social, index) => {
              return (
                <li
                  key={index}
                  className="bg-darkBrown rounded-full p-3 md:p-0 md:w-12 md:h-12 flex justify-center items-center m-1 hover:scale-[1.2] transition-all cursor-pointer duration-[.5s]"
                >
                  <Link to={social.to} target="_blank">
                    {social.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
