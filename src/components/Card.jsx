import { Link } from "react-router-dom";
import gambar1 from "../assests/2.jpg";

export default function Card(props) {
  return (
    <div
      className="shadow-xl  bg-primary text-white  text-center rounded-xl w-96 md:w-72 lg:w-56 xl:w-72 overflow-hidden m-3"
      data-aos={props.aos}
    >
      <img src={props.gambar} className="w-full h-52 object-cover"></img>
      <div className="p-5 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl">{props.title}</h1>
          <div className="w-[50%] h-1 rounded-xl bg-white"></div>
          <p className=" my-3 text-gray-200">
            {props.desc.substring(0, 120) + "....."}
          </p>
        </div>
        <Link
          to={props.too}
          className="text-gray-700 bg-[#D9D9D9] p-1 px-2 rounded-lg"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
}
