import React from "react";
import { useParams } from "react-router-dom";
import image1 from "../assests/galeri/juata/01.jpg";
import image2 from "../assests/galeri/juata/02.jpg";
import image3 from "../assests/galeri/juata/03.jpg";
import image4 from "../assests/galeri/juata/04.jpg";
import image5 from "../assests/galeri/juata/05.jpg";

const images = [image1, image2, image3, image4, image5];

export default function GaleriDetail() {
  let { kel } = useParams();

  return (
    <div className="p-20">
      <h1 className="text-4xl mb-10">{kel}</h1>
      {/* <div
        className="lg:grid lg:grid-rows-2 xl:grid-rows-2 lg:grid-flow-col lg:gap-8"
        data-aos="fade-left"
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} />
        ))}
      </div> */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src={image}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
