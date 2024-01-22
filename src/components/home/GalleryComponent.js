import ModalImage from "react-modal-image";
import Button from "../Button";
import { useState } from "react";
import { baseUrl } from "../apiConfig";
import TitleGallery from "./TitleGallery";

function GalleryComponent({ gallery }) {
  const [visibleItems, setVisibleItems] = useState(15);
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <section className="bg-lightBrown">
      <TitleGallery titleColor="#804216" bgColor="#804216" title="Gallery" />
      <div className=" grid grid-cols-1 gap-3 md:grid-cols-4 w-11/12 mx-auto  ">
        {gallery.slice(0, visibleItems).map((item) => (
          <figure key={item.id}>
            <ModalImage
              lazy="true"
              loading="lazy"
              className="custom-modal-image border-class"
              small={baseUrl + item.image_path}
              large={baseUrl + item.image_path}
              alt="Image from gallery"
            />
          </figure>
        ))}
      </div>
      {visibleItems < gallery.length && (
        <div className="w-40 py-8 mx-auto">
          <Button title="See More" loadMore={loadMoreItems} />
        </div>
      )}
    </section>
  );
}

export default GalleryComponent;
