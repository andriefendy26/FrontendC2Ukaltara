import Navbar from "../../layout/Navbar";
import Carousel from "../../layout/Carousl";
import Kegiatan from "../../layout/Kegiatan";
import Pesisir from "../../layout/Pesisir";
import Galeri from "../../layout/Galeri";
import Footer from "../../layout/Footer";
import AboutUs from "../../layout/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Kegiatan />
      <Pesisir />
      <Galeri />
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default Home;
