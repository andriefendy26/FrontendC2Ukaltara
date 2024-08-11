import Card from "../components/Card";

const Kegiatan = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-3xl">Kegiatan</h1>
      <span className=" block w-96 h-[1px] bg-black mt-8 mb-5"> </span>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Kegiatan;
