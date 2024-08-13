import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Headchart from "../components/Chart";

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
    <div className="mt-10 flex flex-col items-center mx-10">
      <div className="flex mb-5 flex-col items-center">
        <h1 className="font-bold text-3xl">Pemberdayaan Pesisir</h1>
        <span className="block w-96 h-[1px] bg-black mt-8"></span>
        <p className="pt-5">
          Est est ea adipisicing do. Ad qui ex eu mollit enim aute laboris Lorem
          anim do id eu. Consequat enim ullamco anim ipsum irure quis. In
          pariatur ex ipsum dolore qui incididunt dolor in quis minim voluptate
          nisi excepteur tempor. Laborum duis ea qui tempor nisi mollit
          exercitation nisi et sunt incididunt. Mollit fugiat proident ullamco
          velit laboris velit dolore minim. Anim mollit aliquip reprehenderit
          consectetur ut sunt in.
        </p>
      </div>
      <Headchart>
        <Doughnut data={data} />
      </Headchart>
      <button className="bg-primary w-full rounded-lg p-2 px-5 mt-2 text-white text-sm hover:bg-primaryhover hover:text-gray-100">
        Selengkapnya
      </button>
    </div>
  );
};

export default Pesisir;
