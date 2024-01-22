import Slider from "react-slick"; 
import { baseUrl } from "../apiConfig"; 
import TitleCarousel from "./TitleCarousel";

function CarouselComponent({ sections }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          padding: 20,
          background: "rgba(128, 66, 22, .55)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "150px",
          right: "-20px",
        }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          padding: 20,
          background: "rgba(128, 66, 22, .55)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          position: "absolute",
          top: "150px",
          left: "-20px",
        }}
      />
    );
  }

  const settings = {
    className: "mx-auto w-11/12",
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          className: "  mx-auto  ",
          objectFit: "cover",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className=" bg-lightBrown ">
      <TitleCarousel
        titleColor="#804216"
        bgColor="#804216"
        title="The Best of the Tours"
      />

      <div className="w-3/4 md:w-4/5 mx-auto">
        <Slider {...settings}>
          {sections.map((item) => (
            <article key={item.id}>
              <figure>
                <img
                  lazy="true"
                  loading="lazy"
                  src={baseUrl + item.icon}
                  width={280}
                  className="object-cover h-[280px] border-class"
                />
                <figcaption className="text-darkBrown text-center">
                  {item.title_en}
                </figcaption>
              </figure>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CarouselComponent;
