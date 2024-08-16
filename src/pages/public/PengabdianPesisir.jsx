import Navbar from "../../layout/Navbar";
import DetailLayout from "../../layout/DetailLayout";
import CardBerita from "../../components/CardBerita";
import Footers from "../../layout/Footer";

const PengabdianPesisir = () => {
  const dataHeader = {
    judul: "Pengabdian Pesisir",
    desc: "Pengabdian pesisir adalah konsep yang merujuk pada upaya dan komitmen untuk memberikan layanan, bantuan, dan dukungan kepada masyarakat yang tinggal di daerah pesisir. Ini melibatkan berbagai kegiatan yang bertujuan untuk meningkatkan kualitas hidup, kesejahteraan, dan keberlanjutan lingkungan di kawasan pesisir. Pengabdian pesisir biasanya dilakukan oleh berbagai pihak, termasuk pemerintah, lembaga swadaya masyarakat (LSM), komunitas lokal, dan individu.",
  };

  return (
    <>
      <Navbar />
      <DetailLayout judul={dataHeader.judul} desc={dataHeader.desc}>
        {/* <CardBerita /> */}
        <h1 className="text-2xl text-gray-400 text-center mt-10">Belum ada berita</h1>
      </DetailLayout>
      <Footers></Footers>
    </>
  );
};

export default PengabdianPesisir;
