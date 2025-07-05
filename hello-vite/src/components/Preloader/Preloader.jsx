import "./Preloader.css";

function Preloader({}) {
  return (
    <div className="circle">
      <div className="circle-preloader"></div>
      <div className="circle-preloader__loading">Loading resources...</div>
      {/* <div className="circle-preloader__nothing">
        Nothing found for this zipcode.
      </div> */}
    </div>
  );
}

export default Preloader;
