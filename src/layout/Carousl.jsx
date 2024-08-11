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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et condimentum nisl. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Fusce varius, tortor ac sagittis dictum, dui
              nulla finibus nisi, sed mattis velit ante nec massa. Morbi aliquam
              dui arcu, sit amet tincidunt ante imperdiet eget. Vivamus mauris
              mi, lobortis a cursus in, cursus ut justo.
            </p>
            <button className="bg-primary rounded-lg p-2 text-sm hover:bg-primaryhover hover:text-gray-100">Selengkapnya</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCom;
