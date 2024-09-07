import { Link } from "react-router-dom";
import gambar1 from "../assests/1.jpg";

const CardBerita = ({ judul, deskripsi, gambar, waktu }) => {
  return (
    <div className="">
      <div>
        <img
          src={gambar}
          className="w-64 lg:w-96 rounded-2xl border-2 border-black"
        ></img>
        <div className="text-sm flex-wrap lg:text-lg lg:flex lg:gap-2  my-2 items-center">
          <p>
            {/* Rabu, 06 Mei 2024 */}
            {waktu}
          </p>
          <p className="my-1 lg:m-0">Gunung Lingkas</p>
          <Link className="text-primary ">Selengkapnya</Link>
        </div>
      </div>
      <div>
        <h1 className="font-semibold lg:text-xl xl:text-2xl">
          {/* AKSI COASTAL CLEAN UP DI KAWASAN WISATA BAHARI */}
          {judul}
        </h1>
        <p className="xl:text-lg">
          {/* Ad aliquip sunt irure irure do magna cupidatat consequat laborum.
          Commodo do incididunt eiusmod sint in mollit do. Elit veniam ullamco
          nisi culpa adipisicing. */}
          {deskripsi.slice(0, 120)}
        </p>
      </div>
    </div>
  );
};
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

export default CardBerita;
