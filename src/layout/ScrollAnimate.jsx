import React from "react";
import { ContainerScroll } from "../components/container-scroll-animation";
// import Image from "next/image";
import CarouselCom from "./Carousl";
import assestubt from "../assests/assestubt.png"
import Logo from "../../public/logo.png"

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pt-20 p-10">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl flex flex-col items-center font-semibold text-black text-center dark:text-white">
              <img src={assestubt}></img>
              Selamat datang di aplikasi <br />

              <img className="w-[40%] my-5" src={Logo}></img>
              {/* <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                <span className="text-primary">C2U</span>
                Kaltara
              </span> */}
              {/* <img src={Logo} className="w-[50%]"></img> */}
            </h1>
          </>
        }
      >
        <CarouselCom></CarouselCom>
      </ContainerScroll>
    </div>
  );
}
