import "./LeftNP.css";
function LeftNP() {
  return (
    <div id="l-np">
      <h1>
        Discover, collect and
        <br />
        Sell unique NFT artworks
      </h1>
      <p>
        Marketplace with over 7000 uniques NFT artworks
        <br />
        and more than 1000 independent artists
      </p>
      <div id="lb-np">
        <div className="button-container" id="btcon1">
          <button className="l-bt">Start collecting</button>
          <button className="r-bt">Create NFT</button>
        </div>
        <div id="amount-container">
          <div id="l-box" className="numbox">
            <p>
              7K+
              <br />
              <span className="num-detail">Artworks</span>
            </p>
          </div>
          <div id="m-box" className="numbox">
            <p>
              1K+
              <br />
              <span className="num-detail">Artists</span>
            </p>
          </div>
          <div id="r-box" className="numbox">
            <p>
              250K+
              <br />
              <span className="num-detail">Active users</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftNP;
