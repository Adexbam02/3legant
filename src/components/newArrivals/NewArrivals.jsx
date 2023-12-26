import "./newArrivals.css";
import { Stars } from "../../assets";
import { Arrival } from "../../data";

const NewArrivals = () => {
  return (
    <div className="newArrivals container">
      <div className="newArrival__container">
        <div className="newArrival-title">
          <h2>New Arrivals</h2>
          <a href="/">More products-</a>
        </div>

        <div className="newArrival-cards">
          {Arrival.map(({ id, img, name, price1, price2 }) => {
            return (
              <div className="newArrival-card relative" key={id}>
                <img src={img} alt="" />
                <div className="abs info-top">
                  <span className="info-top-content">
                    <small className="new">NEW</small>
                    <small className="off">-50%</small>
                  </span>
                </div>

                <div className="abs info">
                  <img src={Stars} alt="" />
                  <h5>{name}</h5>
                  <span className="price">
                    <small>{price1}</small>
                    <small className="strike">{price2}</small>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
