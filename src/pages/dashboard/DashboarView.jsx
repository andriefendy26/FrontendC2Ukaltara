import { Typography } from "@material-tailwind/react";
import React from "react";

const dashboardView = () => {
  return (
    <div className="w-full bg-white m-10">
      <h1>Hi Andri Selamat datang 👋 </h1>
      <div className="grid grid-cols-4 gap-4">
        <BoxComp classes="bg-cyan-300" judul="User" isi="3"></BoxComp>
        <BoxComp classes="bg-green-300" judul="Total Sampah" isi="30"></BoxComp>
        <BoxComp classes="bg-red-300" judul="Logbook" isi="30"></BoxComp>
        <BoxComp classes="bg-yellow-300" judul="Berita" isi="30"></BoxComp>
      </div>
    </div>
  );
};

const BoxComp = ({ classes, judul, isi }) => {
  return (
    <div className={`p-5 border border-gray-300 rounded-xl ${classes}`}>
      <h1 className="text-xl font-semibold">{judul}</h1>
      <h1 className="text-xl">{isi}</h1>
    </div>
  );
};

export default dashboardView;
