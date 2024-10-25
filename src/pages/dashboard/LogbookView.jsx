import React, { useEffect, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Popover,
  PopoverHandler,
  PopoverContent,
  Dialog,
  Select,
  Option,
  Alert,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import { useLocation, useParams } from "react-router-dom";
import {
  createLogbook,
  deleteLogbook,
  getAllLogbook,
  getAllLogbookByKelID,
} from "../../services/LogbookService";
import ReactPaginate from "react-paginate";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { FileInput, Label } from "flowbite-react";
// import { TrashIcon } from "";
import { TrashIcon } from "lucide-react";
import { useSelector } from "react-redux";

// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Monitored",
//     value: "monitored",
//   },
//   {
//     label: "Unmonitored",
//     value: "unmonitored",
//   },
// ];

const TABLE_HEAD = [
  "Nama",
  "NPM",
  "Jurusan",
  "Tanggal",
  "Kegiatan",
  "Gambar",
  "Action",
];

const LogbookDetail = () => {
  let { id } = useParams();
  //user ident
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const kelurahanName = location.state?.namaKelurahan || "";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
    setPreview("");
  };

  const [kelurahan, setKelurahan] = React.useState([]);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [limit, setLimit] = React.useState(5);
  const [totalPage, setTotalPage] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");
  const [query, setQuery] = React.useState("");

  useEffect(() => {
    getData();
  }, [user, page, keyword, startDate, endDate]);

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const handleSearch = (e) => {
    // getUser();
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };


  const[loadingData, setloadingData] = useState();
  const getData = async () => {
    setloadingData(true);
    const startDateConv = converFormatDate(startDate);
    const endDateConv = converFormatDate(endDate);
    const data = await getAllLogbook(
      user?.tb_role.roleName == "Super Admin" ? "" : user?.kelurahanID,
      page,
      limit,
      startDateConv,
      endDateConv,
      keyword
    );
    // setKelurahan(data)
    console.log(data);
    setKelurahan(data.data);
    setPage(data.page);
    setTotalPage(data.totalPages);
    setRows(data.totalRows);
    setloadingData(false);
  };

  //handle add data
  const [file, setFile] = React.useState("");
  const [preview, setPreview] = React.useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const [form, setForm] = React.useState({
    nama: "",
    npm: "",
    jurusan: "",
    kegiatan: "",
    kelurahanID: id,
  });

  const [isError, setIsError] = React.useState();
  const [isSuccess, setIsSuccess] = React.useState();
  const handleChange = (e) => {
    setForm((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    setForm((curr) => ({
      ...curr,
      jurusan: e,
    }));
  };

  const Loadimage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleCreateData = async () => {
    // console.log(form);
    setIsloading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama", user.nama);
    formData.append("npm", user.npm);
    formData.append("jurusan", user.jurusan);
    formData.append("kegiatan", form.kegiatan);
    formData.append("kelurahanID", user.tb_kelurahan.id);

    try {
      const responseApi = await createLogbook(formData);
      // console.log(responseApi);
      if (responseApi.status == 401) {
        const message = responseApi.response.data.msg;
        setIsError(message);
        setIsloading(false);
        setTimeout(() => {
          setIsError(null); // Hide error message after 4 seconds
        }, 4000);
      } else if (responseApi.status == 422) {
        const message = responseApi.response.data.msg;
        setIsError(message);
        setIsloading(false);
        setTimeout(() => {
          setIsError(null); // Hide error message after 4 seconds
        }, 4000);
      } else {
        setForm({
          nama: "",
          npm: "",
          jurusan: "",
          kegiatan: "",
        });
        setFile("");
        setPreview("");
        setIsloading(false);
        setOpen((cur) => !cur);
        setIsError(null);
        setIsSuccess(responseApi.msg);
        // console.log(responseApi);
        setTimeout(() => {
          setIsSuccess(null); // Hide error message after 4 seconds
        }, 4000);
        getData();
      }
      getData();
    } catch (error) {
      setIsloading(false);
      setIsError(error.message);
    }
  };

  // Handle Delete ////
  const [openDel, setOpenDel] = React.useState({ isOpen: false, id: "" });

  const handleDelete = async () => {
    const api = await deleteLogbook(openDel.id);
    console.log(api);
    getData();
    setOpenDel({
      isOpen: !openDel.isOpen,
      id: "",
    });
  };

  const handleOpenDelete = (id) =>
    setOpenDel({
      isOpen: !openDel.isOpen,
      id: id,
    });

  const ModalImage = (isOpen, image) => {
    return (
      <dialog id={isOpen} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img
            className="h-36  rounded-lg object-cover object-center"
            src={image}
            alt="gambar kamu"
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  };

  return (
    <div className="h-screen w-full overflow-scroll">
      <Dialog open={openDel.isOpen} handler={handleOpenDelete}>
        <DialogHeader>Apakah Anda yakin ingin menghapus item ini?</DialogHeader>
        <DialogBody>
          Tindakan ini tidak dapat dibatalkan, dan Anda akan kehilangan semua
          data terkait. Jika Anda yakin dengan keputusan Anda dan siap untuk
          melanjutkan, mohon konfirmasi. Kami siap membantu jika Anda memiliki
          pertanyaan atau membutuhkan bantuan lebih lanjut.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenDelete}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleDelete()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {isSuccess && (
        <Alert color="green" className="fixed bottom-0 w-56 right-0 m-4 z-50">
          {isSuccess}.
        </Alert>
      )}
      <Card className="w-full">
        <ModalAddLogbook
        open={open}
        handleOpen={handleOpen}
        form={form}
        handleChange={handleChange}
        handleCreateData={handleCreateData}
        handleSelect={handleSelect}
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
        onChangeImage={Loadimage}
        preview={preview}
      />
        {/* <Typography variant="h3">{kelurahanName}</Typography> */}
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <Typography color="gray" variant="h5" className="mt-1 font-bold">
            Logbook
          </Typography>
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography color="gray" className="mt-1 font-normal">
                Lihat semua informasi mengenai kegiatan harian
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => {
                  // setKelurahanIDFilter(null);
                  setQuery("");
                  setKeyword("");
                  setPage(0);
                  setStartDate("");
                  setEndDate("");
                }}
              >
                Lihat Semua
              </Button>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Isi Logbook
              </Button>
            </div>
          </div>
          <div className="flex flex-col  justify-between gap-4">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={
                  <button
                    className="bg-gray-300 rounded-lg"
                    onClick={(e) => handleSearch(e)}
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </button>
                }
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="w-full gap-2 md:flex md:flex-col">
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
              <div className="w-full md:w-72 mt-2">
                <DatePicker
                  date={endDate}
                  setDate={setEndDate}
                  label={"Tanggal End"}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            {
              loadingData ? <span className="loading loading-ring loading-lg"></span> : (

            <tbody>
              {kelurahan.length > 0 ? (
                kelurahan.map(
                  (
                    { id, nama, npm, jurusan, tanggal, kegiatan, url },
                    index
                  ) => {
                    const isLast = index === kelurahan.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {nama}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {npm}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {jurusan}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {converFormatDate(tanggal)}
                          </Typography>
                        </td>

                        <td className={classes}>
                          {/* <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {kegiatan}
                          </Typography> */}
                          <Textarea
                            label="Message"
                            name="deskripsi"
                            size="lg"
                            value={kegiatan}
                            disabled
                            // onChange={(e) => handleChange(e)}
                          />
                        </td>
                        <td className={classes}>
                          <img
                            className="h-36  rounded-lg object-cover object-center"
                            src={url}
                            alt="gambar kamu"
                          />
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {/* <Tooltip content="Edit User">
                            <IconButton
                              variant="text"
                              // onClick={() => handleEditOpen(data)}
                            >
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip> */}
                          {
                            user && user?.roleID != 4 ? (

                            <Tooltip content="Delete Data">
                              <IconButton
                                variant="text"
                                onClick={() => handleOpenDelete(id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>

                            ) : null
                          }
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )
              ) : (
                <span className="text-center">Data masih kosong</span>
              )}
            </tbody>
              )
            }
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
              pageCount={totalPage ? Math.ceil(rows / limit) : 0}
              onPageChange={changePage}
              containerClassName="flex gap-2 items-center"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

const ModalAddLogbook = ({
  open,
  handleOpen,
  form,
  handleChange,
  handleCreateData,
  handleSelect,
  isError,
  // isSuccess,
  isLoading,
  onChangeImage,
  preview,
}) => {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none overflow-y-scroll h-[90%]"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            Isi Logbook
          </Typography>
          <Typography className="font-normal" variant="paragraph" color="gray">
            Lengkapi data di bawah untuk mengisi logbook anda
          </Typography>

          {isError && (
            <Alert className="fixed bottom-0 w-56 right-0 m-4 z-50">
              {isError}.
            </Alert>
          )}

          {/* <Typography className="-mb-2" variant="h6">
            Nama
          </Typography>
          <Input
            label="Nama"
            name="nama"
            size="lg"
            // value={form.nama}
            onChange={(e) => handleChange(e)}
          />
          <Typography className="-mb-2" variant="h6">
            NPM
          </Typography>
          <Input
            label="NPM"
            name="npm"
            size="lg"
            // value={form.nama}
            onChange={(e) => handleChange(e)}
          />
          <Typography className="-mb-2" variant="h6">
            Jurusan
          </Typography>
          <Select
            label="Pilih Jurusan"
            // value={form.jurusan}
            onChange={(e) => handleSelect(e)}
          >
            <Option value="Aquakultur">Aquakultur</Option>
            <Option value="Teknologi Hasil Perikanan">
              Teknologi Hasil Perikanan
            </Option>
            <Option value="Teknik Komputer">Teknik Komputer</Option>
            <Option value="Manajemen Sumberdaya Perairan">
              Manajemen Sumberdaya Perairan
            </Option>
          </Select> */}

          <Typography className="-mb-2" variant="h6">
            Kegiatan
          </Typography>
          <Input
            label="Kegiatan"
            name="kegiatan"
            size="lg"
            // value={form.kegiatan}
            onChange={(e) => handleChange(e)}
          />
          <Typography className="-mb-2" variant="h6">
            Upload gambar
          </Typography>
          <Typography className="-mb-2 text-sm" variant="paragraph">
            Format File : [.png,.jpg,.jpeg]
          </Typography>

          <FileInput id="default-file-upload" onChange={onChangeImage} />
          {preview ? (
            <img
              className="h-36 w-full rounded-lg object-cover object-center"
              src={preview}
              alt="gambar kamu"
            />
          ) : (
            ""
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            loading={isLoading}
            variant="gradient"
            onClick={handleCreateData}
            fullWidth
          >
            Simpan
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
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

export default LogbookDetail;
