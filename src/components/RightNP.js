import "./RightNP.css";
function RightNP() {
  return (
    <div id="r-np">
      <div id="np-card">
        <div id="top-card">
          <img src="https://assets.api.uizard.io/api/cdn/stream/fab7a5fe-c38f-4679-bdec-652bce8818e3.png" />
        </div>
        <div id="bottom-card">
          <div className="text-container">
            <div className="left-text">
              <p>Current bid</p>
              <p className="text-detail">4.1 ETH</p>
            </div>
            <div className="right-text">
              <p>
                Remaining time
                {/* <br /> */}
              </p>
              <p className="text-detail">1d 11h 36m 42s</p>
            </div>
          </div>
          <div className="button-container">
            <button className="l-bt">Buy now</button>
            <button className="r-bt">View artwork</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightNP;
