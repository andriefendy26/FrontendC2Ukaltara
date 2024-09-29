import React, { useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
  Dialog,
  Option,
  Select,
  Alert,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import ReactPaginate from "react-paginate";
import {
  createBerita,
  deleteBerita,
  getAllData,
  updateBerita,
} from "../../services/BeritaServices";
import { getAllKelurahan } from "../../services/KelurahanService";
// import { Select } from "react-day-picker";
import { Datepicker, FileInput } from "flowbite-react";
import { format } from "date-fns";
import { TrashIcon } from "lucide-react";
import { useSelector } from "react-redux";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "Kelurahan",
  "Judul",
  "Deskripsi",
  "Jenis",
  "Tanggal",
  "Gambar",
  "Action",
];

const BeritaView = () => {
  //user ident
  const { user } = useSelector((state) => state.auth);

  //penyimpanan data berita
  const [data, setData] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  //hayya
  const [kelurahan, setKelurahan] = React.useState([]);
  const [kelurahanIDFilter, setKelurahanIDFilter] = React.useState([]);
  const [page, setPage] = React.useState();
  const [totalPage, setTotalPage] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [limit, setLimit] = React.useState(3);

  useEffect(() => {
    getKelurahan();
  }, []);

  useEffect(() => {
    handleGetBerita();
  }, [user, page, kelurahanIDFilter]);

  const handleGetBerita = async () => {
    const data = await getAllData(
      page,
      limit,
      user?.tb_role.roleName == "Super Admin"
        ? kelurahanIDFilter
        : user?.kelurahanID
    );
    setData(data.data);
    setPage(data.page);
    setTotalPage(data.totalPages);
    setRows(data.totalRows);
  };

  const handleSelect = (e) => {
    // console.log(e);
    setKelurahanIDFilter(Number(e));
  };

  const getKelurahan = async () => {
    try {
      const response = await getAllKelurahan();
      setKelurahan(response);
    } catch (error) {
      console.error("Error fetching kelurahan:", error);
    }
  };

  //handle add data////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [file, setFile] = React.useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const [preview, setPreview] = React.useState("");
  const [form, setForm] = React.useState({
    judul: "",
    deskripsi: "",
    kelurahanID: null,
    tanggal: "",
    jenis: "",
  });
  const [isError, setIsError] = React.useState();
  const [isSuccess, setIsSuccess] = React.useState();
  const handleChange = (e) => {
    setForm((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectAdd = (e, nama) => {
    setForm((curr) => ({
      ...curr,
      [nama]: e,
    }));
  };

  const Loadimage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFile(image);
    setPreview(URL.createObjectURL(image));
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

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const handleCreateData = async () => {
    console.log(form);
    setIsloading(true);

    const wordCount = form.deskripsi.trim().split(/\s+/).length;

    if (wordCount < 200) {
      setIsError("Input must be at least 200 words.");
      setIsloading(false);
      setTimeout(() => {
        setIsError(null); // Hide error message after 4 seconds
      }, 4000);
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("judul", form.judul);
      formData.append("deskripsi", form.deskripsi);
      formData.append("tanggal", form.tanggal);
      formData.append("jenis", form.jenis);
      if (form.kelurahanID != null)
        formData.append("kelurahanID", form.kelurahanID);

      try {
        const responseApi = await createBerita(formData);
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
          handleGetBerita();
        }
        handleGetBerita();
      } catch (error) {
        setIsloading(false);
        setIsError(error.message);
      }
    }
  };
  const converFormatDate = (val) => {
    return val ? format(val, "yyyy-MM-dd") : "";
    // return date
  };

  //handle delete////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [openDel, setOpenDel] = React.useState({ isOpen: false, id: "" });

  const handleDelete = async () => {
    const api = await deleteBerita(openDel.id);
    console.log(api);
    handleGetBerita();
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

  //handle update////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [fileEdit, setFileEdit] = React.useState("");
  const [editOpen, setEditOpen] = React.useState(false);
  const [isLoadingEdit, setIsloadingEdit] = React.useState(false);
  const [previewEdit, setPreviewEdit] = React.useState("");
  const [formEdit, setFormEdit] = React.useState({
    id: "",
    judul: "",
    deskripsi: "",
    kelurahanID: null,
    tanggal: "",
    jenis: "",
  });
  const [isErrorEdit, setIsErrorEdit] = React.useState();
  const [isSuccessEdit, setIsSuccessEdit] = React.useState();
  const handleChangeEdit = (e) => {
    setFormEdit((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditOpen = (data) => {
    setFormEdit({
      id: data.id,
      judul: data.judul,
      deskripsi: data.deskripsi,
      kelurahanID: data.kelurahanID,
      tanggal: data.tanggal,
      jenis: data.jenis,
    });
    setEditOpen((curr) => !curr);
    console.log(formEdit);
  };

  const handleSelectEdit = (e, nama) => {
    setFormEdit((curr) => ({
      ...curr,
      [nama]: e,
    }));
  };

  const LoadimageEdit = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFileEdit(image);
    setPreviewEdit(URL.createObjectURL(image));
  };

  const handleEditDateS = (date) => {
    console.log("DatePicker Change Event Fired");
    console.log("Date:", date);
    // setDateEdit(date);
    setFormEdit((prev) => ({
      ...prev,
      tanggal: converFormatDate(date),
    }));
    console.log(form);
    // console.log(converFormatDate(dateEdit));
  };

  const handleEditData = async () => {
    console.log(formEdit);
    setIsloadingEdit(true);
    const formData = new FormData();
    formData.append("file", fileEdit);
    formData.append("judul", formEdit.judul);
    formData.append("deskripsi", `${formEdit.deskripsi}`);
    formData.append("kelurahanID", formEdit.kelurahanID);
    formData.append("tanggal", formEdit.tanggal);
    formData.append("jenis", formEdit.jenis);

    try {
      const responseApi = await updateBerita(formEdit.id, formData);
      // console.log(responseApi);
      if (responseApi.status == 401) {
        const message = responseApi.response.data.msg;
        setIsErrorEdit(message);
        setIsloadingEdit(false);
        setTimeout(() => {
          setIsErrorEdit(null); // Hide error message after 4 seconds
        }, 4000);
      } else if (responseApi.status == 422) {
        const message = responseApi.response.data.msg;
        setIsErrorEdit(message);
        setIsloadingEdit(false);
        setTimeout(() => {
          setIsErrorEdit(null); // Hide error message after 4 seconds
        }, 4000);
      } else {
        setFormEdit({
          nama: "",
          npm: "",
          jurusan: "",
          kegiatan: "",
        });
        setFileEdit("");
        setPreviewEdit("");
        setIsloadingEdit(false);
        setEditOpen((cur) => !cur);
        setIsErrorEdit(null);
        setIsSuccessEdit(responseApi.msg);
        // console.log(responseApi);
        setTimeout(() => {
          setIsSuccessEdit(null); // Hide error message after 4 seconds
        }, 4000);
        handleGetBerita();
      }
    } catch (error) {
      setIsloadingEdit(false);
      setIsErrorEdit(error.message);
    }
  };
  return (
    <div className="w-full h-screen overflow-scroll ">
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
      {/*  handle Edit  Berita //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <ModalAddBerita
        open={editOpen}
        handleOpen={handleEditOpen}
        form={formEdit}
        handleChange={handleChangeEdit}
        handleCreateData={handleEditData}
        handleSelect={handleSelectEdit}
        isError={isErrorEdit}
        isSuccess={isSuccessEdit}
        isLoading={isLoadingEdit}
        onChangeImage={LoadimageEdit}
        preview={previewEdit}
        kelurahan={kelurahan}
        handleAddDate={handleEditDateS}
      />
      {/* handle Add Berita //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <ModalAddBerita
        open={open}
        handleOpen={handleOpen}
        form={form}
        handleChange={handleChange}
        handleCreateData={handleCreateData}
        handleSelect={handleSelectAdd}
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
        onChangeImage={Loadimage}
        preview={preview}
        kelurahan={kelurahan}
        handleAddDate={handleAddDateS}
      />
      <Card className="w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                List Berita
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Lihat semua informasi tentang berita
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => {
                  setKelurahanIDFilter("");
                  setPage(0);
                }}
              >
                Lihat semua
              </Button>
              <Button
                onClick={handleOpen}
                className="flex items-center gap-3"
                size="sm"
              >
                {/* <UserPlusIcon strokeWidth={2} className="h-4 w-4" />  */}
                Tambah Berita
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              {user?.tb_role.roleName == "Super Admin" ? (
                <>
                  <Typography color="gray" className="mt-1 font-normal">
                    Filter berdasarkan kelurahan
                  </Typography>
                  <select
                    label="Pilih kelurahan"
                    className="select select-bordered"
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
                </>
              ) : (
                ""
              )}
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
            <tbody>
              {data &&
                data.map((data, index) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="w-max">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.tb_kelurahan.namaKelurahan}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          {/* <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.judul}
                          </Typography> */}
                          <Textarea
                            label="Message"
                            name="deskripsi"
                            size="lg"
                            value={data.judul}
                            disabled
                            // onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </td>
                      <td className={`${classes}`}>
                        <div className="w-max">
                          {/* <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.deskripsi}
                          </Typography> */}
                          <Textarea
                            label="Message"
                            name="deskripsi"
                            size="lg"
                            value={data.deskripsi}
                            disabled
                            // onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data.jenis}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {format(data.tanggal, "yyyy-MM-dd")}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <img
                          className="h-36  rounded-lg object-cover object-center"
                          src={data.url}
                          alt="gambar kamu"
                        />
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

const ModalAddBerita = ({
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
  kelurahan,
  handleAddDate,
}) => {
  const { user } = useSelector((state) => state.auth);
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
            Isi Berita
          </Typography>
          <Typography className="font-normal" variant="paragraph" color="gray">
            Lengkapi data di bawah untuk mengisi berita
          </Typography>
          {isError && (
            <Alert className="fixed bottom-0 w-56 right-0 m-4 z-50">
              {isError}.
            </Alert>
          )}
          <Typography className="-mb-2" variant="h6">
            Judul
          </Typography>
          <Input
            label="Judul"
            name="judul"
            size="lg"
            value={form.judul}
            onChange={(e) => handleChange(e)}
          />
          <Typography className="-mb-2" variant="h6">
            Deskripsi
          </Typography>
          {/* <Input
            label="Deskripsi"
            name="deskripsi"
            size="lg"
            type="area"
            value={form.deskripsi}
            onChange={(e) => handleChange(e)}
          /> */}
          <Textarea
            label="Message"
            name="deskripsi"
            size="lg"
            value={form.deskripsi}
            onChange={(e) => handleChange(e)}
          />
          <Typography className="-mb-2" variant="h6">
            Jenis
          </Typography>
          <Select
            label="Pilih Jenis"
            value={form.jenis}
            nama="Jenis"
            onChange={(e) => handleSelect(e, "jenis")}
          >
            <Option value="Pengabdian Pesisir">Pengabdian Pesisir</Option>
            <Option value="Pendampingan Pesisir">Pendampingan Pesisir</Option>
            <Option value="Sosialisasi Pesisir">Sosialisasi Pesisir</Option>
            <Option value="Lestari Mangrove">Lestari Mangrove</Option>
          </Select>
          {user?.tb_role.roleName == "Super Admin" ? (
            <>
              <Typography className="-mb-2" variant="h6">
                Kelurahan
              </Typography>
              <Select
                label="Pilih kelurahan"
                nama="kelurahan"
                value={`${form.kelurahanID}`}
                onChange={(e) => handleSelect(e, "kelurahanID")}
                // onChange={(e) => handleSelectAdd(e, "kelurahanID")}
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
            Tanggal
          </Typography>
          <Datepicker
            onSelectedDateChanged={handleAddDate}
            value={form.tanggal}
            placeholder="Select date"
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

export default BeritaView;
