import "./Preloader.css";

function Preloader({}) {
  return (
    <div className="circle">
      <div className="circle-preloader"></div>
      <div className="circle__loading">Loading resources...</div>
      <div className="circle__nothing">Nothing found for this zipcode.</div>
    </div>
  );
}

export default Preloader;
