import "./Tpcard.css";
import Cardprofile from "./Cardprofile";
function Tpcard() {
  return (
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
      <div className="middle-card">
        <Cardprofile />
      </div>
      <div className="bottom-card">
        <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
      </div>
    </div>
  );
}
export default Tpcard;
