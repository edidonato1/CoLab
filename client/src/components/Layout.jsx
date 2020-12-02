import LayoutStyled from '../stylesheets/Layout';
import Header from './Header';

export default function Layout(props) {
  
  return (
    <LayoutStyled>
      <Header />
      <div className="main">

      {props.children}
      </div>
    </LayoutStyled>
  )
}