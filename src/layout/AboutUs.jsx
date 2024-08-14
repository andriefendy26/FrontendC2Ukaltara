import gambar1 from "../assests/aboutus.jpeg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="mx-10 mt-10">
      <div className="flex mb-5 flex-col items-center">
        <h1 className="font-bold text-3xl">About Us</h1>
        <span className="block w-96 h-[1px] bg-black mt-8 mb-5"></span>
        <div className="lg:flex lg:p-10 lg:gap-2">
          <p className="lg:text-xl">
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
          <img className="object-cover lg:w-1/2 border border-black" src={gambar1}></img>
        </div>
        <Link to="/aboutus">
          <button className="bg-primary w-full rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100 text-white">
            Selengkapnya
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
