import { Link } from "react-router-dom"; 
import Button from "../Button";
import { FaWhatsapp } from "react-icons/fa";
import { baseUrl } from "../apiConfig"; 

const Header = ({ whatsapp, iconHeader }) => {
  return (
    <header className="bg-darkBrown flex md:flex-row flex-col-reverse justify-between">
      <div className="text-lightBrown md:ml-40 relative md:static p-3 md:p-0 mt-10 md:mt-48 ">
        <h6 className="text-xl">iraq tours</h6>
        <h3 className="text-3xl md:text-4xl mt-2 mb-8">
          Best Iraq Tour Packages
        </h3>
        <Link to="/tours" className=" boxShadow">
          <Button title="See Tours" />
        </Link>
      </div>
      <figure className="w-[400px] relative">
        <img
          lazy='true'
          loading="lazy"
          src={baseUrl + iconHeader}
          className="w-full md:w-[400px] h-[300px] md:h-fit object-cover object-bottom"
        />
        <div className="overlayHeader"></div>
      </figure>

      <div className="bg-lightBrown p-3 absolute left-0 top-24 md:flex justify-center items-center border-solid border-2 border-darkBrown hidden cursor-pointer">
        <Link to={whatsapp} target="_blank">
          <FaWhatsapp size={25} color="#804216" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
