import "./Preloader.css";

function Preloader({ loading, nothingFound }) {
  return (
    <div className="circle">
      <div
        className={loading ? "circle-preloader" : "circle-preloader__hidden"}
      ></div>
      <div
        className={
          loading
            ? "circle-preloader__loading"
            : "circle-preloader__loading-hidden"
        }
      >
        Loading resources...
      </div>

      <div
        className={
          nothingFound
            ? "circle-preloader__nothing"
            : "circle-preloader__nothing-hidden"
        }
      >
        Nothing found for this zipcode.
      </div>
    </div>
  );
}

export default Preloader;
