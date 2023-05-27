import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import image from '../../../public/Assets/canadaMexico.jpeg'
import './Navbar.scss'
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={image} alt="canaMex" className="flagsImage" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>CAD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={'/products/1'}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/products/2'}>
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/products/3'}>
              Kids
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={'/'}>
            SpreadLess
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to={'/'}>
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/'}>
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/'}>
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/'}>
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon">
              <ShoppingBagIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
