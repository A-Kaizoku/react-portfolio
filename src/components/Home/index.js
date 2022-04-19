import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br /> I'm
          <img src={LogoTitle} alt="dev" />
          lobodan
          <br />
          Web Developer
        </h1>
        <h2>FrontEnd Developer/ JavaScript Learner/ YouTuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
