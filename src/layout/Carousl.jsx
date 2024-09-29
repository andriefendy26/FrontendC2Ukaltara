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
import React from "react";
import { getDataUpdate } from "../services/BeritaServices";
import { Link } from "react-router-dom";

const CarouselCom = () => {
  const data = [
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar1,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar2,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar3,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar4,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar5,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar6,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar7,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar8,
    },
    {
      judul: "",
      deskripsi: "",
      link: "",
      url: gambar9,
    },
  ];

  const [dataBerita, setData] = React.useState([]);

  React.useEffect(() => {
    handleGetUpdateBerita();
  }, []);

  const handleGetUpdateBerita = async () => {
    const data = await getDataUpdate();
    console.log(data.data);
    setData(data.data);
  };

  // const displayData = dataBerita.length > 0 ? dataBerita : data;

  return (
    <Carousel>
      {dataBerita &&
        dataBerita.map((item, i) => (
          <div
            key={i}
            className="h-full w-full bg-cover bg-center text-white  bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            {/* Dark overlay */}
            {item.judul != "" ? (
              <div className="absolute inset-0 bg-black opacity-40"></div>
            ) : (
              ""
            )}
            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-center  items-start h-full md:p-14 lg:p-24 xl:p-32">
              <h1 className="font-bold text-justify text-xl mb-2 md:text-2xl lg:text-3xl xl:text-4xl">
                {item?.judul}
              </h1>
              <p className="text-sm my-2 text-justify xl:text-lg">
                {item?.deskripsi.slice(0, 240)}
              </p>
              {item.id ? (
                <Link
                  to={`detail/${item.id}`}
                  className="bg-primary rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100"
                >
                  Selengkapnya
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
    </Carousel>
  );
};

// const CarouselCom = () => {
//   const data = [
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar1,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar2,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar3,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar4,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar5,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar6,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar7,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar8,
//     },
//     {
//       judul: "",
//       deskripsi: "",
//       link: "",
//       gambar: gambar9,
//     },
//   ];
//   return (
//     <div
//       className="h-60 md:h-[400px] lg:h-[500px] xl:h-[600px] mt-2 md:mt-0 overflow-hidden"
//       data-aos="fade-down"
//     >
//       <Carousel>
//         {data.map((item, i) => (
//           <div
//             key={i}
//             className="h-full w-full bg-cover bg-center text-white  bg-no-repeat bg-fixed"
//             style={{ backgroundImage: `url(${item.gambar})` }}
//           >
//             {/* Dark overlay */}
//             {item.judul != "" ? (
//               <div className="absolute inset-0 bg-black opacity-40"></div>
//             ) : (
//               ""
//             )}
//             {/* Content */}
//             <div className="relative z-10 p-6 flex flex-col justify-center  items-start h-full md:p-14 lg:p-24 xl:p-32">
//               <h1 className="font-bold text-xl mb-2 md:text-2xl lg:text-3xl xl:text-4xl">
//                 {item?.judul}
//               </h1>
//               <p className="text-sm my-2 xl:text-lg">{item?.deskripsi}</p>
//               {item.link ? (
//                 <button className="bg-primary rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100">
//                   Selengkapnya
//                 </button>
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

export default CarouselCom;
