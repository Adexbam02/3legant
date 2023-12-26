import "./navbar2.css";
import Ticket from "../../assets/ticket.svg";
import Arrow from "../../assets/arrow.svg";

const Navbar2 = () => {
  return (
    <div className="nav2">
      <div className="nav2__container">
        <img src={Ticket} alt="" />
        <h4>30% off storewide — Limited time!</h4>
        <span>
          <a href="/">
            <h4> Shop now</h4>
            <img src={Arrow} alt="arrow" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar2;
