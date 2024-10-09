import { Button } from "@material-tailwind/react";
import HeaderJudul from "../components/HeaderJudul";
import { Link } from "react-router-dom";

const Galeri = () => {
  // onmouseenter()
  const data = [
    {
      imageLink:
        "https://ksdae.menlhk.go.id/assets/publikasi/coverBuku/CCU_2018_(5).jpg5_.jpg",
      title: "Juata Laut",
    },
    {
      imageLink:
        "https://pertamina.com/Media/Image/post/20240223104048505_e5dc5f8e620c4b7a96e8b2eb3f80e5a0.jpg",
      title: "Karang Anyar Pantai",
    },
    {
      imageLink:
        "https://infopublik.id/assets/upload/headline//program_coastal_clean_up_ccu_di_pantai_labuan_pandeglang_banten_juni_2019_klhk.jpg",
      title: "Karang Rejo",
    },
    {
      imageLink:
        "https://static.promediateknologi.id/crop/0x115:1600x1074/0x0/webp/photo/p2/11/2023/05/09/Beach-Clean-Up-Jelang-Side-Event-KTT-ke-42-ASEAN-3094591527.jpeg",
      title: "Lingkas Ujung",
    },
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTDAlIYobszyTIdVgJsclVZOCgiAZ2q0z_UorTISCDg6oKse_mjXEwAb6QbUeW8fqKWI&usqp=CAU",
      title: "Mamburungan",
    },
    {
      imageLink:
        "https://4.bp.blogspot.com/-XwMkRznW_WE/V9aX46nrwWI/AAAAAAAABwI/jd__V9yuuuoAsZeTq7wfu6OIz3FNi59PACLcB/s1600/Pleasant%2BWhite%2BSand%2BBeach%2Binfront%2Bof%2Bthe%2Bcafe%2Band%2Brestauran%2Bat%2BKedonganan%2BBeach.jpg",
      title: "Sebengkok",
    },
    {
      imageLink:
        "https://4.bp.blogspot.com/-XwMkRznW_WE/V9aX46nrwWI/AAAAAAAABwI/jd__V9yuuuoAsZeTq7wfu6OIz3FNi59PACLcB/s1600/Pleasant%2BWhite%2BSand%2BBeach%2Binfront%2Bof%2Bthe%2Bcafe%2Band%2Brestauran%2Bat%2BKedonganan%2BBeach.jpg",
      title: "Pantai Amal",
    },
    {
      imageLink:
        "https://4.bp.blogspot.com/-XwMkRznW_WE/V9aX46nrwWI/AAAAAAAABwI/jd__V9yuuuoAsZeTq7wfu6OIz3FNi59PACLcB/s1600/Pleasant%2BWhite%2BSand%2BBeach%2Binfront%2Bof%2Bthe%2Bcafe%2Band%2Brestauran%2Bat%2BKedonganan%2BBeach.jpg",
      title: "Selumit Pantai",
    },
  ];

  return (
    <div className="mx-10 mt-10 xl:mx-60">
      {/* <HeaderJudul title="Galeri"/> */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-4xl lg:text-6xl tracking-wider font-bold mb-2">
          Galeri
        </h1>
        <p className="text-sm lg:text-lg tracking-wide">
          Setiap foto menceritakan kisah tentang dedikasi, kerja sama, dan
          dampak positif yang kami capai dalam menjaga kebersihan
        </p>
      </div>

      <div
        className="lg:grid lg:grid-rows-3 xl:grid-rows-2 lg:grid-flow-col lg:gap-8"
        data-aos="fade-left"
      >
        {data.map(({ imageLink, title }, index) => (
          <Link
          to={`/galeri/${title}`}
            className={`card-galeri transition-all duration-500 my-2 hover:cursor-pointer overflow-hidden`}
            key={index}
            data-title={title}
          >
            <div className="absolute z-10 rounded-lg inset-0 bg-black opacity-40"></div>
            <img
              className="h-40 w-full transition-all duration-1000 max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt={title || "gallery-photo"} // Menggunakan title sebagai alt jika ada
            />
            {/* Uncomment jika ingin menampilkan title */}
            {/* <p className="hidden">{title}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
