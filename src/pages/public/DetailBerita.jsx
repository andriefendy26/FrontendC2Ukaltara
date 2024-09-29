import { Typography } from "@material-tailwind/react";
import React from "react";
import GambarGradient from "../../assests/gradient.jpg";
import { getDataByid } from "../../services/BeritaServices";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const DetailBerita = () => {
  const { id } = useParams();

  const [data, setData] = React.useState();

  React.useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    const data = await getDataByid(id);
    console.log(data);
    setData(data.data);
  };

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };
  
  return (
    <div className="">
      <div className="m-10 md:mx-32 lg:mx-52 xl:mx-72">
        <div className="mb-5">
          <Typography variant="h4" className="text-2xl mb-3 font-bold">
            {data?.judul}
          </Typography>
          <Typography
            variant="h6"
            className="text-sm tracking-widest font-bold"
          >
            {converFormatDate(data?.tanggal)} / {data?.jenis} /{" "}
            {data?.tb_kelurahan.namaKelurahan}
          </Typography>
        </div>
        <img src={data?.url} className="md:float-left w-full md:max-w-[50%] object-cover h-96 lg:mr-10 lg:mb-10 mr-5 mb-5"></img>
        <p className="mt-5 lg:text-xl text-justify">
          {/* {data?.deskripsi} */}
          {data?.deskripsi.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default DetailBerita;
