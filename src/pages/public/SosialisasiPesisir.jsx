import Navbar from "../../layout/Navbar";
import DetailLayout from "../../layout/DetailLayout";
import CardBerita from "../../components/CardBerita";
import Footers from "../../layout/Footer";

const SosialisasiPesisir = () => {
  const dataHeader = {
    judul: "Sosialisasi Pesisir",
    desc: "Sosialisasi pesisir merujuk pada proses penyampaian informasi, pengetahuan, dan pemahaman tentang berbagai aspek yang terkait dengan lingkungan pesisir kepada masyarakat atau kelompok di kawasan pesisir. Tujuan dari sosialisasi pesisir adalah untuk meningkatkan kesadaran, mengedukasi, dan mendorong partisipasi masyarakat dalam upaya pengelolaan, pelestarian, dan pemanfaatan sumber daya pesisir secara berkelanjutan",
  };

  return (
    <>
      <Navbar />
      <DetailLayout judul={dataHeader.judul} desc={dataHeader.desc}>
        {/* <CardBerita /> */}
        <h1 className="text-2xl text-gray-400 text-center mt-10">
          Belum ada berita
        </h1>
      </DetailLayout>
      <Footers />
    </>
  );
};

export default SosialisasiPesisir;
