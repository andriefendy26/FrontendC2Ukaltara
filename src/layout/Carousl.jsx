import { Button, Carousel } from "flowbite-react";
import gambar1 from "../assests/banner/1.jpg";
import gambar2 from "../assests/banner/2.jpg";
import gambar3 from "../assests/banner/3.jpg";
import gambar4 from "../assests/banner/4.jpg";
import gambar5 from "../assests/banner/5.jpg";
import gambar6 from "../assests/banner/6.jpg";
import gambar7 from "../assests/banner/7.jpg";
import gambar8 from "../assests/banner/8.jpg";
import gambar9 from "../assests/banner/9.jpg";

const CarouselCom = () => {
  const data = [
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar1,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar2,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar3,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar4,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar5,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar6,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar7,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar8,
    },
    {
      judul: "",
      desc: "",
      link: "",
      gambar: gambar9,
    },
  ];
  return (
    <div
      className="h-60 md:h-[550px] lg:h-[550px] xl:h-[700px]"
      data-aos="fade-down"
    >
      <Carousel>
        {data.map((item, i) => (
          <div
            key={i}
            className="h-full w-full bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${item.gambar})` }}
          >
            {/* Dark overlay */}
            {item.judul != "" ? (
              <div className="absolute inset-0 bg-black opacity-40"></div>
            ) : (
              ""
            )}
            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-center  items-start h-full md:p-14 lg:p-24 xl:p-32">
              <h1 className="font-bold text-xl mb-2 md:text-2xl lg:text-3xl xl:text-4xl">
                {item?.judul}
              </h1>
              <p className="text-sm my-2 xl:text-lg">{item?.desc}</p>
              {item.link ? (
                <button className="bg-primary rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100">
                  Selengkapnya
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCom;
