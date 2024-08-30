import React from "react";
import HeaderJudul from "../components/HeaderJudul";
import { Typography } from "@material-tailwind/react";
import probSol from "../assests/problem-solving.png";
import { Link } from "react-router-dom";

const LogbookLay = () => {
  return (
    <div className="my-10 flex flex-col items-center mx-10 lg:mx-24 xl:mx-60 overflow-hidden">
      <HeaderJudul title="LOGBOOK" />
      <div className="grid gap-4 my-5 grid-cols-1 lg:grid-cols-2">
        <div
          className="flex justify-center rounded-br-full rounded-t-full bg-primary"
          data-aos="fade-right"
        >
          <img src={probSol} className="w-96 lg:w-80 object-cover"></img>
        </div>
        <div className="flex mb-5 flex-col items-center " data-aos="fade-right">
          <p className="pt-5 lg:text-lg xl:text-xl">
            dokumentasi yang digunakan untuk mencatat aktivitas harian mahasiswa
            selama mereka menjalani pengalaman di luar kelas, seperti magang
            atau proyek sosial. Logbook ini membantu mahasiswa merekam deskripsi
            kegiatan, waktu, dan hasil yang dicapai, serta menyediakan data
            penting untuk evaluasi oleh dosen atau institusi pendidikan. Selain
            itu, logbook berfungsi sebagai alat refleksi bagi mahasiswa untuk
            menilai bagaimana kegiatan tersebut berkontribusi pada pengembangan
            kompetensi mereka. Logbook dapat berupa format kertas atau digital,
            dan sering kali mencakup ruang untuk mengupload dokumen atau foto
            sebagai bukti pendukung.
          </p>
        </div>
      </div>
      <Link to="/logbook" className="bg-primary  rounded-lg p-2 px-5 mt-2 text-white text-sm hover:bg-primaryhover hover:text-gray-100">
        Selengkapnya
      </Link>
    </div>
  );
};

export default LogbookLay;
