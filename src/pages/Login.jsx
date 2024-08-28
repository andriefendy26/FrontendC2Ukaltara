import React, { useEffect, useState } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/AuthSlice";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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
    e.preventDefault();
    dispatch(LoginUser(data));
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card color="transparent" shadow={false}>
        <div className="text-center">
          <Typography variant="h2">
            <span className="text-primary">C2U</span>Kaltara
          </Typography>
          <Typography variant="lead">Selamat datang </Typography>
          <Typography variant="lead">di sistem informasi C2UKaltara</Typography>
        </div>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg border-gray-300 border p-8 rounded-xl sm:w-96">
          <p className="text-center mb-3">
            Silahkan login untuk masuk ke aplikasi
          </p>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="lead" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }))
              }
            />
          </div>
          {isError && (
            <Typography variant="h6" color="red" className="mt-3">
              {message}
            </Typography>
          )}
          <Button
            loading={isLoading}
            onClick={(e) => handleLogin(e)}
            className="w-full mt-5"
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}
