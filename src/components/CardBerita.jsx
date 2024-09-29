import { Link } from "react-router-dom";
import gambar1 from "../assests/1.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

export default function BeritaCard({ judul, deskripsi, gambar, waktu, too, kelurahan }) {
  return (
    <Card className="flex flex-col w-full overflow-hidden h-full">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-56 flex items-center justify-center"
      >
        <img src={gambar} alt="review" className="object-cover w-full h-full" />
      </CardHeader>
      <CardBody className="flex-grow">
        <Typography variant="h5" color="blue-gray" className="text-justify">
          {judul}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="text-sm lg:text-lg mt-3 font-normal text-justify"
        >
          {deskripsi.slice(0, 100) + "..."}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3 text-blue-400">
          <Link to={`/detail/${too}`}>Read More</Link>
        </div>
        <div className="flex items-center -space-x-3 ">{kelurahan}</div>
        <Typography className="font-normal">{waktu}</Typography>
      </CardFooter>
    </Card>
  );
}
// const CardBerita = ({ judul, deskripsi, gambar, waktu }) => {
//   return (
//     <div className="flex gap-5 my-8">
//       <div>
//         <img
//           src={gambar}
//           className="w-64 lg:w-96 rounded-2xl border-2 border-black"
//         ></img>
//         <div className="text-sm flex-wrap lg:text-lg lg:flex lg:gap-2  my-2 items-center">
//           <p>
//             {/* Rabu, 06 Mei 2024 */}
//             {waktu}
//           </p>
//           <p className="my-1 lg:m-0">Gunung Lingkas</p>
//           <Link className="text-primary ">Selengkapnya</Link>
//         </div>
//       </div>
//       <div>
//         <h1 className="font-semibold lg:text-xl xl:text-2xl">
//           {/* AKSI COASTAL CLEAN UP DI KAWASAN WISATA BAHARI */}
//           {judul}
//         </h1>
//         <p className="xl:text-lg">
//           {/* Ad aliquip sunt irure irure do magna cupidatat consequat laborum.
//           Commodo do incididunt eiusmod sint in mollit do. Elit veniam ullamco
//           nisi culpa adipisicing. */}
//           {deskripsi.slice(0, 120)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CardBerita;
