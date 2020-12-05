import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import HomeStyled from '../stylesheets/Home';

export default function Home() {


  return (
    <HomeStyled>
      <div className="home-main">
        <div className="home-title-container">
          <div id="home-title">
            <div id="title-top">
              <h1 >C o L  <FontAwesomeIcon icon={faFlask} id="home-flask" />  b</h1>
              <h2>connecting creative-doers of every medium</h2>
            </div>
            <small>[anything done with grace and passion is a work of art]</small>

          </div>
          {/* <div className="home-button-container">
            <Link to="/login" className="home-link"><button>log in</button></Link>
            <Link to="/register" className="home-link"><button>create an account</button></Link>
          </div> */}
        </div>

        <div className="home-about">
          <h2>About CoLab</h2>
          <h4>CoLab was born from the belief that the best art comes from collaboration.  </h4>
          <p>While there are many platforms out there for artists to build communities within their medium, we
            wanted to create a place where artists of any medium can collaborate beyond their niche. </p>
          <p>Giving new meaning to the idea of mixed-media, CoLab is here to provide the opportunity for
          unimaginable fusions of art forms. Each medium has its own messageboard where artists can propose new collaborations,
            offer their services, or search for someone within that medium to join in on a project.</p>
          <p>It's known that the most creative people have introverted tendencies, which makes it difficult for
            many of us to put ourselves out there. </p>
          <p>At CoLab, we want to form a culture of inclusion and appreciation, so the most creative 
          people in the world can find each other.
          </p>
          <p>Interested? <Link className="start" to="/register">Let's get started.</Link></p>

        </div>

        

        {/* <h2>connecting creative-doers of every medium</h2>
        <p>[anything done with grace and passion is a work of art]</p>
        <div className="home-button-container">
          <Link to="/login" className="home-link"><button>log in</button></Link>
          <Link to="/register" className="home-link"><button>create an account</button></Link>
        </div> */}
      </div>
    </HomeStyled>

  )
}