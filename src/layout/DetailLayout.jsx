import CardBerita from "../components/CardBerita";

const DetailLayout = ({ judul, desc, children }) => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-32 my-10">
      <div className="">
        <h1 className="text-2xl font-bold lg:text-3xl" data-aos="fade-right">{judul}</h1>
        <div className="w-80 h-[1px] mb-5 bg-black" data-aos="fade-right"></div>
        <p className="lg:text-xl text-justify" data-aos="fade-up">{desc}</p>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold lg:text-3xl" data-aos="fade-right">BERITA</h1>
        <div className="w-44 h-[1px] mb-5 bg-black" data-aos="fade-right"></div>
        <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-8 ">{children}</div>
      </div>
    </div>
  );
};

export default DetailLayout;
