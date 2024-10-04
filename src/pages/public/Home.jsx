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
import Sosmedemded from "../../layout/Sosmedemded";


const Home = () => {

 
  return (
    <div className="">
      {/* <Carousel /> */}
      <HeroScrollDemo></HeroScrollDemo>
      <Sosmedemded></Sosmedemded>
      <Pesisir />
      <Kegiatan />
      {/* <LogbookLay></LogbookLay> */}
      <Galeri />
      <AboutUs />
      <OurTeamAnimate></OurTeamAnimate>
    </div>
  );
};

export default Home;
