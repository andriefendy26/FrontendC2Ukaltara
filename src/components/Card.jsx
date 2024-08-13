import { Link } from "react-router-dom";
import gambar1 from "../assests/2.jpg";

export default function Card(props) {
  return (
    <div className="shadow-xl bg-[#E9EFF0] text-center rounded-xl w-96 overflow-hidden m-3">
      <img src={props.gambar}></img>
      <div className="p-5">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-[#6D6D6D] my-3">
          {props.desc}
        </p>
        <Link className="text-primary bg-[#D9D9D9] p-1 px-2 rounded-lg">Selengkapnya</Link>
      </div>
    </div>
  );
}
