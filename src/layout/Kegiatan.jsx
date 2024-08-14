import Card from "../components/Card";
import gambar1 from "../assests/1.jpg";
import gambar2 from "../assests/2.jpg";
import gambar3 from "../assests/3.webp";
import gambar4 from "../assests/4.jpg";
import gambar5 from "../assests/5.jpeg";
import gambar6 from "../assests/6.avif";

const Kegiatan = () => {
  const data = [
    {
      title: "Pengabdian Pesisir",
      desc: "Pengabdian pesisir adalah konsep yang merujuk pada upaya dan komitmen untuk memberikan layanan, bantuan, dan dukungan kepada masyarakat yang tinggal di daerah pesisir. Ini melibatkan berbagai kegiatan yang bertujuan untuk meningkatkan kualitas hidup, kesejahteraan, dan keberlanjutan lingkungan di kawasan pesisir. Pengabdian pesisir biasanya dilakukan oleh berbagai pihak, termasuk pemerintah, lembaga swadaya masyarakat (LSM), komunitas lokal, dan individu.",
      image: gambar1,
      link: "/pengabdianpesisir",
    },
    {
      title: "Pendampingan Pesisir",
      desc: "Pendampingan pesisir adalah proses dukungan dan bimbingan yang diberikan kepada masyarakat atau kelompok yang tinggal di daerah pesisir untuk membantu mereka dalam mengelola sumber daya, mengatasi masalah, dan mengembangkan kapasitas mereka. Tujuan dari pendampingan pesisir adalah untuk meningkatkan kesejahteraan masyarakat pesisir serta memastikan pengelolaan yang berkelanjutan dan efektif terhadap sumber daya pesisir.",
      image: gambar2,
      link: "/pendampinganpesisir",
    },
    {
      title: "Sosialisasi Pesisir",
      desc: "Sosialisasi pesisir merujuk pada proses penyampaian informasi, pengetahuan, dan pemahaman tentang berbagai aspek yang terkait dengan lingkungan pesisir kepada masyarakat atau kelompok di kawasan pesisir. Tujuan dari sosialisasi pesisir adalah untuk meningkatkan kesadaran, mengedukasi, dan mendorong partisipasi masyarakat dalam upaya pengelolaan, pelestarian, dan pemanfaatan sumber daya pesisir secara berkelanjutan",
      image: gambar3,
      link: "/sosialisasipesisir",
    },
    {
      title: "Lestari Mangrove",
      desc: "Pelestarian mangrove memainkan peran krusial dalam menjaga keseimbangan ekosistem pesisir dan melindungi lingkungan kita dari dampak perubahan iklim. Hutan mangrove tidak hanya berfungsi sebagai penyangga alami yang melindungi garis pantai dari erosi dan bencana alam seperti tsunami, tetapi juga sebagai habitat vital bagi berbagai spesies laut dan burung. Dengan akar-akar yang menyebar luas, mangrove menyaring polutan dari air dan mendukung kualitas air yang lebih baik di sekitar mereka. Oleh karena itu, penting bagi kita untuk melakukan upaya pelestarian yang berkelanjutan, seperti rehabilitasi lahan mangrove yang rusak, pengelolaan yang bijaksana, dan meningkatkan kesadaran tentang nilai ekologisnya. Dengan menjaga kesehatan hutan mangrove, kita turut serta dalam melestarikan keanekaragaman hayati dan memastikan manfaat jangka panjang bagi generasi mendatang.",
      image: gambar4,
      link: "/lestarimangrove",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-3xl">Kegiatan</h1>
      <span className=" block w-96 h-[1px] bg-black mt-8 mb-5"> </span>
      <div className="md:grid md:grid-rows-2 md:grid-flow-col md:gap-3 lg:grid-rows-1">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            desc={item.desc.substring(0, 155) + "....."}
            gambar={item.image}
            too={item.link}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Kegiatan;
