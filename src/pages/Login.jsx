import React, { useEffect, useState } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/AuthSlice";
import Logo from "../../public/logo.png";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const handleLogin = (e) => {

    // console.log("form", data);
    // console.log("isSuccess", isSuccess);
    // console.log("user", user);
    e.preventDefault();
    dispatch(LoginUser(data));
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
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Silahkan Masukkan Email dan password
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />
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
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }))
              }
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
            {isError && (
              <Typography variant="h6" color="red" className="mt-3">
                {message}
              </Typography>
            )}
          </div>
          <Button
            onClick={(e) => handleLogin(e)}
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            log in
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
            Belum punya akun?{" "}
            <Link to="/register" className="font-medium text-gray-900">
              Buat akun
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}
