import Navbar from "../../layout/Navbar";
import gambar1 from "../../assests/aboutus.jpeg";
import Footer from "../../layout/Footer";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";

const DetailAbout = () => {
  return (
    <div>
      <div className="m-10 lg:mx-60">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl xl:text-3xl">About Us</h1>
          <div
            className="w-52 h-[1px] mb-5 bg-black mt-3"
            data-aos="fade-right"
          ></div>
          <div className="">
            <img
              className="object-cover float-left max-w-[50%]"
              src={gambar1}
            ></img>
            <p className="text-sm md:text-lg lg:text-lg text-justify">
              Pencemaran limbah laut, seperti sampah plastik dari budidaya
              rumput laut, mengancam bio-fisiologis dan fungsi ekologis wilayah
              pesisir, berdampak negatif pada biota dan lingkungan perairan,
              serta kesejahteraan masyarakat pesisir (Supinah dkk, 2020;
              Akbarsyah dkk, 2022). Kota Tarakan, dengan luas laut 406,52 km²
              dan populasi 271.593 jiwa (±30-40% masyarakat pesisir) (BPS
              Kaltara, 2021; DKP Kaltara, 2022), menghadapi masalah limbah
              plastik sekitar 800-1000 unit per hari. Program Coastal Clean Up
              (C2U), yang mengacu pada Ocean Conservancy dan ICC (Cahyadi dan
              Salim, 2017; Salim dkk, 2020), telah dilakukan namun masih parsial
              dan temporal, dengan kurangnya kolaborasi dan koordinasi. Untuk
              mengatasi masalah ini, kami mengusulkan program inovatif CASTILO
              KALTARA (Coastal Waste Reduction Acceleration Forum), yang
              menekankan kolaborasi dan kontribusi terukur sebagai solusi
              komprehensif dan berkelanjutan
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center flex-col">
            <Typography
              variant="h6"
              className="text-lg lg:text-2xl text-center my-5"
            >
              Manfaat <span className="text-primary">RekaCipta</span> Penanganan
              Limbah Laut
            </Typography>
            <div
              className="w-[50%] h-[1px] mb-5 bg-black"
              data-aos="fade-right"
            ></div>
          </div>
          <div className="">
            <div>
              <div className="flex items-center justify-center">
                <Typography variant="h6" className="text-xl ">
                  Manfaat Umum
                </Typography>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                <CardComp judul="Masyarakat">
                  <CardItem
                    text=" Peningkatan kualitas hidup melalui pengelolaan limbah laut
                  yang efektif, serta kesadaran dan kepedulian dalam pelestarian
                  pesisir."
                  ></CardItem>
                </CardComp>
                <CardComp judul="Civitas Akademika">
                  <CardItem
                    text="Penerapan merdeka belajar, dukungan capaian Indikator Kinerja
                    Utama (IKU) Universitas, dan peningkatan kompetensi dalam
                    tri-dharma perguruan tinggi."
                  ></CardItem>
                </CardComp>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center my-5 ">
                <Typography variant="h6" className="text-xl text-center">
                  Manfaat khusus untuk 8 kelurahan Pesisir Kota Tarakan
                </Typography>
              </div>
              <CardComp judul="Kesadaran dan Kesejahteraan">
                <CardItem
                  text="Peningkatan kepedulian terhadap kelestarian pesisir dan
                    peningkatan kesejahteraan masyarakat."
                ></CardItem>
              </CardComp>
            </div>
            <div className="">
              <div className="flex items-center justify-center my-5 ">
                <Typography variant="h6" className="text-xl ">
                  Tujuan Reka Cipta
                </Typography>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                <CardComp judul="Coastal Clean Up">
                  <CardItem text="Pengabdian masyarakat untuk membersihkan pesisir."></CardItem>
                </CardComp>
                <CardComp judul="Bank Sampah/TPS-3R">
                  <CardItem text="Pemberdayaan fasilitas pengelolaan sampah."></CardItem>
                </CardComp>
                <CardComp judul="Pengolahan dan Regulasi Sampah">
                  <CardItem text="Pendampingan dalam pengolahan dan pengelolaan limbah."></CardItem>
                </CardComp>
                <CardComp judul="Lestari Mangrove">
                  <CardItem text="Pelestarian ekosistem mangrove."></CardItem>
                </CardComp>
                <CardComp judul="Aplikasi C2U Tarakan">
                  <CardItem text="Implementasi program Coastal Clean Up di Tarakan."></CardItem>
                </CardComp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardComp = ({ judul, children }) => {
  return (
    <Card className="mt-6 shadow-lg border border-gray-200">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-lg">
          {judul}
        </Typography>
        {children}
      </CardBody>
    </Card>
  );
};

const CardItem = ({ text }) => {
  return (
    <div className="flex items-center">
      {/* <IoIosArrowForward></IoIosArrowForward> */}
      <p>{text}</p>
    </div>
  );
};

export default DetailAbout;
