import './Cart.scss'
import { Delete } from '@mui/icons-material'
const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/16817066/pexels-photo-16817066/free-photo-of-girls-in-bright-outfits-and-sunglasses-posing-near-blue-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spring Outfit',
      isNew: true,
      desc: 'Lascseuirgf    wuiebui u fqewui vufwe fywe fuyewvf ywey fwy we',
      oldPrice: 78,
      newPrice: 59,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fall Outfit',
      oldPrice: 249,
      desc: 'Lascseuirgf    wuiebui u fqewui vufwe fywe fuyewvf ywey fwy we',
      newPrice: 150,
    },
  ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ${item.newPrice}</div>
          </div>
          <Delete className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECK OUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}
export default Cart
