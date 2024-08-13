import Navbar from "../../layout/Navbar";
import gambar1 from "../../assests/aboutus.jpeg";
import Footer from "../../layout/Footer";

const DetailAbout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl">About Us</h1>
          <span className="block w-96 h-[1px] bg-black my-5"></span>
          <div>
            <p>
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
            <img src={gambar1}></img>
          </div>
          <div>
            <h1 className="text-lg border-y-[1px] border-black py-3 my-4 font-semibold">
              Manfaat RekaCipta Penanganan Limbah Laut
            </h1>
            <div  t r sk assName="flex flex-col gap-5">
              <div>
                <h1 className="font-semibold text-center mb-2">Manfaat Umum</h1>
                <p>
                  {" "}
                  - <span className="font-semibold">Masyarakat</span> :
                  Peningkatan kualitas hidup melalui pengelolaan limbah laut
                  yang efektif, serta kesadaran dan kepedulian dalam pelestarian
                  pesisir.
                </p>
                <p>
                  {" "}
                  - <span className="font-semibold">Civitas Akademika</span>:
                  Penerapan merdeka belajar, dukungan capaian Indikator Kinerja
                  Utama (IKU) Universitas, dan peningkatan kompetensi dalam
                  tri-dharma perguruan tinggi.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-center mb-2">
                  Manfaat khusus untuk 8 kelurahan Pesisir Kota Tarakan
                </h1>
                <div>
                  <p>
                    -{" "}
                    <span className="font-bold            lh">
                      {" "}
                      Kesadaran dan Kesejahteraan
                    </span>
                    : Peningkatan kepedulian terhadap kelestarian pesisir dan
                    peningkatan kesejahteraan masyarakat.
                  </p>
                </div>
              </div>
              <div className="">
                <h1 className="font-semibold text-center mb-2">
                  Tujuan Reka Cipta
                </h1>
                <div>
                  <p>
                    - Coastal Clean Up: Pengabdian masyarakat untuk membersihkan
                    pesisir.
                  </p>
                  <p>
                    - Bank Sampah/TPS-3R: Pemberdayaan fasilitas pengelolaan
                    sampah
                  </p>
                  <p>
                    - Pengolahan dan Regulasi Sampah: Pendampingan dalam
                    pengolahan dan pengelolaan limbah.
                  </p>
                  <p>- Lestari Mangrove: Pelestarian ekosistem mangrove.</p>
                  <p>
                    - Aplikasi C2U Tarakan: Implementasi program Coastal Clean
                    Up di Tarakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailAbout;
