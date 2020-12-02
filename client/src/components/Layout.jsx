import LayoutStyled from '../stylesheets/Layout';
import Header from './Header';

export default function Layout(props) {
  
  return (
    <LayoutStyled>
      <div className="main">

      <Header />
      {props.children}
      </div>
    </LayoutStyled>
  )
}