import React, { useEffect } from "react";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
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
  Select,
  Option,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";

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
  "Actions",
];

const TABLE_ROWS = [];

import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format, getDate } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import ReactPaginate from "react-paginate";
import { Datepicker } from "flowbite-react";
import { Alert } from "@material-tailwind/react";

//services
import { getAllKelurahan } from "../../services/KelurahanService";
import {
  getAllData,
  createData,
  updateData,
  deleteData,
} from "../../services/DataServices";
import { useSelector } from "react-redux";

export default function DataView() {
  //user ident
  const { user } = useSelector((state) => state.auth);

  //penyimpanan data sampah
  const [data, setData] = React.useState();
  const [msg, setMsg] = React.useState();

  //handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  //form tambah data
  const [date, setDate] = React.useState("");
  const [form, setForm] = React.useState({
    lokasi: "",
    partisipan: null,
    sampahWisata: null,
    sampahWarga: null,
    sampahRumputLaut: null,
    sampahIndustri: null,
    tanggal: "",
    kelurahanID: null,
  });

  //form data sampah
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [kelurahan, setKelurahan] = React.useState([]);
  const [kelurahanIDFilter, setKelurahanIDFilter] = React.useState();
  const [page, setPage] = React.useState();
  const [totalPage, setTotalPage] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [limit, setLimit] = React.useState(5);

  useEffect(() => {
    getKelurahan();
  }, []);

  useEffect(() => {
    getData();
  }, [page, kelurahanIDFilter, startDate, endDate]);

  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };

  const handleSelect = (e) => {
    // console.log(e);
    setKelurahanIDFilter(Number(e));
  };

  const [loadingData, setloadingData] = React.useState();
  const getData = async () => {
    setloadingData(true);
    const startDateConv = converFormatDate(startDate);
    const endDateConv = converFormatDate(endDate);
    const data = await getAllData(
      startDateConv,
      endDateConv,
      user?.tb_role.roleName == "Super Admin"
        ? kelurahanIDFilter
        : user?.kelurahanID,
      page,
      limit
    );
    setData(data.data);
    setPage(data.page);
    setTotalPage(data.totalPages);
    setRows(data.totalRows);
    setloadingData(false);
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

  // const handleChange = (e) => {
  //   setForm((curr) => ({
  //     ...curr,
  //     [e.target.nama]: e.target.value,
  //   }));
  // };

  const handleSelectAdd = (e, name) => {
    // console.log(e);
    setForm((prev) => ({
      ...prev,
      [name]: Number(e),
    }));
  };

  const handleChange = (e, value) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));

    console.log(form);
  };
  const handleAddDateS = (date) => {
    console.log("DatePicker Change Event Fired");
    console.log("Date:", date);
    // setDateEdit(date);
    setForm((prev) => ({
      ...prev,
      tanggal: converFormatDate(date),
    }));
    console.log(form);
    // console.log(converFormatDate(dateEdit));
  };

  const submitData = async () => {
    try {
      const response = await createData(form);
      console.log(response.status);
      if (response.status == 200) {
        setForm({
          okasi: "",
          partisipan: null,
          sampahWisata: null,
          sampahWarga: null,
          sampahRumputLaut: null,
          sampahIndustri: null,
          tanggal: "",
          kelurahanID: null,
        });
        setOpen(false);
        getData();
      } else if (response.status == 401) {
        setMsg(response.response.data.msg);
        setTimeout(() => {
          setMsg(null);
        }, 4000);
      }
    } catch (error) {
      setMsg("Isi Form dengan benar", error);
    }
  };

  //edit area
  const [dateEdit, setDateEdit] = React.useState("");
  const [editOpen, setEditOpen] = React.useState(false);
  const [editForm, setEditForm] = React.useState({
    lokasi: "",
    partisipan: null,
    sampahWisata: null,
    sampahWarga: null,
    sampahRumputLaut: null,
    sampahIndustri: null,
    tanggal: "",
    kelurahanID: null,
  });

  const handleEditOpen = (data) => {
    setEditForm({
      id: data.id,
      lokasi: data.lokasi,
      partisipan: data.partisipan,
      sampahWisata: data.sampahwisata,
      sampahWarga: data.sampahwarga,
      sampahRumputLaut: data.sampahrumputlaut,
      sampahIndustri: data.sampahindustri,
      tanggal: data.tanggal,
      kelurahanID: data.kelurahanID,
    });
    setEditOpen(true);
    console.log(editForm);
  };

  const handleEditChange = (e, value) => {
    setEditForm((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
    console.log(editForm);
  };

  const handleEditSelect = (e, name) => {
    setEditForm((prev) => ({
      ...prev,
      [name]: Number(e),
    }));
    console.log(editForm);
  };

  const handleEditDateS = (date) => {
    console.log("DatePicker Change Event Fired");
    console.log("Date:", date);
    // setDateEdit(date);
    setEditForm((prev) => ({
      ...prev,
      tanggal: converFormatDate(date),
    }));
    console.log(editForm);
    // console.log(converFormatDate(dateEdit));
  };

  const handleUpdateData = async () => {
    // const dateCon = converFormatDate(editForm.tanggal);
    // editForm.tanggal = dateCon;
    console.log(editForm);

    try {
      const responseApi = await updateData(editForm);
      if (responseApi.status === 200) {
        setEditOpen(false);
        getData();
        console.log(responseApi);
      } else {
        const message = responseApi.response.data.msg;
        setMsg(message);
        setMsg(() => {
          setMsg(null);
        }, 4000);
        console.log(responseApi);
      }
    } catch (error) {
      setMsg("Harap Isi Form dengan benar");
      setMsg(() => {
        setMsg(null);
      }, 4000);
      console.log(error);
    }
  };

  //delete area
  const [openDel, setOpenDel] = React.useState({ isOpen: false, id: "" });

  const handleDelete = async () => {
    const api = await deleteData(openDel.id);
    console.log(api);
    getData();
    setOpenDel({
      isOpen: !openDel.isOpen,
      id: "",
    });
  };

  const handleOpenDelete = (id) => {
    setOpenDel({
      isOpen: !openDel.isOpen,
      id: id,
    });
    console.log(id);
  };

  return (
    <div className="w-screen h-screen  overflow-scroll">
      {/* Delete Modal */}
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

      <ModalHeader open={open} handleOpen={handleOpen} msg={msg}>
        <ModalChildren
          // date={date}
          // setDate={setDate}
          handleChange={handleChange}
          handleSelectAdd={handleSelectAdd}
          submitData={submitData}
          form={form}
          kelurahan={kelurahan}
          kelurahanId={kelurahan.id}
          handleEditDate={handleAddDateS}
          // selectedDate={dateEdit}
          // msg={msg}
        ></ModalChildren>
      </ModalHeader>

      <ModalHeader open={editOpen} handleOpen={setEditOpen} msg={msg}>
        <ModalChildren
          // date={date}
          // setDate={setDate}
          handleChange={handleEditChange}
          handleSelectAdd={handleEditSelect}
          submitData={handleUpdateData}
          form={editForm}
          kelurahan={kelurahan}
          kelurahanId={editForm.kelurahanID}
          handleEditDate={handleEditDateS}
          selectedDate={dateEdit}
          // msg={msg}
        ></ModalChildren>
      </ModalHeader>
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
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                variant="outlined"
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
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                {/* <UserPlusIcon strokeWidth={2} className="h-4 w-4" />  */}
                Tambah Data
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
            {user?.tb_role.roleName == "Super Admin" ? (
              <div className="w-full md:w-72">
                <Typography color="gray" className="mt-1 font-normal">
                  Filter berdasarkan kelurahan
                </Typography>
                <select
                  nama="select select-bordered "
                  label="Pilih kelurahan"
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
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-3 mb-3">
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
            {loadingData ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
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
                            {data.tanggal}
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
                        <td className="p-4">
                          <Typography
                            variant="small"
                            className="font-normal text-gray-600"
                          >
                            {data.totalsampah}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Tooltip content="Edit User">
                              <IconButton
                                variant="text"
                                onClick={() => handleEditOpen(data)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete User">
                              <IconButton
                                variant="text"
                                onClick={() => handleOpenDelete(data.id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            )}
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
}

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

const ModalHeader = ({ handleOpen, open, msg, children }) => {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none h-[70%] overflow-scroll"
    >
      {" "}
      {msg && (
        <Alert className="fixed bottom-0 w-56 right-0 m-4 z-50">{msg}.</Alert>
      )}
      <Card className="mx-auto w-full max-w-[24rem]">{children}</Card>
    </Dialog>
  );
};

const ModalChildren = ({
  handleChange,
  submitData,
  form,
  kelurahan,
  kelurahanId,
  handleSelectAdd,
  handleEditDate,
}) => {
  // const kelurahanID = kelurahanId.toLocalString()
  // useEffect(() => {
  // console.log(selectedDate);
  // }, [handleEditDate]);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="">
      <CardBody className="flex flex-col gap-4 ">
        <Typography variant="h4" color="blue-gray">
          Tambah Data Sampah
        </Typography>
        <Typography className="font-normal" variant="paragraph" color="gray">
          Lengkapi data di bawah untuk menambah data sampah
        </Typography>
        {user?.tb_role.roleName == "Super Admin" ? (
          <>
            <Typography className="-mb-2" variant="h6">
              Kelurahan
            </Typography>
            <Select
              label="Pilih kelurahan"
              value={`${kelurahanId}`}
              onChange={(e) => handleSelectAdd(e, "kelurahanID")}
              // name="kelurahanID"
            >
              {kelurahan &&
                kelurahan.map((item, i) => (
                  <Option key={i} value={item.id.toString()}>
                    {item.namaKelurahan}
                  </Option>
                ))}
            </Select>
          </>
        ) : (
          ""
        )}
        <Typography className="-mb-2" variant="h6">
          Lokasi
        </Typography>
        <Input
          label="Lokasi"
          name="lokasi"
          size="lg"
          value={form.lokasi}
          onChange={(e) => handleChange(e, e.target.value)}
        />
        <Typography className="-mb-2" variant="h6">
          Tanggal (opsional tanggal otomatis kegenerate hari ini)
        </Typography>
        <Datepicker
          onSelectedDateChanged={handleEditDate}
          // onSelectCapture={handleEditDate}
          value={form.tanggal}
          placeholder="Select date"
        />
        <Typography className="-mb-2">
          Isi dengan angka (contoh : 1,3 atau 3)
        </Typography>
        <Typography className="-mb-2" variant="h6">
          Partisipan
        </Typography>
        <Input
          label="Partisipan"
          name="partisipan"
          size="lg"
          value={form.partisipan}
          onChange={(e) => handleChange(e, parseFloat(e.target.value))}
          type="number"
          min="0"
        />
        <Typography className="-mb-2" variant="h6">
          Sampah Wisata
        </Typography>
        <Input
          label="Sampah Wisata"
          name="sampahWisata"
          size="lg"
          value={form.sampahWisata}
          onChange={(e) => handleChange(e, parseFloat(e.target.value))}
          type="number"
          min={0}
        />
        <Typography className="-mb-2" variant="h6">
          Sampah Warga
        </Typography>
        <Input
          label="Sampah Warga"
          name="sampahWarga"
          size="lg"
          value={form.sampahWarga}
          onChange={(e) => handleChange(e, parseFloat(e.target.value))}
          type="number"
          min={0}
        />
        <Typography className="-mb-2" variant="h6">
          Sampah Rumput Laut
        </Typography>
        <Input
          label="Sampah Rumput Laut"
          name="sampahRumputLaut"
          size="lg"
          value={form.sampahRumputLaut}
          onChange={(e) => handleChange(e, parseFloat(e.target.value))}
          type="number"
          min={0}
        />
        <Typography className="-mb-2" variant="h6">
          Sampah Industri
        </Typography>
        <Input
          label="Sampah Industri"
          name="sampahIndustri"
          size="lg"
          type="number"
          min={0}
          value={form.sampahIndustri}
          onChange={(e) => handleChange(e, parseFloat(e.target.value))}
          required
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" onClick={submitData} fullWidth>
          Simpan
        </Button>
      </CardFooter>
    </div>
  );
};
