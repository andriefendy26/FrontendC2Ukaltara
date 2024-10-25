import React, { useEffect, useState } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/AuthSlice";
import Logo from "../../public/logo.png";
import { getAllKelurahan } from "../services/KelurahanService";
import { getAllRole } from "../services/RoleService";
import { createUser } from "../services/UserService";


import Swal from "sweetalert2";


export default function Register() {
  const [form, setForm] = React.useState({
    nama: "",
    email: "",
    password: "",
    roleID: 4,
    kelurahanID: "",
    jurusan: "",
  });

  const [isError, setIsError] = React.useState();
  const [isLoading, setIsLoading] = React.useState();

  const [kelurahan, setKelurahan] = React.useState([]);
  const [roles, setRole] = React.useState([]);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  useEffect(() => {
    getKelurahan();
    getRole();
  }, []);

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

  const Register = async () => {
 
    setIsLoading(true);
    // console.log(form);
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
        // setOpen((cur) => !cur);
        setIsError(null);
        setIsLoading(false);
        console.log(responseApi);
        Swal.fire({
          title: "Akun Berhasil Di Daftarkan",
          text: "Silahkan Hubungi admin pada kelurahan yang di daftarkan",
          icon: "success"
        });
      } else {
        setIsLoading(false);
        const message = responseApi.response.data.msg;
        // console.log(message)
        setIsError(message);
        setTimeout(() => {
          setIsError(null); // Hide error message after 4 seconds
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid text-center w-screen h-screen items-center p-8 ">
      <div>
        <div className="flex justify-center my-5">
          <img className="w-32 h-32 object-contain" src={Logo} alt="Logo" />
        </div>
        <Typography variant="h3" color="blue-gray" className="">
          Selamat datang
        </Typography>
        <Typography className="my-3 text-gray-600 font-normal text-[18px]">
          di sistem informasi C2Ukaltara
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="nama">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Nama
              </Typography>
            </label>
            <Input
              id="nama"
              color="gray"
              size="lg"
              // type="email"
              name="nama"
              placeholder="johndoe"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              value={form.nama}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              value={form.email}
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Typography
              className="mb-2 block font-medium text-gray-900"
              variant="h6"
            >
              Jurusan
            </Typography>
            <Select
              label="Pilih Jurusan"
              value={form.jurusan}
              // onChange={(e) => handleSelect(e)}
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
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              label="Password"
              name="password"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              value={form.password}
              onChange={handleChange}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>

          <div className="mb-6">
            <label htmlFor="kelurahan">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Kelurahan
              </Typography>
            </label>
            <Select
              label="Pilih kelurahan"
              // value={editForm.kelurahanID.toString()}
              // onChange={(e) => handleEditSelect(e, "kelurahanID")}
              value={kelurahan.id}
              onChange={(e) => handleSelect(Number(e), "kelurahanID")}
            >
              {kelurahan.map((item) => (
                <Option key={item.id} value={item.id.toString()}>
                  {item.namaKelurahan}
                </Option>
              ))}
            </Select>
          </div>
          {isError && (
            <Typography variant="h6" color="red" className="">
              {isError}
            </Typography>
          )}
          <Button
            loading={isLoading}
            onClick={() => Register()}
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            register
          </Button>
          {/* <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div> */}

          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Sudah punya akun?{" "}
            <Link to="/Login" className="font-medium text-gray-900">
              Log in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}
