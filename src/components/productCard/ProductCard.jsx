import "./productCard.css";
import { Room } from "../../assets/index";

const ProductCard = () => {
  return (
    <div className="product__card">
      <div className="product__card-container">
        <img src={Room} alt="" />
        <div className="productInfo">
          <div>
            <h4>SALE UP TO 35% OFF</h4>
            <h2>
              HUNDREDS of <br /> New lower prices!
            </h2>
            <p>
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <a href="/">Shop Now-</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
