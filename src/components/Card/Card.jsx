import './Card.scss'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            {item.isNew && <span>New Season</span>}

            <img src={item.img} alt="" className="mainImage" />

            <img src={item.img2} alt="" className="secondImage" />
          </div>

          <h2>{item.title}</h2>
          <div className="prices">
            <h3>${item.oldPrice}</h3>

            <h3>${item.newPrice}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Card
