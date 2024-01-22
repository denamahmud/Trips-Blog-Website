import React, { lazy, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import {API_BASE_URL} from "../components/apiConfig";

const FaqComponent = lazy(() => import("../components/FaqComponent"));
const SingleBlogSection = lazy(() => import("../components/blogs/SingleBlogSection"));
const Loading = lazy(() => import("../components/Loading"));

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          API_BASE_URL + `Blog/${id}`
        ); 
        const data = await response.json(); 
        setBlog(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }  
    };

    fetchPost();
  }, [id]);

  return (
    <section className="bg-lightBrown font-montserrat ">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {error && (
            <div className="bg-darkBrown text-white w-2/6 mx-auto p-4 relative top-4 text-center ">
              {error.message}
            </div>
          )}
          <SingleBlogSection blog={blog} />
          <FaqComponent />
        </>
      )}
    </section>
  );
}

export default SingleBlog;
