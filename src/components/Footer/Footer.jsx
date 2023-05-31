import './Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FolderIcon from '@mui/icons-material/Folder'
import { Link } from 'react-router-dom'
Link
function Footer() {
  return (
    <div className="footer">
      <div className="contactSection">
        <div>
          <Link to={'https://github.com/JohanFernandoLema'}>
            <GitHubIcon className="linkSocialM" />
          </Link>
          <Link
            to={'https://www.linkedin.com/in/johan-lema-farinango-a02b11220/'}
          >
            <LinkedInIcon className="linkSocialM" />
          </Link>
          <Link to={'https://www.instagram.com/johan_srfernando/'}>
            <InstagramIcon className="linkSocialM" />
          </Link>
          <Link to={'https://johanlemaportfolio.onrender.com/'}>
            <FolderIcon className="linkSocialM" />
          </Link>
        </div>
      </div>
      <h4>
        © Copyright All Rights Reserved --- Johan Fernando Lema Farinango ---
        2023
      </h4>
    </div>
  )
}
export default Footer
