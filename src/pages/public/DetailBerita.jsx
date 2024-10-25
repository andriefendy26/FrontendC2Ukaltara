import { Typography } from "@material-tailwind/react";
import React from "react";
import GambarGradient from "../../assests/gradient.jpg";
import { getDataByid } from "../../services/BeritaServices";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Helmet } from "react-helmet";

//icon sosmed
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const DetailBerita = () => {
  const { id } = useParams();

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    handleGetData();
  }, [id]);

  const handleGetData = async () => {
    try {
      const response = await getDataByid(id);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };
  const shareOnSocialMedia = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(data?.judul);
    const description = encodeURIComponent(data?.deskripsi);
    let shareUrl;

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${title} ${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="m-10 md:mx-32 lg:mx-52 xl:mx-72 text-4xl">Loading...</div>
    );
  }

  return (
    <div className="">
     {data && (
        <Helmet>
          <title>{data.judul}</title>
          <meta property="og:site_name" content="C2UKaltara.id" />
          <meta property="og:title" content={data.judul} />
          <meta property="og:description" content={data.deskripsi} />
          <meta property="og:image" content={data.url || GambarGradient} />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
      )}
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
          <div className="mt-5">
            <h4 className="font-bold">Bagikan:</h4>
            <button
              onClick={() => shareOnSocialMedia("whatsapp")}
              className="mr-2 p-2 bg-green-600 text-white rounded"
            >
              <FaWhatsapp />
            </button>
            <button
              onClick={() => shareOnSocialMedia("facebook")}
              className="mr-2 p-2 bg-blue-600 text-white rounded"
            >
              <FaFacebook />
            </button>
            <button
              onClick={() => shareOnSocialMedia("twitter")}
              className="mr-2 p-2 bg-blue-400 text-white rounded"
            >
              <FaTwitter />
            </button>
          </div>
        </div>
        <img
          src={data?.url}
          className="md:float-left w-full md:max-w-[50%] object-cover h-96 lg:mr-10 lg:mb-10 mr-5 mb-5"
        ></img>
        <p className="mt-5 lg:text-xl text-justify">
          {/* {data?.deskripsi} */}
          {data?.deskripsi.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default DetailBerita;
