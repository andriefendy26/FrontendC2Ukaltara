import React from "react";
import HeaderJudul from "../components/HeaderJudul";

import teamPres from "../assests/team-presentation.png";
import { Link } from "react-router-dom";
import logoIlus from "../assests/Scenes02.svg"

// Register Chart.js components

const Pesisir = () => {
  const data = {
    labels: [
      "Juata Laut",
      "Karang Anyar Pantai",
      "Selumit Pantai",
      "Lingkas Ujung",
      "Pantai Amal",
      "Mamburungan Timur",
      "Karang Rejo",
      "Sebengkok",
    ],
    datasets: [
      {
        label: "Dataset",
        data: [300, 50, 100, 200, 150, 80, 90, 60],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="mt-10 flex flex-col items-center mx-10 lg:mx-24 xl:mx-60 overflow-hidden">
      <div className="grid gap-4 my-5 grid-cols-1 lg:grid-cols-2">
        <div className="flex  mb-5 text-left flex-col " data-aos="fade-right">
          <h1 className="text-4xl tracking-wider font-bold mb-2">
            Coastal Clean Up
          </h1>
          <p className="pt-5 lg:text-lg text-justify">
            Coastal clean-up adalah kegiatan yang bertujuan untuk membersihkan
            pantai dan wilayah pesisir dari sampah dan limbah yang mengganggu
            ekosistem laut. Kegiatan ini biasanya melibatkan relawan, organisasi
            lingkungan, dan masyarakat lokal, dan sering diadakan pada hari-hari
            tertentu secara global, seperti Hari Bersih Pantai Sedunia
            (International Coastal Cleanup Day).
          </p>

          <Link
            to="/pemberdayaanpesisir"
            className="bg-primary  rounded-lg p-2 px-5 mt-2 text-white text-sm hover:bg-primaryhover hover:text-gray-100"
          >
            Selengkapnya
          </Link>
        </div>
        <div
          className="flex justify-center rounded-3xl rounded-bl-full rounded-tr-full"
          data-aos="fade-right"
        >
          <img src={logoIlus} className="w-96 lg:w-80 object-cover"></img>
        </div>
      </div>
      {/* <div className="lg:flex lg:flex-row my-5">
        <div
          className="flex mb-5 flex-col items-center lg:w-1/2"
          data-aos="fade-right"
        >
          <p className="pt-5 lg:text-lg ">
            Pemberdayaan pesisir adalah upaya untuk meningkatkan kapasitas dan
            kesejahteraan masyarakat yang tinggal di daerah pesisir, serta
            menjaga dan memanfaatkan sumber daya pesisir secara berkelanjutan.
            Konsep ini melibatkan berbagai aspek, termasuk ekonomi, sosial, dan
            lingkungan, untuk memastikan bahwa masyarakat pesisir dapat
            mengelola sumber daya alam mereka dengan efektif, mengurangi
            kemiskinan, dan meningkatkan kualitas hidup mereka.
          </p>
        </div>
        <img src={teamPres} className="w-96"></img>
      </div> */}
    </div>
  );
};

export default Pesisir;
