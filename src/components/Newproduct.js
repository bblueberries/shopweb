import "./Newproduct.css";
import LeftNP from "./LeftNP";
import RightNP from "./RightNP";
function Newproduct() {
  return (
    <div id="new-product">
      <div className="container">
        <LeftNP />
        <RightNP />
      </div>
    </div>
  );
}
export default Newproduct;
