import "./header.css";
import Home1 from "../../assets/home1.png";
import Button from "../../assets/Button.svg";
import Button1 from "../../assets/Button1.svg";

const Header = () => {
  return (
    <header className="container">
      <section className=" hero">
        <div className="hero__img flex">
          <img src={Home1} alt="" />
          <img src={Button} alt="" className="hero-btn-left" />
          <img src={Button1} alt="" className="hero-btn-right" />
        </div>

        <div className="unique">
          <h1>Simply Unique<span>/</span> Simply Better<span>.</span></h1>
          <h5><span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </h5>
        </div>
      </section>
    </header>
  );
};

export default Header;
