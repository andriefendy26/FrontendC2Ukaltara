import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { FaDatabase } from "react-icons/fa6";
import {
  getDataLw,
  getDataTotalByKel,
  getTotalDataSampah,
  getAllData,
} from "../../services/DataServices";
import { format } from "date-fns";
import { getTotalLogbook } from "../../services/LogbookService";
import { getTotalBerita } from "../../services/BeritaServices";
import { getTotalUser } from "../../services/UserService";

const dashboardView = () => {
  const [data, setData] = React.useState();
  const [totalSampah, setTotalSampah] = React.useState(0);
  const [totalLogbook, setTotalLogbook] = React.useState(0);
  const [totalBerita, setTotalBerita] = React.useState(0);
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [chartDataLastWeek, setChartData] = React.useState({
    series: [{ name: "Sampah", data: [] }],
    categories: [],
  });
  const [chartDataKel, setChartDataKel] = React.useState({
    series: [],
    categories: [],
  });

  React.useEffect(() => {
    // handleGetDataLw();
    handleGetDataTotalByKel();
    handleGetTotalsampah();
    handleGetTotalLogbook();
    handleGetTotalBerita();
    handleGetTotalUsers();
    handleGetData();
  }, []);

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };

  const handleGetData = async () => {
    const respon = await getAllData("", "", "", 0, 7);
    const data = respon.data;
    const seriesData = data.map((item) => item.totalsampah);
    const categoriesData = data.map((item) => converFormatDate(item.tanggal));
    setChartData({
      series: [{ name: "Sampah", data: seriesData }],
      categories: categoriesData,
    });
  };

  const handleGetTotalsampah = async () => {
    const data = await getTotalDataSampah();
    setTotalSampah(data.data[0].totalSampah);
  };
  const handleGetTotalLogbook = async () => {
    const data = await getTotalLogbook();
    // console.log(data)
    setTotalLogbook(data.totalLogbookCount);
  };
  const handleGetTotalBerita = async () => {
    const data = await getTotalBerita();
    // console.log(data)
    setTotalBerita(data.totalBeritaCount);
  };
  const handleGetTotalUsers = async () => {
    const data = await getTotalUser();
    console.log(data);
    setTotalUsers(data.totalUsersCount);
  };

  // const handleGetDataLw = async () => {
  //   try {
  //     const response = await getDataLw();
  //     const data = response.data; // Sesuaikan dengan struktur data Anda

  //     // Memproses data untuk chart
  //     const seriesData = data.map((item) => item.totalSampah); // Menyesuaikan dengan format data
  //     const categoriesData = data.map((item) => converFormatDate(item.tanggal)); // Menyesuaikan dengan format data
  //     setChartData({
  //       series: [{ name: "Sampah", data: seriesData }],
  //       categories: categoriesData,
  //     });

  //     console.log(data);
  //     console.log(seriesData);
  //     console.log(categoriesData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleGetDataTotalByKel = async () => {
    try {
      const response = await getDataTotalByKel();
      const data = response.data; // Sesuaikan dengan struktur data Anda

      // Memproses data untuk chart
      const seriesData = data.map((item) => item.totalSampah); // Menyesuaikan dengan format data
      const categoriesData = data.map(
        (item) => item.tb_kelurahan.namaKelurahan
      ); // Menyesuaikan dengan format data

      setChartDataKel({
        series: seriesData,
        categories: categoriesData,
      });

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const chartConfig = {
    type: "line",
    height: 240,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  const chartBarConfig = {
    type: "bar",
    height: 240,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  const chartPieConfig = {
    type: "pie",
    width: 280,
    height: 280,
    // series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: true,
      },
      colors: [
        "#020617",
        "#ff8f00",
        "#00897b",
        "#1e88e5",
        "#d81b60",
        "#660066",
        "#f55555",
        "#0033cc",
      ],
      legend: {
        show: true,
        position: "bottom",
      },
      labels: chartDataKel.categories,
    },
  };

  return (
    <div className="w-full h-screen bg-white p-5 overflow-scroll">
      <Typography variant="h5">Dashboard </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        <BoxComp
          classes="bg-cyan-300"
          judul="User"
          isi={`${totalUsers ? totalUsers : 0}`}
        ></BoxComp>
        <BoxComp
          classes="bg-green-300"
          judul="Total Sampah"
          isi={`${totalSampah ? totalSampah : 0} Kg`}
        ></BoxComp>
        <BoxComp
          classes="bg-red-300"
          judul="Logbook"
          isi={`${totalLogbook ? totalLogbook : 0}`}
        ></BoxComp>
        <BoxComp
          classes="bg-yellow-300"
          judul="Berita"
          isi={`${totalBerita ? totalBerita : 0}`}
        ></BoxComp>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartComp
          icon={<FaDatabase className="h-6 w-6"></FaDatabase>}
          header={"7 data sampah terbaru"}
          deskripsi={
            "Data sampah di bawah mendeskripsikan total data sampah yang di peroleh"
          }
        >
          <Chart
            {...chartBarConfig}
            options={{
              ...chartBarConfig.options,
              xaxis: {
                categories: chartDataLastWeek && chartDataLastWeek.categories,
              },
            }}
            series={chartDataLastWeek && chartDataLastWeek.series}
          />
        </ChartComp>

        <ChartComp
          icon={<FaDatabase className="h-6 w-6"></FaDatabase>}
          header={"7 data sampah terbaru"}
          deskripsi={
            "Data sampah di bawah mendeskripsikan total data sampah yang di peroleh "
          }
        >
          <Chart
            {...chartConfig}
            options={{
              ...chartBarConfig.options,
              xaxis: {
                categories: chartDataLastWeek && chartDataLastWeek.categories,
              },
            }}
            series={chartDataLastWeek && chartDataLastWeek.series}
          />
        </ChartComp>
        
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              <FaDatabase className="h-6 w-6"></FaDatabase>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Total data sampah yang ada di 8 kelurahan
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
                Data sampah di bawah mendeskripsikan total data sampah yang
                berada di 8 kelurahan
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mt-4 grid place-items-center px-2">
            <Chart
              {...chartPieConfig}
              series={chartDataKel && chartDataKel.series}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const BoxComp = ({ classes, judul, isi }) => {
  return (
    <div
      className={`p-5 border border-gray-300 rounded-xl shadow-lg text-gray-700 ${classes}`}
    >
      <h1 className="text-xl">{judul}</h1>
      <h1 className="text-xl">{isi}</h1>
    </div>
  );
};

const ChartComp = ({ icon, header, deskripsi, children }) => {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          {icon}
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            {header}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            {deskripsi}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">{children}</CardBody>
    </Card>
  );
};

export default dashboardView;
