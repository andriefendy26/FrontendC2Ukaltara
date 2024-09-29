// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import image from "../assests/404Error.jpg";

function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <img src={image}></img>
      <h1 className="text-4xl font-bold">
        Halaman Yang Anda Cari Tidak Ditemukan
      </h1>
      <button className="btn btn-wide">
        <Link className="" to={"/"}>
          Kembali
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
