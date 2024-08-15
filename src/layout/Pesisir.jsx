import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Headchart from "../components/Chart";
import HeaderJudul from "../components/HeaderJudul";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

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
    <div className="mt-10 flex flex-col items-center mx-10 lg:mx-24 xl:mx-60">
      <HeaderJudul title="Pemberdayaan Pesisir" />
      <div className="lg:flex lg:flex-row my-5" >
        <div className="flex mb-5 flex-col items-center lg:w-1/2" data-aos="fade-right">
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
        <Headchart>
          <Doughnut data={data} />
        </Headchart>
      </div>
      <button className="bg-primary  rounded-lg p-2 px-5 mt-2 text-white text-sm hover:bg-primaryhover hover:text-gray-100">
        Selengkapnya
      </button>
    </div>
  );
};

export default Pesisir;
