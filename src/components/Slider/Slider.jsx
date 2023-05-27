import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import './Slider.scss'
function Slider() {
  const data = [
    'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2344013/pexels-photo-2344013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5838858/pexels-photo-5838858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]
  const [image, setImage] = useState([0])
  const prevSlide = () => {
    setImage(image === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setImage(image === 2 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${image * 100}vw)` }}
      >
        <img src={data[0]} alt="img1" />
        <img src={data[1]} alt="img2" />
        <img src={data[2]} alt="img3" />
      </div>
      <div className="icons">
        <div className="icon">
          <ArrowBackIcon onClick={prevSlide} />
        </div>
        <div className="icon">
          <ArrowForwardIcon onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
}
export default Slider
