import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "../lib/utils";

import gambar1 from "../assests/profile/image.png";
import gambar2 from "../assests/profile/awang.png";
import gambar3 from "../assests/profile/dhimas.png";
import gambar4 from "../assests/profile/tuty.png";
import gambar5 from "../assests/profile/gandri.png";
import gambar6 from "../assests/profile/firdaus.png";
import gambar7 from "../assests/profile/gazali.png";
import gambar8 from "../assests/profile/heni.png";
import gambar9 from "../assests/profile/imra.png";

const OurTeamAnimate = () => {
  const data = [
    // {
    //   nama: "Andri Efendy",
    //   role: "Mahasiswa / Fullstack Dev",
    //   keahlian: ["UI", "Andoid", "Web", "Backend"],
    //   gambar: gambar1,
    // },
    {
      nama: "Awang Pradana, S.Kom., M.Kom",
      role: "Dosen Teknik Komputer",
      keahlian: ["UI", "Product", "Mobile"],
      gambar: gambar2,
    },
    {
      nama: "Dhimas Wiharyanto, S.Pi., M.Si",
      role: "Dosen",
      keahlian: [],
      gambar: gambar3,
    },
    {
      nama: "Tuty Wiharyanto, S.Si., M.Sc",
      role: "Dosen",
      keahlian: [],
      gambar: gambar4,
    },
    {
      nama: "M. Gandri Haryono, S.Kel., M.P",
      role: "Dosen",
      keahlian: [],
      gambar: gambar5,
    },
    {
      nama: "Dr. Muhammad Firdaus, S.Pi., M.Si",
      role: "Dosen",
      keahlian: [],
      gambar: gambar6,
    },
    {
      nama: "Gaezali Salim, S.Kel., M.Si",
      role: "Dosen",
      keahlian: [],
      gambar: gambar7,
    },
    {
      nama: "Heni Irawati, S.Pd., M.Sc",
      role: "Dosen",
      keahlian: [],
      gambar: gambar8,
    },
    {
      nama: "Imra, S.Pi., M.Si",
      role: "Dosen",
      keahlian: [],
      gambar: gambar9,
    },
  ];
  return (
    <div className="mb-10">
      <div className="text-center p-10 mb-10">
        <h1 className="text-4xl lg:text-6xl tracking-wider font-bold mb-2">Our Team</h1>
        <p className="text-sm lg:text-lg tracking-wide">Bersama-sama, kami menciptakan lingkungan yang dinamis dan <br></br> kolaboratif yang mendorong inovasi dan menghasilkan hasil yang luar biasa.</p>
      </div>
      <div>
        <Marquee>
          {data.map((item, i) => (
            <div key={i}>
              <CardComp
                nama={item.nama}
                keahlian={item.keahlian}
                role={item.role}
                gambar={item.gambar}
              ></CardComp>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const CardComp = ({ nama, role, keahlian, gambar }) => {
  return (
    <div
      className="bg-cover relative overflow-hidden  bg-center bg-no-repeat h-96 w-72 rounded-3xl mx-5 flex flex-col justify-end p-5"
      style={{ backgroundImage: `url(${gambar})` }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="text w-full relative z-50">
        <h1 className="font-bold text-sm text-white relative drop-shadow-2xl">
          {nama}
        </h1>
        <p className="font-normal text-sm text-white relative my-2">{role}</p>
        <div className="flex gap-2">
          {keahlian.length > 0
            ? keahlian.map((item, i) => (
                <span
                  key={i}
                  className="p-2 text-xs rounded-xl text-white border-white border"
                >
                  {item}
                </span>
              ))
            : ""}
          {/* <span className="p-2 text-xs rounded-xl text-white border-white border">
            Mobile
          </span>
          <span className="p-2 text-xs rounded-xl text-white border-white border">
            Web
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default OurTeamAnimate;
