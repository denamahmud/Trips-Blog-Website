import image from "../../imgs/1701940185ba21caf548a7ba563c49fcd12d6d521e.jpg";

function AboutSection({ about }) {
  return (
    <section className="flex flex-col md:flex-row bg-lightBrown ">
      <p className="md:w-3/6 text-justify text-lg md:text-2xl leading-10 py-10 p-5 md:p-32 text-darkBrown">
        {about}
      </p>
      <figure className=" w-full md:w-3/6 h-auto m-5 md:m-0 styled-image">
        <img
         lazy='true'
          loading="lazy"
          src={image}
          className=" w-fit object-cover h-full "
        />
      </figure>
    </section>
  );
}

export default AboutSection;
