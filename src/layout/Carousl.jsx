import { Button, Carousel } from "flowbite-react";
import gambar1 from "../assests/1.jpg";
import gambar2 from "../assests/2.jpg";

const CarouselCom = () => {
  return (
    <div className="h-80">
      <Carousel>
        <div
          className="h-full w-full bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${gambar1})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Content */}
          <div className="relative z-10 p-6 flex flex-col justify-center  items-start h-full">
            <h1 className="font-bold text-xl mb-2">Kegiatan Bersih Pantai</h1>
            <p className="text-sm my-2">
              Kegiatan pembersihan pantai merupakan upaya penting untuk menjaga
              kebersihan dan kelestarian lingkungan pesisir kita. Dengan
              partisipasi aktif dari masyarakat, kita dapat mengurangi dampak
              sampah plastik dan limbah lainnya yang mencemari pantai, sehingga
              ekosistem laut tetap sehat dan berfungsi dengan baik.{" "}
            </p>
            <button className="bg-primary rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100">
              Selengkapnya
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCom;
