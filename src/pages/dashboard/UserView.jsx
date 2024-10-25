import React, { useEffect } from "react";
import {
  Avatar,
  Card,
  Typography,
  Button,
  Dialog,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Option,
  Select,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

import {
  createUser,
  getAlltUser,
  deleteUser,
  updateUserApi,
  Accessible,
} from "../../services/UserService";
import {
  getAllKelurahan,
  createKelurahan,
} from "../../services/KelurahanService";
import { getAllRole, createRole } from "../../services/RoleService";
import { UserPlusIcon } from "lucide-react";
import ReactPaginate from "react-paginate";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "Nama",
  "Penempatan",
  "Jurusan",
  "NPM",
  "Role",
  "Status",
  "Action",
];

const UserView = () => {
  //user ident
  const { user } = useSelector((state) => state.auth);
  // const user = useContext(UserContext);

  const [open, setOpen] = React.useState(false);
  const [openDel, setOpenDel] = React.useState({ isOpen: false, id: "" });
  const handleOpen = () => {
    setOpen((cur) => !cur);
  };
  const [data, setData] = React.useState([]);
  const [form, setForm] = React.useState({
    nama: "",
    email: "",
    password: "",
    roleID: "",
    kelurahanID: "",
    jurusan: "",
  });
  const [isError, setIsError] = React.useState();
  const [kelurahan, setKelurahan] = React.useState([]);
  const [roles, setRole] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [limit, setLimit] = React.useState(7);
  const [query, setQuery] = React.useState();

  useEffect(() => {
    getKelurahan();
    getRole();
    // console.log(user?.tb_role.roleName == "Super Admin" ? 'yes' : 'no')
    console.log(user);
  }, []);

  useEffect(() => {
    getUser();
  }, [user, page, keyword]);

  const [loadingData, setLoadingData] = React.useState();
  const getUser = async () => {
    setLoadingData(true);
    const data = await getAlltUser(
      keyword,
      page,
      limit,
      user.roleID == 3 ? "" : user?.kelurahanID
    );
    console.log(data);
    setData(data.data);
    setPage(data.page);
    setTotalPage(data.totalPages);
    setRows(data.totalRows);
    setLoadingData(false);
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

  const tambahUser = async () => {
    try {
      const responseApi = await createUser(form);
      console.log(responseApi);
      if (responseApi.status == 200) {
        setForm({
          nama: "",
          email: "",
          password: "",
          jurusan: "",
          roleID: "",
          kelurahanID: "",
        });
        setOpen((cur) => !cur);
        setIsError(null);
        console.log(responseApi);
        getUser();
      } else {
        const message = responseApi.data.response.data.message;
        setIsError(message);
        // console.log("message ", responseApi.response.data.message);
        setTimeout(() => {
          setIsError(null); // Hide error message after 4 seconds
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getKelurahan = async () => {
    try {
      const response = await getAllKelurahan();
      setKelurahan(response);
    } catch (error) {
      console.error("Error fetching kelurahan:", error);
    }
  };
  const getRole = async () => {
    try {
      const response = await getAllRole();
      setRole(response);
    } catch (error) {
      console.error("Error fetching kelurahan:", error);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  const handleOpenDelete = (id) =>
    setOpenDel({
      isOpen: !openDel.isOpen,
      id: id,
    });
  const handleDelete = async () => {
    const api = await deleteUser(openDel.id);
    // console.log(api);
    getUser();
    setOpenDel({
      isOpen: !openDel.isOpen,
      id: "",
    });
  };

  const [editOpen, setEditOpen] = React.useState(false);
  const [editForm, setEditForm] = React.useState({
    nama: "",
    email: "",
    password: "",
    roleID: "",
    kelurahanID: "",
    jurusan: "",
  });

  const handleEditOpen = (user) => {
    setEditForm({
      id: user.id,
      nama: user.nama,
      email: user.email,
      juruan: user.jurusan,
      password: "", // Password is typically not shown or editable for security reasons
      roleID: user.tb_role.id,
      kelurahanID: user.tb_kelurahan.id,
    });
    setEditOpen(true);
  };

  const handleEditChange = (e) => {
    setEditForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditSelect = (e, name) => {
    setEditForm((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  const updateUser = async () => {
    try {
      const responseApi = await updateUserApi(editForm);
      if (responseApi.status === 200) {
        setEditOpen(false);
        getUser();
      } else {
        const message = responseApi.data.response.data.msg;
        setIsError(message);
        setTimeout(() => {
          setIsError(null);
        }, 4000);
      }
    } catch (error) {
      setIsError("Harap Isi Form dengan benar");
      setTimeout(() => {
        setIsError(null);
      }, 4000);
    }
  };

  const handleAcc = async (id, request) => {
    const res = await Accessible(id, request ? true : false);
    console.log(res);
    if (res.status == 200) {
      getUser();
      Swal.fire({
        title: res.data.status,
        text: res.data.message,
        icon: "success",
      });
    }
  };

  return (
    <div className="w-full h-screen overflow-scroll">
      {/* <h1 className="text-2xl mb-5">User Managemen</h1> */}
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
      {/* Edit Modal */}
      <Dialog
        size="xs"
        open={editOpen}
        handler={() => setEditOpen(!editOpen)}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Edit User
            </Typography>
            <Typography
              className="font-normal"
              variant="paragraph"
              color="gray"
            >
              Lengkapi data di bawah untuk mengedit User
            </Typography>
            {isError && (
              <Typography variant="h6" color="red">
                {isError}
              </Typography>
            )}

            {/* Edit Nama */}
            <Typography className="-mb-2" variant="h6">
              Nama
            </Typography>
            <Input
              label="Nama"
              name="nama"
              size="lg"
              value={editForm.nama}
              onChange={handleEditChange}
            />

            {/* Edit Kelurahan */}
            <Typography className="-mb-2" variant="h6">
              Kelurahan
            </Typography>
            <Select
              label="Pilih kelurahan"
              value={editForm.kelurahanID.toString()}
              onChange={(e) => handleEditSelect(Number(e), "kelurahanID")}
            >
              {kelurahan.map((item) => (
                <Option key={item.id} value={item.id.toString()}>
                  {item.namaKelurahan}
                </Option>
              ))}
            </Select>

            {/*Edit Jurusan */}
            <Typography className="-mb-2" variant="h6">
              Jurusan
            </Typography>
            <Select
              label="Pilih Jurusan"
              name="jurusan"
              value={editForm.jurusan}
              onChange={(e) => handleEditSelect(e, "jurusan")}
            >
              <Option value="Aquakultur">Aquakultur</Option>
              <Option value="Teknologi Hasil Perikanan">
                Teknologi Hasil Perikanan
              </Option>
              <Option value="Teknik Komputer">Teknik Komputer</Option>
              <Option value="Manajemen Sumberdaya Perairan">
                Manajemen Sumberdaya Perairan
              </Option>
            </Select>
            {user?.tb_role.roleName == "Super Admin" ? (
              <>
                {/* Role */}
                <Typography className="-mb-2" variant="h6">
                  Role
                </Typography>
                <Select
                  label="Pilih role"
                  value={editForm.roleID.toString()}
                  onChange={(e) => handleEditSelect(Number(e), "roleID")}
                >
                  {roles &&
                    roles.map((item) => (
                      <Option key={item.id} value={item.id.toString()}>
                        {item.roleName}
                      </Option>
                    ))}
                </Select>
              </>
            ) : (
              <></>
            )}
            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <Input
              label="Email"
              name="email"
              size="lg"
              value={editForm.email}
              onChange={handleEditChange}
            />
            <Typography className="-mb-2" variant="h6">
              Password (Kosongkan jika tidak ingin mengubahnya)
            </Typography>
            <Input
              label="Password"
              name="password"
              size="lg"
              value={editForm.password}
              onChange={handleEditChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={updateUser} fullWidth>
              Simpan
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      {/* Modal tambah user */}
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Tambah User
            </Typography>
            <Typography
              className="font-normal"
              variant="paragraph"
              color="gray"
            >
              Lengkapi data di bawah untuk menambah User
            </Typography>
            {isError && (
              <Typography variant="h6" color="red" className="">
                {isError}
              </Typography>
            )}
            <Typography className="-mb-2" variant="h6">
              Nama
            </Typography>
            <Input
              label="Nama"
              name="nama"
              size="lg"
              value={form.nama}
              onChange={handleChange}
            />
            <Typography className="-mb-2" variant="h6">
              Kelurahan
            </Typography>
            <Select
              label="Pilih kelurahan"
              value={kelurahan.id}
              onChange={(e) => handleSelect(Number(e), "kelurahanID")}
            >
              {kelurahan &&
                kelurahan.map((item, i) => (
                  <Option key={i} value={item.id.toString()}>
                    {item.namaKelurahan}
                  </Option>
                ))}
            </Select>

            <Typography className="-mb-2" variant="h6">
              Jurusan
            </Typography>
            <Select
              label="Pilih Jurusan"
              name="jurusan"
              // value={form.jurusan}
              onChange={(e) => handleSelect(e, "jurusan")}
            >
              <Option value="Aquakultur">Aquakultur</Option>
              <Option value="Teknologi Hasil Perikanan">
                Teknologi Hasil Perikanan
              </Option>
              <Option value="Teknik Komputer">Teknik Komputer</Option>
              <Option value="Manajemen Sumberdaya Perairan">
                Manajemen Sumberdaya Perairan
              </Option>
            </Select>

            <Typography className="-mb-2" variant="h6">
              Role
            </Typography>

            <Select
              label="Pilih role"
              value={roles.id}
              onChange={(e) => handleSelect(Number(e), "roleID")}
            >
              {roles &&
                roles.map((item, i) => (
                  <Option key={i} value={item.id.toString()}>
                    {item.roleName}
                  </Option>
                ))}
            </Select>

            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <Input
              label="Email"
              name="email"
              size="lg"
              value={form.email}
              onChange={handleChange}
            />
            <Typography className="-mb-2" variant="h6">
              Password
            </Typography>
            <Input
              label="Password"
              name="password"
              size="lg"
              value={form.password}
              onChange={handleChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={tambahUser} fullWidth>
              Tambah
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
      {/* Batas Modal */}

      <Card className="min-w-full ">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Admin List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => {
                  setKeyword("");
                  setPage(0);
                }}
              >
                Lihat Semua
              </Button>
              {user?.tb_role.roleName == "Super Admin" ? (
                <Button
                  onClick={handleOpen}
                  className="flex items-center gap-3"
                  size="sm"
                >
                  {/* <UserPlusIcon strokeWidth={2} className="h-4 w-4" />  */}
                  Tambah Anggota
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
            {loadingData ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <tbody>
                {data &&
                  data.map(
                    (
                      {
                        id,
                        nama,
                        email,
                        url,
                        jurusan,
                        NPM,
                        status,
                        tb_kelurahan,
                        tb_role,
                      },
                      index
                    ) => {
                      const isLast = index === data.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              {/* <Avatar src={""} alt={nama.slice(2)} size="sm" /> */}
                              {url == null ? (
                                <span className="rounded-xl border-white bg-primary text-white border p-3">
                                  {nama.split(" ")[0].charAt(0).toUpperCase()}
                                </span>
                              ) : (
                                <img
                                  className="object-cover w-10 h-10 p-1 rounded-full ring-1 ring-black"
                                  src={url}
                                  alt={user?.nama
                                    .split(" ")[0]
                                    .charAt(0)
                                    .toUpperCase()}
                                />
                              )}
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {nama}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={`${classes} bg-blue-gray-50/50`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {tb_kelurahan.namaKelurahan}
                            </Typography>
                          </td>
                          <td className={`${classes}`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {jurusan}
                            </Typography>
                          </td>
                          <td className={`${classes}`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {NPM ? NPM : "Belum Mengisi NPM"}
                            </Typography>
                          </td>

                          <td className={`${classes} bg-blue-gray-50/50`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {tb_role.roleName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {status ? (
                                "Accessible"
                              ) : (
                                <div>
                                  <Button
                                    color="red"
                                    className="mr-2"
                                    onClick={() => handleAcc(id, false)}
                                  >
                                    Tolak
                                  </Button>
                                  <Button
                                    color="green"
                                    onClick={() => handleAcc(id, true)}
                                  >
                                    {" "}
                                    Terima
                                  </Button>
                                </div>
                              )}
                            </Typography>
                          </td>
                          {user?.tb_role.roleName == "Super Admin" ||
                          "Admin" ? (
                            <td className={`${classes} bg-blue-gray-50/50`}>
                              <Tooltip content="Edit User">
                                <IconButton
                                  variant="text"
                                  onClick={() =>
                                    handleEditOpen({
                                      id,
                                      nama,
                                      email,
                                      tb_kelurahan,
                                      tb_role,
                                    })
                                  }
                                >
                                  <PencilIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip content="Delete User">
                                <IconButton
                                  variant="text"
                                  onClick={() => handleOpenDelete(id)}
                                >
                                  <TrashIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </td>
                          ) : (
                            ""
                          )}
                        </tr>
                      );
                    }
                  )}
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
};

export default UserView;
