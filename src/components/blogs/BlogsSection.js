import { Link } from "react-router-dom";
import { baseUrl } from "../apiConfig"; 

function BlogsSection({ blogs, visibleItems }) {
  return (
    <article className="flex flex-col md:flex-row md:flex-wrap w-[70%] mx-auto justify-center items-center gap-5">
      {blogs.slice(0, visibleItems).map((item) => (
        <Link to={`/blogs/${item.id}`} className="overlay-card styled-image">
          <img
            lazy="true"
            loading="lazy"
            src={baseUrl + item.img_path}
            className="card-image "
          />
          <div className="overlay">
            <h2 className="card-title">{item.title}</h2>
          </div>
        </Link>
      ))}
    </article>
  );
}

export default BlogsSection;
