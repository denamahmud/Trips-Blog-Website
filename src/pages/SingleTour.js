import React, { lazy, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import {API_BASE_URL} from "../components/apiConfig"; 

const SingleTourSection = lazy(() => import("../components/tours/SingleTourSection"));
const Loading = lazy(() => import("../components/Loading"));
const FaqComponent = lazy(() => import("../components/FaqComponent"));


function SingleTour() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          API_BASE_URL + `Trip/${id}`
        ); 
        const data = await response.json(); 
        setTour(data);
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
          <SingleTourSection tour={tour} />
          <FaqComponent />
        </>
      )}
    </section>
  );
}

export default SingleTour;
