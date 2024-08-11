import Navbar from "../../layout/Navbar";
import Carousel from "../../layout/Carousl";
import Kegiatan from "../../layout/Kegiatan";
import Pesisir from "../../layout/Pesisir";

const Home = () => {
  return (
    <div className="mb-[1000px]">
      <Navbar />
      <Carousel />
      <Kegiatan />
      <Pesisir/>
    </div>
  );
};

export default Home;
