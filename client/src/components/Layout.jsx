import LayoutStyled from '../stylesheets/Layout';
import Header from './Header';

export default function Layout(props) {
  const { loggedInUser } = props
  
  return (
    <LayoutStyled>
      <Header loggedInUser={loggedInUser}/>
      <div className="main">

      {props.children}
      </div>
    </LayoutStyled>
  )
}