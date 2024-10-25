import { Button, Option, Select, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
  deleteUserProfile,
  updateUserApi,
  updateUserProfile,
} from "../../services/UserService";
import { getAllKelurahan } from "../../services/KelurahanService";
import Swal from "sweetalert2";
import { FileInput } from "lucide-react";

const ProfileView = () => {
  const { user } = useSelector((state) => state.auth);
  const [kelurahan, setKelurahan] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(false);
  const [editForm, setEditForm] = React.useState({
    id: "",
    nama: "",
    email: "",
    NPM: "",
    roleID: "",
    jurusan: "",
    password: "",
    kelurahanID: "",
  });

  useEffect(() => {
    if (user) {
      setEditForm({
        id: user.id,
        nama: user.nama || "",
        email: user.email || "",
        NPM: user.npm || "",
        password: "",
        roleID: user.roleID || "",
        jurusan: user.jurusan || "",
        kelurahanID: user.tb_kelurahan?.id || "",
      });
      setProfileImage(user.url);
    }
    getKelurahan();
  }, [user]); // Update when user changes

  const [profileImage, setProfileImage] = React.useState(user?.url || "");

  const getKelurahan = async () => {
    try {
      const response = await getAllKelurahan();
      setKelurahan(response);
    } catch (error) {
      console.error("Error fetching kelurahan:", error);
    }
  };

  const handleEditChange = (e) => {
    setEditForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditSelect = (value, name) => {
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateUser = async () => {
    try {
      const responseApi = await updateUserApi(editForm);
      console.log(responseApi);
      if (responseApi.status === 200) {
        Swal.fire({
          title: "Berhasil",
          text: "Berhasil mengubah profile",
          icon: "success",
        });
      } else {
        const message = responseApi.data.response.data.msg;
        Swal.fire({
          title: "Gagal",
          text: message,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Gagal",
        text: "Harap Isi Form dengan benar",
        icon: "error",
      });
    }
  };

  // const Loadimage = (e) => {
  //   const image = e.target.files[0];
  //   console.log(image);
  //   setFile(image);
  //   setPreview(URL.createObjectURL(image));
  // };

  const updateImage = async (gambar) => {
    const formData = new FormData();
    formData.append("file", gambar);

    try {
      const responseApi = await updateUserProfile(user?.id, formData);
      console.log(responseApi);
      if (responseApi.status == 200) {
        setProfileImage(responseApi.data.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const image = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      console.log(file);
      updateImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteProfile = async () => {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Apakah kamu yakin ingin menghapus foto profil",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserProfile(user.id);
        setProfileImage("");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="w-screen h-screen overflow-scroll bg-white">
      <div className="p-5">
        <div>
          <Typography variant="h5" color="blue-gray">
            Profile
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Edit profile
          </Typography>
        </div>
        <div className="mt-5 w-full md:w-1/2">
          <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
            {profileImage == null ? (
              <span className="w-40 h-40 p-1 text-4xl text-white items-center justify-center flex bg-primary rounded-full">
                {user?.nama.split(" ")[0].charAt(0).toUpperCase()}
              </span>
            ) : (
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-1 ring-black"
                src={profileImage}
                alt={user?.nama.split(" ")[0].charAt(0).toUpperCase()}
              />
            )}
            <div className="flex flex-col space-y-5 sm:ml-8">
              {/* <input
                type="file"
                onChange={Loadimage}
                className="file-input file-input-bordered w-full max-w-xs"
              /> */}
              <Button onClick={image}>Change Picture</Button>
              <Button color="red" onClick={deleteProfile}>
                Delete Picture
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-5">
            <label htmlFor="nama">Nama</label>
            <Input
              label="Nama"
              name="nama"
              value={editForm.nama}
              onChange={handleEditChange}
            />
            <label htmlFor="email">Email</label>
            <Input
              label="Email"
              name="email"
              value={editForm.email}
              onChange={handleEditChange}
            />
            <label htmlFor="npm">NPM</label>
            <Input
              label="NPM"
              name="NPM"
              value={editForm.NPM}
              onChange={handleEditChange}
              maxLength={10}
            />
            <label htmlFor="jurusan">Jurusan</label>
            <Select
              label="Pilih Jurusan"
              name="jurusan"
              value={editForm.jurusan}
              onChange={(value) => handleEditSelect(value, "jurusan")}
              disabled
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
            <label htmlFor="nama" className="flex gap-2">
              Password
              <p className="font-bold">
                (Kosongkan jika tidak ingin mengubahnya)
              </p>
            </label>
            <Input
              label="Password"
              name="password"
              value={editForm.password}
              onChange={handleEditChange}
            />

            {/* <label htmlFor="kelurahan">Kelurahan</label>
            <Select
            label="Pilih Kelurahan"
              name="kelurahanID"
              value={editForm.kelurahanID || ""}
              onChange={(value) => handleEditSelect(value, "kelurahanID")}
            >
              {kelurahan.map((item) => (
                <Option key={item.id} value={item.id.toString()}>
                  {item.namaKelurahan}
                </Option>
              ))}
            </Select> */}

            <Button onClick={updateUser}>Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
