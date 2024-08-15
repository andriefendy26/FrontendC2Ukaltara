const Keterangan = (props) => {
  return (
    <div className="flex items-center gap-2" data-aos="fade-up">
      <h1>{props.title}</h1>
      <span className={`w-5 h-5 block ${props.color}`}></span>
    </div>
  );
};

export default Keterangan;
