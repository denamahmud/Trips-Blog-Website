import { Route, Routes, HashRouter } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { API_BASE_URL, baseUrl } from "./components/apiConfig"; 
import SingleTour from "./pages/SingleTour";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Tours = lazy(() => import("./pages/Tours"));
const Blogs = lazy(() => import("./pages/Blogs"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));
const Contact = lazy(() => import("./pages/Contact"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer")); 

const App = () => {
  const [icon, setIcon] = useState("");
  const [iconHeader, setIconHeader] = useState("");
  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [insta, setInsta] = useState("");
  const [twitter, setTwitter] = useState("");
  const [tiktok, setTiktok] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://quiraqguide.com/api/v1/Sent-Contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({
          full_name: "",
          email: "",
          message: "",
        });
        setSuccess("Form submitted successfully");
      } else {
        setError("Error submitting form");
      }
    } catch (error) {}
  };
  const [about, setAbout] = useState("");
  const fetchData = async () => {
    try {
      const data = await fetch(API_BASE_URL + "Settings").then((res) =>
        res.json()
      );

      setFacebook(data.facebook);
      setInsta(data.instagram);
      setWhatsapp(data.whatsapp);
      setTiktok(data.tiktok);
      setTwitter(data.twitter);
      setIcon(data.icon);
      setIconHeader(data.icon_header);
      setAbout(data.about_us);

      document.title = data.title || "Default Title";

      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = baseUrl + data.icon || "/favicon.ico";
      }

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.content = data.description || "Default description";
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <HashRouter>
        <Navbar icon={icon} whatsapp={whatsapp} /> 
        <Routes>
          <Route
            path="/"
            element={
              <Home
                error={error}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                success={success}
                formData={formData}
                iconHeader={iconHeader}
                facebook={facebook}
                insta={insta}
                twitter={twitter}
                tiktok={tiktok}
                whatsapp={whatsapp}
              />
            }
          />
          <Route path="/blogs" exact Component={Blogs} />
          <Route path="/blogs/:id" Component={SingleBlog} />
          <Route path="/Trip/:id" Component={SingleTour}/>
          <Route path="/about" element={<About about={about} />} />
          <Route path="/tours" Component={Tours} />
          <Route
            path="/contact"
            element={
              <Contact
                error={error}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                success={success}
                formData={formData}
              />
            }
          />
        </Routes>
        <Footer
          about={about}
          facebook={facebook}
          insta={insta}
          twitter={twitter}
          tiktok={tiktok}
          whatsapp={whatsapp}
        />
      </HashRouter>
    </main>
  );
};

export default App;
