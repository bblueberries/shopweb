import "./Cardprofile.css";
function Cardprofile() {
  return (
    <div className="card-profile">
      <div className="profile">
        <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
        <p>
          Joe September
          <p className="profile-tag">@MrRookie69</p>
        </p>
      </div>
      <div className="subscribing">
        <p>
          Collections
          <p className="sub-text">1,000,000</p>
        </p>
        <p className="middle-sub">
          Followers
          <p className="sub-text">12,990</p>
        </p>
        <button>Follow</button>
      </div>
    </div>
  );
}
export default Cardprofile;
