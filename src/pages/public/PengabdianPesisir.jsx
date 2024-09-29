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

const PengabdianPesisir = () => {
  const dataHeader = {
    judul: "Pengabdian Pesisir",
    desc: "Pengabdian pesisir adalah konsep yang merujuk pada upaya dan komitmen untuk memberikan layanan, bantuan, dan dukungan kepada masyarakat yang tinggal di daerah pesisir. Ini melibatkan berbagai kegiatan yang bertujuan untuk meningkatkan kualitas hidup, kesejahteraan, dan keberlanjutan lingkungan di kawasan pesisir. Pengabdian pesisir biasanya dilakukan oleh berbagai pihak, termasuk pemerintah, lembaga swadaya masyarakat (LSM), komunitas lokal, dan individu.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
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
            <h1 className="text-2xl text-gray-400  mt-10">
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
//     <Card className="flex flex-col w-full overflow-hidden h-full">
//       <CardHeader
//         floated={false}
//         shadow={false}
//         color="transparent"
//         className="m-0 rounded-none h-56 flex items-center justify-center"
//       >
//         <img src={gambar} alt="review" className="object-cover w-full h-full" />
//       </CardHeader>
//       <CardBody className="flex-grow">
//         <Typography variant="h5" color="blue-gray" className="text-justify">
//           {judul}
//         </Typography>
//         <Typography
//           variant="lead"
//           color="gray"
//           className="text-sm lg:text-lg mt-3 font-normal text-justify"
//         >
//           {deskripsi.slice(0, 100) + "..."}
//         </Typography>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between">
//         <div className="flex items-center -space-x-3 text-blue-400">
//           <Link to={`/detail/${too}`}>Read More</Link>
//         </div>
//         <div className="flex items-center -space-x-3 ">
//           {kelurahan}
//         </div>
//         <Typography className="font-normal">{waktu}</Typography>
//       </CardFooter>
//     </Card>
//   );
// }

export default PengabdianPesisir;
