import { Link } from "react-router-dom";
import gambar1 from "../assests/2.jpg";

export default function Card() {
  return (
    <div className="shadow-xl bg-[#E9EFF0] text-center rounded-xl w-80 overflow-hidden m-3">
      <img src={gambar1}></img>
      <div className="p-5">
        <h1 className="font-bold text-xl">Pendampingan Pesisir</h1>
        <p className="text-[#6D6D6D] my-3">
          Laboris ut sint mollit ullamco consequat qui cupidatat laboris sint
          Lorem id enim.
        </p>
        <Link className="text-primary bg-[#D9D9D9] p-1 px-2 rounded-lg">Selengkapnya</Link>
      </div>
    </div>
  );
}
