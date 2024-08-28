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

 
  return (
    <div className="">
      <Carousel />
      <Kegiatan />
      <Pesisir />
      <Galeri />
      <AboutUs />
    </div>
  );
};

export default Home;
