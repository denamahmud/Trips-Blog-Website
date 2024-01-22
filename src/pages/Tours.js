import { lazy, useEffect, useState } from "react";
import { API_BASE_URL } from "../components/apiConfig";

const ToursSection = lazy(() => import("../components/tours/ToursSection"));
const TitleToursPage = lazy(() => import("../components/tours/TitleToursPage"));
const Button = lazy(() => import("../components/Button"));
const Loading = lazy(() => import("../components/Loading"));

function Tours() {
  const [visibleItems, setVisibleItems] = useState(3);
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL + "Trips");
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <section className="bg-lightBrown font-montserrat">
      {loading ? (
        <Loading />
      ) : (
        <>
          <TitleToursPage name="Tours" />
          <ToursSection
            tours={tours}
            visibleItems={visibleItems}
            loadMoreItems={loadMoreItems}
          />
        </>
      )}

      {visibleItems < tours.length && (
        <div className="w-40 py-8 mx-auto  ">
          <Button title="Load More" loadMore={loadMoreItems} />
        </div>
      )}
    </section>
  );
}

export default Tours;
