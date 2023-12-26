import './navbar.css'
import Bag from '../../assets/bag.svg'
import Fav from '../../assets/fav.svg'
import Profile from '../../assets/profile.svg'
import Search from '../../assets/search.svg'
const Navbar = () => {
  return (
    <nav>
        <div className="nav__container container">
            <div className="logo">
                <a href="/">3legant</a>
                {/* <h4>3legant</h4> */}
            </div>

            <ul className='navLinks'>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Product</a>
                <a href="/">Contact us</a>
            </ul>

            <ul className="navBtn">
                <a href="/"><img src={Search} alt="" /></a>
                <a href="/"><img src={Profile} alt="" /></a>
                <a href="/"><img src={Bag} alt="" /></a>
                <a href="/"><img src={Fav} alt="" /></a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar