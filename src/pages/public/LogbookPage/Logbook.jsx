import React, { useEffect } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { getAllKelurahan } from "../../../services/KelurahanService";
import { Link } from "react-router-dom";
import { IoEnter } from "react-icons/io5";

const Logbook = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [kelurahan, setKelurahan] = React.useState();
  useEffect(() => {
    console.log(kelurahan);
    getData();
  }, []);

  const getData = async () => {
    const data = await getAllKelurahan();
    // setKelurahan(data)
    setKelurahan(data);
  };
  return (
    <div className="m-10 overflow-hidden">
      <div>
        <Typography variant="h3" className="mb-3">
          Logbook
        </Typography>
        <Typography variant="paragraph" color="blue-gray" className="mb-2">
          Untuk para peserta MBKM silahkan untuk mengisi logbook sesuai
          penempatan masing masing dan mengupload foto selfi
        </Typography>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4x">
          {kelurahan &&
            kelurahan.map((i, index) => (
              <CardComp
                key={index}
                to={`/logbook/${i.id}`}
                state={{ namaKelurahan: i.namaKelurahan }}
                nama={i.namaKelurahan}
                isLoading={isLoading}
              ></CardComp>
            ))}
        </div>
      </div>
      {/* <div className="mt-10">
        <Typography variant="h3" className="mb-3">
          Berita Terkini
        </Typography>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 ">
          <Typography variant="paragraph">Belum ada berita</Typography>
        </div>
      </div> */}
    </div>
  );
};

const CardComp = ({ nama, to, state , isLoading}) => {
  return (
    <Card className={`mt-6 border border-black shadow-xl'}`}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {nama}
        </Typography>
        <Link to={to} state={state} className="inline-block  rounded-md">
          <Button
            size="sm"
            variant="outlined"
            className="flex items-center gap-2"
          >
            Enter
            <IoEnter size={25}></IoEnter>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Logbook;
