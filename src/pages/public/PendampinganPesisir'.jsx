import Navbar from "../../layout/Navbar";
import DetailLayout from "../../layout/DetailLayout";
import CardBerita from "../../components/CardBerita";
import Footers from "../../layout/Footer";


const PendampinganPesisir = () => {
  const dataHeader = {
    judul: "Pendampingan Pesisir",
    desc: "Pendampingan pesisir adalah proses dukungan dan bimbingan yang diberikan kepada masyarakat atau kelompok yang tinggal di daerah pesisir untuk membantu mereka dalam mengelola sumber daya, mengatasi masalah, dan mengembangkan kapasitas mereka. Tujuan dari pendampingan pesisir adalah untuk meningkatkan kesejahteraan masyarakat pesisir serta memastikan pengelolaan yang berkelanjutan dan efektif terhadap sumber daya pesisir.",
  };

  return (
    <>
      <DetailLayout judul={dataHeader.judul} desc={dataHeader.desc}>
        {/* <CardBerita /> */}
        <h1 className="text-2xl text-gray-400 text-center mt-10">Belum ada berita</h1>
      </DetailLayout>
    </>
  );
};

export default PendampinganPesisir;
