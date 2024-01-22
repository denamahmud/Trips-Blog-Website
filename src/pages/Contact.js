import { lazy } from "react";
const ContactSection = lazy(() => import("../components/ContactSection"));
const TitleContactPage = lazy(() => import("../components/TitleContactPage"));

function Contact({ error, success, handleChange, formData, handleSubmit }) {
  return (
    <section className="font-montserrat ">
      <TitleContactPage name="Contact" />
      <ContactSection
        error={error}
        success={success}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        textColor="#804216"
        bgButton="#804216"
        primaryColor="#E3D5CB"
        secondaryColor="#804216"
      />
    </section>
  );
}

export default Contact;
