import { Button } from "@material-tailwind/react";

const Galeri = () => {
  const data = [
    {
      imageLink:
        "https://ksdae.menlhk.go.id/assets/publikasi/coverBuku/CCU_2018_(5).jpg5_.jpg",
    },
    {
      imageLink:
        "https://pertamina.com/Media/Image/post/20240223104048505_e5dc5f8e620c4b7a96e8b2eb3f80e5a0.jpg",
    },
    {
      imageLink:
        "https://infopublik.id/assets/upload/headline//program_coastal_clean_up_ccu_di_pantai_labuan_pandeglang_banten_juni_2019_klhk.jpg",
    },
    {
      imageLink:
        "https://static.promediateknologi.id/crop/0x115:1600x1074/0x0/webp/photo/p2/11/2023/05/09/Beach-Clean-Up-Jelang-Side-Event-KTT-ke-42-ASEAN-3094591527.jpeg",
    },
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTDAlIYobszyTIdVgJsclVZOCgiAZ2q0z_UorTISCDg6oKse_mjXEwAb6QbUeW8fqKWI&usqp=CAU",
    },
    {
      imageLink:
        "https://4.bp.blogspot.com/-XwMkRznW_WE/V9aX46nrwWI/AAAAAAAABwI/jd__V9yuuuoAsZeTq7wfu6OIz3FNi59PACLcB/s1600/Pleasant%2BWhite%2BSand%2BBeach%2Binfront%2Bof%2Bthe%2Bcafe%2Band%2Brestauran%2Bat%2BKedonganan%2BBeach.jpg",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];

  return (
    <div className="mx-10 mt-10">
      <div className="flex mb-5 flex-col items-center">
        <h1 className="font-bold text-3xl">GALERI</h1>
        <span className="block w-96 h-[1px] bg-black mt-8"></span>
      </div>
      <div className="lg:grid lg:grid-rows-3 xl:grid-rows-2 lg:grid-flow-col lg:gap-8">
        {data.map(({ imageLink }, index) => (
          <div className="my-2" key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-centerfirst-line:"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
