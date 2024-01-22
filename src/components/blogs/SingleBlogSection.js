import { baseUrl } from "../apiConfig";

function SingleBlogSection({ blog }) {
  return (
    <>
      {blog && (
        <article className="flex flex-col md:flex-row items-center md:items-start container mx-auto gap-5 py-10">
          <figure className="w-[80%] md:w-[50%] ">
            <img
              lazy="true"
              loading="lazy"
              src={baseUrl + blog.img_path}
              className="styled-image object-contain"
              alt={blog.title}
            />
          </figure>
          <div className="w-[80%] md:w-[50%]">
            <h3 className="text-lg font-extrabold sm:text-2xl text-darkBrown">
              {blog.title}
            </h3>
            <hr
              className="w-[50%] my-5 "
              style={{ borderTop: "2px solid #804216" }}
            />
               {
                
                 blog.description.split('</p>').map((paragraph, index) => (
                  <p className="text-justify text-md sm:text-lg leading-relaxed text-[#474747]" key={index}>{paragraph.replace(/<p>|<br\s*\/?>|&nbsp;/g, '').trim()}</p>
                )) 
               }
          </div>
        </article>
      )}
    </>
  );
}

export default SingleBlogSection;
