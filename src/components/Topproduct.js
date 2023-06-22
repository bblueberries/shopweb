import "./Topproduct.css";
import Tpcard from "./Tpcard";
function Topproduct() {
  return (
    <div id="top-product">
      <p>Top creators this month</p>
      <div id="card-container">
        <Tpcard />
        <Tpcard />
        <Tpcard />
        <Tpcard />
      </div>
    </div>
  );
}
export default Topproduct;
