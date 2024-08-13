import Card from "../components/Card";
import gambar1 from "../assests/1.jpg"
import gambar2 from "../assests/2.jpg"
import gambar3 from "../assests/3.webp"
import gambar4 from "../assests/4.jpg"
import gambar5 from "../assests/5.jpeg"
import gambar6 from "../assests/6.avif"

const Kegiatan = () => {
  const data = [
    {
      title: "Pengabdian Pesisir",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer et condimentum nisl. Interdum et malesuada fames",
      image: gambar1,
    },
    {
      title: "Pendampingan Pesisir",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer et condimentum nisl. Interdum et malesuada fames",
      image: gambar2,
    },
    {
      title: "Sosialisasi Pesisir",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer et condimentum nisl. Interdum et malesuada fames",
      image: gambar3,
    },
    {
      title: "Lestari Mangrove",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer et condimentum nisl. Interdum et malesuada fames",
      image: gambar4,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-3xl">Kegiatan</h1>
      <span className=" block w-96 h-[1px] bg-black mt-8 mb-5"> </span>
      {data.map((item, index) => (
        <Card key={index} title={item.title} desc={item.desc} gambar={item.image}></Card>
      ))}
    </div>
  );
};

export default Kegiatan;
