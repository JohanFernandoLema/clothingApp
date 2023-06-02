import { useState } from 'react'
import './Product.scss'
import { ShoppingCart, Favorite, Balance } from '@mui/icons-material'

const images = [
  'https://images.pexels.com/photos/2364575/pexels-photo-2364575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3026282/pexels-photo-3026282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
]
const Product = () => {
  const [selectImage, setSelectImage] = useState(0)
  const [count, setCount] = useState(0)
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="img1" onClick={() => setSelectImage(0)} />
          <img src={images[1]} alt="img2" onClick={() => setSelectImage(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImage]} alt="img3" />
        </div>
      </div>
      <div className="right">
        <h1>100% cotton T-shirt</h1>
        <span className="price">$49</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          inventore repellat nihil libero, quis ut? Consectetur dolore pariatur
          laborum, fugiat labore repellat consequuntur recusandae voluptates
          blanditiis! Praesentium facilis alias saepe.
        </p>
        <div className="quantity">
          <button
            onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          <span className="countNumber">{count}</span>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <ShoppingCart />
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <Favorite /> ADD TO WISH LIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
        </div>
      </div>
    </div>
  )
}
export default Product
