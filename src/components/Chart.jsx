const Chart = ({ children }) => {
  return (
    <div className="border lg:w-1/2 flex flex-col items-center justify-center border-black" >
      <h1 className="text-white bg-primary w-full text-center">
        Total Sampah Keluarahan
      </h1>
      <div className="flex items-center justify-center p-2 w-full gap-2">
        {children}
      </div>
    </div>
  );
};

export default Chart;
