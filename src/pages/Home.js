import { lazy, useEffect, useState } from "react";
import {API_BASE_URL} from "../components/apiConfig";  


const CarouselComponent = lazy(() => import("../components/home/CarouselComponent"));
const FaqComponent = lazy(() => import("../components/FaqComponent"));
const GalleryComponent = lazy(() => import("../components/home/GalleryComponent"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Title = lazy(() => import("../components/Title"));
const Header = lazy(() => import("../components/home/Header"));
 



function Home({ 
  whatsapp,
  iconHeader,
  error,
  success,
  handleChange,
  formData,
  handleSubmit 
}) {
  const [sections, setSections] = useState([]);  
  const [gallery, setGallery] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL + "Gallery");
        const response2 = await fetch(API_BASE_URL + "Trips");
        const data = await response.json();
        const data2 = await response2.json();
        setGallery(data);
        setSections(data2); 
      } catch (error) { 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-montserrat">
      <Header whatsapp={whatsapp} iconHeader={iconHeader}/>
      <CarouselComponent sections={sections} />
      <GalleryComponent gallery={gallery}  />
      <FaqComponent />
      <div className="bg-darkBrown">
        <Title titleColor="#E3D5CB" bgColor="#E3D5CB" title="Contact" />
        <ContactSection
          error={error}
          success={success}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          textColor="#E3D5CB"
          bgButton="#E3D5CB"
          primaryColor="#804216"
          secondaryColor="#E3D5CB"
        />
      </div>
    </div>
  );
}

export default Home;
