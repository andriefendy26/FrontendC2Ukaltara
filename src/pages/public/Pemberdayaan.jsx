import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
  Input,
  IconButton,
  Select,
  Option,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";
import { format } from "date-fns";
import Chart from "react-apexcharts";
import { FaDatabase } from "react-icons/fa6";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Datepicker } from "flowbite-react";
import ReactPaginate from "react-paginate";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";

import {
  getAllData,
  getDataLw,
  getDataTotalByKel,
} from "../../services/DataServices";
import { getAllKelurahan } from "../../services/KelurahanService";
const TABLE_HEAD = [
  "No",
  "Kelurahan",
  "Tempat",
  "Waktu",
  "Partisipan",
  "Sampah Wisata",
  "Sampah Warga",
  // "Sampah Alam",
  "Sampah Rumput Laut",
  "Sampah Industri",
  "Total (Kg)",
];

const Pemberdayaan = () => {
  const [chartDataLastWeek, setChartData] = React.useState({
    series: [{ name: "Sampah", data: [] }],
    categories: [],
  });

  const [chartDataKel, setChartDataKel] = React.useState({
    series: [],
    categories: [],
  });

  React.useEffect(() => {
    handleGetDataLw();
    handleGetDataTotalByKel();
    // handleGetTotalsampah();
    // handleGetTotalLogbook();
    // handleGetTotalBerita();
    // handleGetTotalUsers();
  }, []);

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };

  const handleGetDataLw = async () => {
    try {
      const response = await getDataLw();
      const data = response.data; // Sesuaikan dengan struktur data Anda

      // Memproses data untuk chart
      const seriesData = data.map((item) => item.totalSampah); // Menyesuaikan dengan format data
      const categoriesData = data.map((item) => converFormatDate(item.tanggal)); // Menyesuaikan dengan format data
      setChartData({
        series: [{ name: "Sampah", data: seriesData }],
        categories: categoriesData,
      });

      console.log(data);
      console.log(seriesData);
      console.log(categoriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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

  const [data, setData] = React.useState();
  const [kelurahan, setKelurahan] = React.useState([]);
  const [kelurahanIDFilter, setKelurahanIDFilter] = React.useState();
  const [page, setPage] = React.useState();
  const [totalPage, setTotalPage] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [limit, setLimit] = React.useState(5);
  //form data sampah
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  //handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  useEffect(() => {
    getKelurahan();
  }, []);

  useEffect(() => {
    getData();
  }, [page, kelurahanIDFilter, startDate, endDate]);

  const handleSelect = (e) => {
    // console.log(e);
    setKelurahanIDFilter(Number(e));
  };

  const getData = async () => {
    const startDateConv = converFormatDate(startDate);
    const endDateConv = converFormatDate(endDate);
    const data = await getAllData(
      startDateConv,
      endDateConv,
      kelurahanIDFilter,
      page,
      limit
    );
    setData(data.data);
    setPage(data.page);
    setTotalPage(data.totalPages);
    setRows(data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const getKelurahan = async () => {
    try {
      const response = await getAllKelurahan();
      setKelurahan(response);
    } catch (error) {
      console.error("Error fetching kelurahan:", error);
    }
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
        enabled: false,
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
    <div className="m-10">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-2">Pemberdayaan Pesisir</h1>
        <p className="">
          Pemberdayaan pesisir adalah upaya untuk meningkatkan kapasitas dan
          kesejahteraan masyarakat yang tinggal di daerah pesisir, serta menjaga
          dan memanfaatkan sumber daya pesisir secara berkelanjutan. Konsep ini
          melibatkan berbagai aspek, termasuk ekonomi, sosial, dan lingkungan,
          untuk memastikan bahwa masyarakat pesisir dapat mengelola sumber daya
          alam mereka dengan efektif, mengurangi kemiskinan, dan meningkatkan
          kualitas hidup mereka.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4">
        <ChartComp
          icon={<FaDatabase className="h-6 w-6"></FaDatabase>}
          header={"Data sampah 7 hari terakhir"}
          deskripsi={
            "Data sampah di bawah mendeskripsikan total data sampah yang di peroleh 7 hari terakhri"
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
      <Card className="w-full">
        <CardHeader floated={false} shadow={false} className="">
          <div className=" flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Data Sampah
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all data
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
            <div className="w-full md:w-72">
              <Typography color="gray" className="mt-1 font-normal">
                Filter berdasarkan kelurahan
              </Typography>
              <select
                nama="select select-bordered "
                label="Pilih kelurahan"
                className="w-full"
                value={kelurahan.id}
                onChange={(e) => handleSelect(e.target.value)}
              >
                {kelurahan &&
                  kelurahan.map((item, i) => (
                    <option key={i} value={item.id.toString()}>
                      {item.namaKelurahan}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="my-2 flex flex-col gap-3">
            <Typography color="gray" className="mt-1 font-normal">
              Filter berdasarkan tanggal
            </Typography>
            <div className="w-full md:w-72">
              <DatePicker
                date={startDate}
                setDate={setStartDate}
                label={"Tanggal Start"}
              />
            </div>
            <div className="w-full md:w-72">
              <DatePicker
                date={endDate}
                setDate={setEndDate}
                label={"Tanggal End"}
              />
            </div>
            <div className="w-full md:w-72">
              <Button
                variant="outlined"
                className="w-full"
                size="sm"
                onClick={() => {
                  setKelurahanIDFilter(null);
                  setPage(0);
                  setStartDate("");
                  setEndDate("");
                }}
              >
                Lihat semua
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className=" pt-10 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.tb_kelurahan.namaKelurahan}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.lokasi}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {converFormatDate(data.tanggal)}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.partisipan}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.sampahwisata}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.sampahwarga}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.sampahrumputlaut}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.sampahindustri}
                        </Typography>
                      </td>
                      <td className="p-4 bg-green-200">
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {data.totalsampah}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex flex-col gap-1 items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {rows ? page + 1 : 0} of {totalPage}
          </Typography>
          <div className="">
            <ReactPaginate
              nextLabel={
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              }
              previousLabel={
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
              }
              pageCount={totalPage}
              onPageChange={changePage}
              containerClassName="flex gap-2 items-center"
            />
          </div>
        </CardFooter>
      </Card>
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

const DatePicker = ({ date, setDate, label }) => {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Input
          label={label ? label : "select a date"}
          onChange={() => null}
          value={date ? format(date, "PPP") : ""}
          className=""
        />
      </PopoverHandler>
      <PopoverContent>
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays
          className="border-0"
          classNames={{
            caption: "flex justify-center py-2 mb-4 relative items-center",
            caption_label: "text-sm font-medium text-gray-900",
            nav: "flex items-center",
            nav_button:
              "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
            nav_button_previous: "absolute left-1.5",
            nav_button_next: "absolute right-1.5",
            table: "w-full border-collapse",
            head_row: "flex font-medium text-gray-900",
            head_cell: "m-0.5 w-9 font-normal text-sm",
            row: "flex w-full mt-2",
            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "h-9 w-9 p-0 font-normal",
            day_range_end: "day-range-end",
            day_selected:
              "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
            day_today: "rounded-md bg-gray-200 text-gray-900",
            day_outside:
              "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
            day_disabled: "text-gray-500 opacity-50",
            day_hidden: "invisible",
          }}
          components={{
            IconLeft: ({ ...props }) => (
              <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
            ),
            IconRight: ({ ...props }) => (
              <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
            ),
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default Pemberdayaan;
