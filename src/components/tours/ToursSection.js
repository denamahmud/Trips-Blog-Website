import { Link } from "react-router-dom";
import { baseUrl } from "../apiConfig"; 

function ToursSection({ tours, visibleItems }) {
  return (
    <article className="flex flex-col md:flex-row md:flex-wrap w-[70%] mx-auto justify-center items-center  gap-5 ">
      {tours.slice(0, visibleItems).map((item, index) => (
        <Link
          to={`/Trip/${item.id}`}
          key={index}
          className="overlay-card styled-image"
        >
          <figure>
            <img
              lazy="true"
              loading="lazy"
              src={baseUrl + item.icon}
              className="card-image "
            />
          </figure>
          <div className="overlay">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.descriptipn}.</p>
          </div>
        </Link>
      ))}
    </article>
  );
}

export default ToursSection;
