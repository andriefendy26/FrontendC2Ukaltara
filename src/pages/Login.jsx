import React from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Login() {
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
            />
          </div>

          <button className="bg-primary w-full rounded-lg p-2 px-5 mt-5 text-white text-lg hover:bg-primaryhover hover:text-gray-100">
            Login
          </button>
        </form>
      </Card>
    </div>
  );
}
