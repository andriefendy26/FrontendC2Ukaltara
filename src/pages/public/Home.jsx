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
import LogbookLay from "../../layout/Logbook";
import HeroScrollDemo from "../../layout/ScrollAnimate";
import OurTeamAnimate from "../../layout/OurTeamAnimate";


const Home = () => {

 
  return (
    <div className="">
      {/* <Carousel /> */}
      <HeroScrollDemo></HeroScrollDemo>
      <OurTeamAnimate></OurTeamAnimate>
      <Pesisir />
      <Kegiatan />
      <LogbookLay></LogbookLay>
      <Galeri />
      <AboutUs />
    </div>
  );
};

export default Home;
