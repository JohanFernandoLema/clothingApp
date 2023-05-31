import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="container">
      <div className="item item-1">
        <button>
          <Link to="/product/1" className="links">
            Sale
          </Link>
        </button>
      </div>
      <div className="item item-2">
        <button>
          <Link to="/product/1" className="links">
            Women
          </Link>
        </button>
      </div>
      <div className="item item-3">
        <button>
          <Link to="/product/1" className="links">
            Men
          </Link>
        </button>
      </div>
      <div className="item item-4">
        <button>
          <Link to="/product/1" className="links">
            Kids
          </Link>
        </button>
      </div>
      <div className="item item-5">
        <button>
          <Link to="/product/1" className="links">
            Accessories
          </Link>
        </button>
      </div>
      <div className="item item-6">
        <button>
          <Link to="/product/1" className="links">
            Shoes
          </Link>
        </button>
      </div>
    </div>
  )
}
export default Categories
