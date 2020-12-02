import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import HomeStyled from '../stylesheets/Home';

export default function Home() {


  return (
    <HomeStyled>
      <div className="home-main">
        <h1>C o L <FontAwesomeIcon icon={faFlask} id="home-flask"/> b</h1>
        <h2>connecting creative-doers of every medium</h2>
        <p>[anything done with grace and passion is a work of art]</p>
        <div className="home-button-container">
        <Link to="/login" className="home-link"><button>log in</button></Link>
        <Link to="/register" className="home-link"><button>create an account</button></Link>
        </div>
      </div>
    </HomeStyled>

  )
}