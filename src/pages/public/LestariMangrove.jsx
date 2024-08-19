import Navbar from "../../layout/Navbar";
import DetailLayout from "../../layout/DetailLayout";
import CardBerita from "../../components/CardBerita";
import Footers from "../../layout/Footer";

const LestariMangrove = () => {
  const dataHeader = {
    judul: "Lestari Mangrove",
    desc: "Pelestarian mangrove memainkan peran krusial dalam menjaga keseimbangan ekosistem pesisir dan melindungi lingkungan kita dari dampak perubahan iklim. Hutan mangrove tidak hanya berfungsi sebagai penyangga alami yang melindungi garis pantai dari erosi dan bencana alam seperti tsunami, tetapi juga sebagai habitat vital bagi berbagai spesies laut dan burung. Dengan akar-akar yang menyebar luas, mangrove menyaring polutan dari air dan mendukung kualitas air yang lebih baik di sekitar mereka. Oleh karena itu, penting bagi kita untuk melakukan upaya pelestarian yang berkelanjutan, seperti rehabilitasi lahan mangrove yang rusak, pengelolaan yang bijaksana, dan meningkatkan kesadaran tentang nilai ekologisnya. Dengan menjaga kesehatan hutan mangrove, kita turut serta dalam melestarikan keanekaragaman hayati dan memastikan manfaat jangka panjang bagi generasi mendatang.",
  };

  return (
    <>
      <DetailLayout judul={dataHeader.judul} desc={dataHeader.desc}>
        {/* <CardBerita /> */}
        <h1 className="text-2xl text-gray-400 text-center mt-10">Belum ada berita</h1>
      </DetailLayout>
      <Footers></Footers>
    </>
  );
};

export default LestariMangrove;
