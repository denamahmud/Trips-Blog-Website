import { FaAngleRight } from "react-icons/fa";

const Button = ({ title, loadMore }) => {
  return (
    <div
      onClick={loadMore}
      className={`border-light cursor-pointer border-2 bg-darkBrown flex justify-center items-center w-40 p-1 shadow-md shadow-white hover:shadow-none	transition ease-in-out delay-150`}
    >
      <h2 className="text-lightBrown text-lg"> {title} </h2>
      <div>
        <FaAngleRight color="#E3D5CB" size={30} />
      </div>
    </div>
  );
};

export default Button;
