import Navbar from "../../layout/Navbar";
import Carousel from "../../layout/Carousl";
import Kegiatan from "../../layout/Kegiatan";
import Pesisir from "../../layout/Pesisir";
import Galeri from "../../layout/Galeri";
import Footer from "../../layout/Footer";
import AboutUs from "../../layout/AboutUs";
import { useEffect } from "react";

import AOS from "aos";
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className="pt-20">
      <Navbar />
      <Carousel />
      <Kegiatan />
      <Pesisir />
      <Galeri />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
