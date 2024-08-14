import { Link } from "react-router-dom";
import gambar1 from "../assests/2.jpg";

export default function Card(props) {
  return (
    <div className="shadow-xl bg-[#E9EFF0] text-center rounded-xl w-96 md:w-72 lg:w-56 xl:w-72 overflow-hidden m-3">
      <img src={props.gambar} className="w-full h-52 object-cover"></img>
      <div className="p-5">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-[#6D6D6D] my-3">
          {props.desc}
        </p>
        <Link to={props.too} className="text-primary bg-[#D9D9D9] p-1 px-2 rounded-lg">Selengkapnya</Link>
      </div>
    </div>
  );
}
