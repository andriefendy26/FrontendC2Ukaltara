const HeaderJudul = ({ title }) => {
  return (
    <div className="flex mb-5 justify-center gap-5 items-center" data-aos="zoom-in">
      <div className="flex flex-col items-end">
        <div className="lg:w-44 w-24 h-[2px]  rounded-xl bg-primary"></div>
        <div className="lg:w-24 w-12 h-[2px] mt-2  rounded-xl bg-primary"></div>
        <div className="lg:w-11 w-5 h-[2px] mt-2  rounded-xl bg-primary"></div>
      </div>
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-center">{title}</h1>
      <div>
        <div className="lg:w-44 w-24 h-[2px]  rounded-xl bg-primary"></div>
        <div className="lg:w-24 w-12 h-[2px] mt-2  rounded-xl bg-primary"></div>
        <div className="lg:w-11 w-5 h-[2px] mt-2  rounded-xl bg-primary"></div>
      </div>
    </div>
  );
};


export default HeaderJudul;