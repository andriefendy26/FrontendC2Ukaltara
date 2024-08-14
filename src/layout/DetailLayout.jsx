import CardBerita from "../components/CardBerita";

const DetailLayout = () => {
  return (
    <div className="mx-10">
      <div className="">
        <h1 className="text-2xl font-bold">Pengabdian Pesisir</h1>
        <div className="w-96 h-[1px] my-5 bg-black"></div>
        <p>
          Aute incididunt quis dolore elit sint anim eu non enim amet. Eiusmod
          deserunt commodo quis sit sint eu. Cillum aliquip aliquip magna ea
          deserunt ad duis id ea commodo nisi ullamco qui id. Esse fugiat
          laborum veniam ut cillum culpa. Nisi sit mollit fugiat nisi nostrud
          aliqua do adipisicing incididunt non dolore aute. Laborum voluptate
          nostrud sint ipsum culpa ullamco velit amet elit officia. Dolore Lorem
          ipsum eu cupidatat nostrud pariatur ad incididunt occaecat occaecat
          aute. Mollit et aute in ex ut.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold">BERITA</h1>
        <div className="w-96 h-[1px] my-5 bg-black"></div>
        <CardBerita/>
      </div>
    </div>
  );
};

export default DetailLayout;
