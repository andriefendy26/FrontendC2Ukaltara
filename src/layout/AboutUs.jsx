import gambar1 from "../assests/aboutus.jpeg";
import { Link } from "react-router-dom";
import HeaderJudul from "../components/HeaderJudul";

const AboutUs = () => {
  return (
    <div className="mx-10 xl:mx-60 my-10">
      <div className="grid grid-cols-1 2xl:grid-cols-2 mb-5  items-center">
        <div className="lg:p-10 lg:gap-2 xl:p-0">
          <h1 className="text-4xl lg:text-6xl tracking-wider font-bold mb-2">
            About Us
          </h1>
          <p className="lg:text-lg text-justify" data-aos="fade-left">
            Pencemaran limbah laut, seperti sampah plastik dari budidaya rumput
            laut, mengancam bio-fisiologis dan fungsi ekologis wilayah pesisir,
            berdampak negatif pada biota dan lingkungan perairan, serta
            kesejahteraan masyarakat pesisir (Supinah dkk, 2020; Akbarsyah dkk,
            2022). Kota Tarakan, dengan luas laut 406,52 km² dan populasi
            271.593 jiwa (±30-40% masyarakat pesisir) (BPS Kaltara, 2021; DKP
            Kaltara, 2022), menghadapi masalah limbah plastik sekitar 800-1000
            unit per hari. Program Coastal Clean Up (C2U), yang mengacu pada
            Ocean Conservancy dan ICC (Cahyadi dan Salim, 2017; Salim dkk,
            2020), telah dilakukan namun masih parsial dan temporal, dengan
            kurangnya kolaborasi dan koordinasi. Untuk mengatasi masalah ini,
            kami mengusulkan program inovatif CASTILO KALTARA (Coastal Waste
            Reduction Acceleration Forum), yang menekankan kolaborasi dan
            kontribusi terukur sebagai solusi komprehensif dan berkelanjutan
          </p>
          <Link to="/aboutus">
            <button
              data-aos="fade-up"
              className="text-left bg-primary w-full my-5 rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100 text-white"
            >
              Selengkapnya
            </button>
          </Link>
        </div>
        <img data-aos="fade-left" className="object-cover" src={gambar1}></img>
      </div>
    </div>
  );
};

export default AboutUs;
