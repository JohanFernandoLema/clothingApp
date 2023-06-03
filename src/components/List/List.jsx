import Card from '../Card/Card'
import './List.scss'
const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/16817066/pexels-photo-16817066/free-photo-of-girls-in-bright-outfits-and-sunglasses-posing-near-blue-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spring Outfit',
      isNew: true,
      oldPrice: 78,
      newPrice: 59,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fall Outfit',
      oldPrice: 249,
      newPrice: 150,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/16817066/pexels-photo-16817066/free-photo-of-girls-in-bright-outfits-and-sunglasses-posing-near-blue-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spring Outfit',
      isNew: true,
      oldPrice: 78,
      newPrice: 59,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fall Outfit',
      oldPrice: 249,
      newPrice: 150,
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/16817066/pexels-photo-16817066/free-photo-of-girls-in-bright-outfits-and-sunglasses-posing-near-blue-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spring Outfit',
      isNew: true,
      oldPrice: 78,
      newPrice: 59,
    },
    {
      id: 6,
      img: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fall Outfit',
      oldPrice: 249,
      newPrice: 150,
    },
  ]
  return (
    <div className="list">
      {data.map((item) => {
        return <Card item={item} key={item.id} />
      })}
    </div>
  )
}
export default List
