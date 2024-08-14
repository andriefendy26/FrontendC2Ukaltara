import { Link } from "react-router-dom";
import gambar1 from "../assests/1.jpg";

const CardBerita = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <img
          src={gambar1}
          className=" rounded-2xl border-2 border-black"
        ></img>
        <p>Rabu, 06 Mei 2024</p>
        <p>Gunung Lingkas</p>
        <Link className="text-primary bg-[#D9D9D9] p-1 px-2 rounded-lg">
          Selengkapnya
        </Link>
      </div>
      <div>
        <h1 className="font-semibold">
          AKSI COASTAL CLEAN UP DI KAWASAN WISATA BAHARI
        </h1>
        <p>
          Ad aliquip sunt irure irure do magna cupidatat consequat laborum.
          Commodo do incididunt eiusmod sint in mollit do. Elit veniam ullamco
          nisi culpa adipisicing.
        </p>
      </div>
    </div>
  );
};

export default CardBerita;
