import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactSection({
  error,
  handleSubmit,
  success,
  handleChange,
  formData,
  textColor,
  primaryColor,
  secondaryColor,
  bgButton,
}) {
  const style = {
    backgroundColor: primaryColor,
  };

  const styleInputs = {
    borderColor: secondaryColor,
  };
  return (
    <div style={style}>
      {success && (
        <div className="bg-[#48b8a1] text-white w-2/6 mx-auto p-4 relative top-4 text-center ">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-darkBrown text-white w-2/6 mx-auto p-4 relative top-4 text-center ">
          {error.message}
        </div>
      )}
      <div style={style} className="flex flex-col md:flex-row justify-around py-12 px-8 ">
        <form className="w-11/12 mx-auto md:w-96" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label style={{ color: textColor }}>Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              style={styleInputs}
              className="bg-input border-2 py-2 outline-none bg-transparent"
            />
          </div>
          <div className="flex flex-col my-5">
            <label style={{ color: textColor }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styleInputs}
              className=" bg-input outline-none border-2 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label style={{ color: textColor }}>Send Message</label>
            <textarea
              type="text"
              className="bg-input outline-none border-2 py-2 h-72 resize-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={styleInputs}
            />
          </div>

          <button
            style={{ color: primaryColor, backgroundColor: bgButton }}
            className=" w-full my-5 py-4 text-lg text-lightBrown "
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className=" w-3/4 mx-auto flex flex-col justify-items-center text-darkBrown md:w-96">
          <div className="flex md:mt-40 mt-10" style={{ color: textColor }}>
            <FaLocationDot size={30} style={{ color: bgButton }} />
            <p className="ml-5 text-lg md:text-2xl">Iraq, Baghdad</p>
          </div>
          <div className="flex my-10">
            <FaPhoneAlt size={30} style={{ color: bgButton }} />
            <p
              className="ml-5 text-lg md:text-2xl"
              style={{ color: textColor }}
            >
              +964 782 425 1210
            </p>
          </div>
          <div className="flex mb-10">
            <FaEnvelope size={30} style={{ color: bgButton }} />
            <p
              className="ml-5 text-lg md:text-2xl "
              style={{ color: textColor }}
            >
              info@quiraqguide.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
