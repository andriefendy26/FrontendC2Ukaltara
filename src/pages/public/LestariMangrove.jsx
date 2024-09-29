import Navbar from "../../layout/Navbar";
import DetailLayout from "../../layout/DetailLayout";
import CardBerita from "../../components/CardBerita";
import Footers from "../../layout/Footer";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import React, { useEffect } from "react";

import { getJenisBerita } from "../../services/BeritaServices";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import BeritaCard from "../../components/CardBerita";

const LestariMangrove = () => {
  const dataHeader = {
    judul: "Lestari Mangrove",
    desc: "Pelestarian mangrove memainkan peran krusial dalam menjaga keseimbangan ekosistem pesisir dan melindungi lingkungan kita dari dampak perubahan iklim. Hutan mangrove tidak hanya berfungsi sebagai penyangga alami yang melindungi garis pantai dari erosi dan bencana alam seperti tsunami, tetapi juga sebagai habitat vital bagi berbagai spesies laut dan burung. Dengan akar-akar yang menyebar luas, mangrove menyaring polutan dari air dan mendukung kualitas air yang lebih baik di sekitar mereka. Oleh karena itu, penting bagi kita untuk melakukan upaya pelestarian yang berkelanjutan, seperti rehabilitasi lahan mangrove yang rusak, pengelolaan yang bijaksana, dan meningkatkan kesadaran tentang nilai ekologisnya. Dengan menjaga kesehatan hutan mangrove, kita turut serta dalam melestarikan keanekaragaman hayati dan memastikan manfaat jangka panjang bagi generasi mendatang.",
  };

  const [data, setData] = React.useState([]);

  useEffect(() => {
    handleGetBeritaByJenis();
  }, []);

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };

  const handleGetBeritaByJenis = async () => {
    const data = await getJenisBerita(dataHeader.judul);
    console.log(data);
    setData(data.data);
  };

  return (
    <>
      <DetailLayout judul={dataHeader.judul} desc={dataHeader.desc}>
        {/* <CardBerita /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((item, i) => (
              <BeritaCard
                key={i}
                judul={item.judul}
                waktu={converFormatDate(item.tanggal)}
                gambar={item.url}
                deskripsi={item.deskripsi}
                kelurahan={item.tb_kelurahan.namaKelurahan}
                too={`${item.id}`}
              ></BeritaCard>
            ))
          ) : (
            <h1 className="text-2xl text-gray-400 w-full mt-10">
              Belum ada berita
            </h1>
          )}
        </div>
      </DetailLayout>
    </>
  );
};

// function BeritaCard({ judul, deskripsi, gambar, waktu, too, kelurahan }) {
//   return (
//     <Card className="w-full overflow-hidden">
//       <CardHeader
//         floated={false}
//         shadow={false}
//         color="transparent"
//         className="m-0 rounded-none"
//       >
//         <img src={gambar} alt="review" />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h6" color="blue-gray" className="">
//           {judul}
//         </Typography>
//         <Typography
//           variant="lead"
//           color="gray"
//           className="text-sm mt-3 font-normal"
//         >
//           {deskripsi.slice(0, 100) + "..."}
//         </Typography>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between">
//         <div className="flex items-center -space-x-3 text-blue-400">
//           <Link to={`/detail/${too}`}>Read More</Link>
//         </div>
//         <div className="flex items-center -space-x-3 ">{kelurahan}</div>
//         <Typography className="font-normal">{waktu}</Typography>
//       </CardFooter>
//     </Card>
//   );
// }

export default LestariMangrove;
