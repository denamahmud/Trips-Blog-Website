import { lazy, useEffect, useState } from "react";
import { API_BASE_URL } from "../components/apiConfig"; 

const BlogsSection = lazy(() => import("../components/blogs/BlogsSection"));
const FaqComponent = lazy(() => import("../components/FaqComponent")); 
const TitleBlogPage = lazy(() => import("../components/blogs/TitleBlogPage"));
const Button = lazy(() => import("../components/Button"));
const Loading = lazy(() => import("../components/Loading"));

function Blogs() {
  const [visibleItems, setVisibleItems] = useState(3);
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL + "Blogs");
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="bg-lightBrown font-montserrat">
      {loading ? (
        <Loading />
      ) : (
        <>
          <TitleBlogPage name="Blogs" />
          <BlogsSection
            blogs={blogs}
            visibleItems={visibleItems}
            loadMoreItems={loadMoreItems}
          />
        </>
      )}

      {visibleItems < blogs.length && (
        <div className="w-40 py-8 mx-auto">
          <Button title="Load More" loadMore={loadMoreItems} />
        </div>
      )}

      <FaqComponent />
    </div>
  );
}

export default Blogs;
