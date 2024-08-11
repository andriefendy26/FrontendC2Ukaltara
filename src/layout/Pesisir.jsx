import Chart from "../components/Chart";
import Keterangan from "../components/keterangan";

const Pesisir = () => {
  return (
    <>
      <div className="mt-10 flex flex-col items-center mx-10">
        <div className="flex mb-5 flex-col items-center">
          <h1 className="font-bold text-3xl">Pemberdayaan Pesisir</h1>
          <span className=" block w-96 h-[1px] bg-black mt-8"> </span>
          <p className="py-5">
            Est est ea adipisicing do. Ad qui ex eu mollit enim aute laboris
            Lorem anim do id eu. Consequat enim ullamco anim ipsum irure quis.
            In pariatur ex ipsum dolore qui incididunt dolor in quis minim
            voluptate nisi excepteur tempor. Laborum duis ea qui tempor nisi
            mollit exercitation nisi et sunt incididunt. Mollit fugiat proident
            ullamco velit laboris velit dolore minim. Anim mollit aliquip
            reprehenderit consectetur ut sunt in.
          </p>
          <button className="bg-primary rounded-lg p-2 px-5 text-white text-sm hover:bg-primaryhover hover:text-gray-100">
            Selengkapnya
          </button> 
        </div>
        <Chart>
          <Keterangan title="Juata Laut" color="bg-red-500" />
          <Keterangan title="Karang Anyar Pantai" color="bg-blue-500" />
          <Keterangan title="Selumit Pantai" color="bg-green-500" />
          <Keterangan title="Lingkas Ujung" color="bg-purple-500" />
          <Keterangan title="Pantai Amal" color="bg-yellow-500" />
          <Keterangan title="Mamburungan Timur" color="bg-cyan-400" />
          <Keterangan title="Karang Rejo" color="bg-yellow-300" />
          <Keterangan title="Sebengkok" color="bg-red-500" />
        </Chart>
      </div>
    </>
  );
};

export default Pesisir;
