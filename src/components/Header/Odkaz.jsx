const Odkaz = ({ nazev, odkaz, border }) => {
    return (
      <a href={odkaz} className="cursor-pointer hover:text-main transition">
        <div className={`flex items-center mr-6 pr-6 ${border} pt-2 pb-2`}>
          {nazev}
        </div>
      </a>
    );
  };
  export default Odkaz