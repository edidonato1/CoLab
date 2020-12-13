import styled from 'styled-components';

const HomeStyled = styled.div`
height: 100%;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
overflow-y: scroll;
margin-bottom: 60px;
background: #F1F0F0;


.home-title-container {
  background-image: url("https://cdn.shopify.com/s/files/1/1863/2463/products/MIAMI_2_345x345@2x.jpg?v=1571512336");
  background-size: cover;
  background-position: center;
  position: relative;
  height:90vh;
  width: 100vw;
}

#home-title {
  background-color: rgb(245, 245, 245, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  margin: 0;
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
}

#title-top {
  background-color: rgb(245, 245, 245, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vw;
  padding: 20px;
  width: 100vw;
}


h1 {
  font-size: 10vw; 
  margin: 0;
  
}

#home-flask {
  color: #E36562;
  padding: 0 1vw;
}

h2 {
  margin-top: 0;
  font-weight: 300;
  text-align: center;
}
h4 {
  text-align: center;
}

small {
  font-style: italic;
  font-weight: 200;
  font-size: 18px;
  color: black;
}

.home-button-container {
  position: absolute;
  bottom: 160px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  z-index: 1;
}

.home-link {
  text-decoration: none;
  color: #F1F0F0;
}

.home-about {
  display: flex;
  flex-direction: column;
  width: 580px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: justify;
  color: #092741;
  margin-bottom: 100px;
  border-right: 1px solid #E36562;
  padding: 0 40px;
  border-left: 1px solid #E36562;
}

.start {
  color: #E36562;
  font-weight: 600;
}

@media screen and (max-width: 600px) {
  #title-top {
    height: 40vw;
  }

  h1 {
  font-size: 20vw;
}

h2 {
  font-size: 28px;
}

small {
  font-size: 15px;
}

.home-about {
  width: 80vw;
}

}


`

export default HomeStyled;