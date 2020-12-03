import styled from 'styled-components';

const MediumStyled = styled.div`
margin-top: -18px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: 100vw;

.medium-parent {
  width: 70%;
  margin-left: 270px;
}

h1 {
  text-align: center;
  color: #E36562;
}

.name {
  margin-bottom: 0;
}

h4 {
margin-bottom: 7px;

}

.user-aside {
  width: 30%;
  margin-top: 100px;
  cursor: default;
}

.medium-title {
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  min-width: 500px;

}

img {
border-radius: 50%;
object-fit: cover;
width: 150px;
height: 150px;
}

.create-post {

  font-size: 20px;
}

.icon {
  color: #E36562;
}
`

export default MediumStyled;