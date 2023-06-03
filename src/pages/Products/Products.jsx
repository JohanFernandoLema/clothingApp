import './Products.scss'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import { useState } from 'react'
const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" value={1} id="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" value={2} id="2" />
            <label htmlFor="2">Jeans</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" value={3} id="3" />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>

          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={() => setSort('asc')}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={() => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="categoryImage"
          src="https://images.hdqwalls.com/wallpapers/black-dress-girl.jpg"
          alt=""
        />

        <div>
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  )
}
export default Products
