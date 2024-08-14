const Chart = ({ children }) => {
  return (
    <div className="border flex flex-col w-full items-center justify-center border-black lg:w-1/2">
      <h1 className="text-white bg-primary w-full text-center">
        Total Sampah Keluarahan
      </h1>
      <div className="flex flex-wrap items-center justify-center p-2 w-full gap-2">
        {children}
      </div>
    </div>
  );
};

export default Chart;
