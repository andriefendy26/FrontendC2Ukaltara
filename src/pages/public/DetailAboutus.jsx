import Navbar from "../../layout/Navbar";
import gambar1 from "../../assests/aboutus.jpeg";
import Footer from "../../layout/Footer";

const DetailAbout = () => {
  return (
    <div>
      <div className="mt-24">
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
            <div className="flex w-full items-center justify-center">
              <img
                className="object-cover lg:w-1/2 border border-black"
                src={gambar1}
              ></img>
            </div>
          </div>
          <div>
            <h1 className="text-lg text-center border-y-[1px] border-black py-3 my-4 font-semibold">
              Manfaat RekaCipta Penanganan Limbah Laut
            </h1>
            <div t r sk assName="flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-center">
                  <div className="w-20 h-[1px] bg-black"></div>
                  <h1 className="font-semibold mx-5 my-2 text-center">
                    Manfaat Umum
                  </h1>
                  <div className="w-20 h-[1px]  bg-black"></div>
                </div>
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
                <div className="flex items-center justify-center">
                  <div className="w-20 h-[1px] bg-black"></div>
                  <h1 className="font-semibold mx-5 my-2 text-center">
                    Manfaat khusus untuk 8 kelurahan Pesisir Kota Tarakan
                  </h1>
                  <div className="w-20 h-[1px]  bg-black"></div>
                </div>

                <div>
                  <p>
                    -
                    <span className="font-semibold">
                      {" "}
                      Kesadaran dan Kesejahteraan
                    </span>
                    : Peningkatan kepedulian terhadap kelestarian pesisir dan
                    peningkatan kesejahteraan masyarakat.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center">
                  <div className="w-20 h-[1px] bg-black"></div>
                  <h1 className="font-semibold mx-5 my-2 text-center">
                    Tujuan Reka Cipta
                  </h1>
                  <div className="w-20 h-[1px]  bg-black"></div>
                </div>

                <div>
                  <p>
                    - <span className="font-semibold">Coastal Clean Up</span> :
                    Pengabdian masyarakat untuk membersihkan pesisir.
                  </p>
                  <p>
                    - <span className="font-semibold">Bank Sampah/TPS-3R</span>{" "}
                    : Pemberdayaan fasilitas pengelolaan sampah
                  </p>
                  <p>
                    -{" "}
                    <span className="font-semibold">
                      Pengolahan dan Regulasi Sampah
                    </span>{" "}
                    : Pendampingan dalam pengolahan dan pengelolaan limbah.
                  </p>
                  <p>
                    - <span className="font-semibold">Lestari Mangrove</span> :
                    Pelestarian ekosistem mangrove.
                  </p>
                  <p>
                    -{" "}
                    <span className="font-semibold">Aplikasi C2U Tarakan</span>{" "}
                    : Implementasi program Coastal Clean Up di Tarakan.
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
