import React from "react";
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
  Input,
  Option,
  Select,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Nama", "Penempatan", "Role", "Action"];

const TABLE_ROWS = [
  {
    nama: "John Michael",
    email: "andri@gmail.com",
    penempatan: "Juata Laut",
    role: "Admin",
  },
  {
    nama: "Alexa Liras",
    email: "andri@gmail.com",
    penempatan: "Lingkas Ujung",
    role: "Admin",
  },
];
const UserView = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="px-2 py-5 w-full overflow-scroll">
      <h1 className="text-2xl mb-5">User Managemen</h1>
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
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Lengkapi data di bawah untuk menambah User
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Nama
            </Typography>
            <Input label="Nama" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Kelurahan
            </Typography>
            <Select label="Pilih kelurahan">
              <Option>Lingkas Ujung</Option>
              <Option>Juata Laut</Option>
              <Option>Karang Anyar Pantai</Option>
              <Option>Selumit</Option>
              <Option>Pantai Amal</Option>
              <Option>Mamburungan Timur</Option>
              <Option>Karang Rejo</Option>
              <Option>Sebengkok</Option>
            
            </Select>
            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Password
            </Typography>
            <Input label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Tanbah
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
      {/* Batas Modal */}
      <Button size="sm" className="mb-5" onClick={handleOpen}>
        <Typography
          as="p"
          href="#"
          variant="small"
          color="white"
          className="font-semibold"
        >
          Tambah User
        </Typography>
      </Button>
      <Card className="h-full min-w-full ">
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
          <tbody>
            {TABLE_ROWS.map(({ nama, email, penempatan, role }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={nama}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={""} alt={nama.slice(2)} size="sm" />
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
                    {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama}
                    </Typography> */}
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {penempatan}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {role}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="green"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="red"
                      className="font-medium"
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default UserView;
