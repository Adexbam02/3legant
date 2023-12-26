import "./show.css";
import { LivingRoom, Kitchen, Bedroom } from "../../assets";

const Show = () => {
  return (
    <div className="show container">
      <div className="show__container">
        <div className="living-room">
          <img src={LivingRoom} alt="living-room" className="LivingRoom" />
          <div className="show-title">
            <h4>Living Room</h4>
            <a href="/">Shop now -</a>
          </div>
        </div>
        <div className="Bed-Kit">
          <div className="relative bed-room">
            <img src={Bedroom} alt="Bedroom" className="Bedroom" />
            <div className="abs show-title sss">
              <h4>Bedroom</h4>
              <a href="/">Shop now -</a>
            </div>
          </div>
          <div className="relative">
            <img src={Kitchen} alt="Kitchen" className="Kitchen" />
            <div className="abs show-title kkk">
              <h4>Kitchen</h4>
              <a href="/">Shop now -</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
