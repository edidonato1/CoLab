import styled from 'styled-components';

const HomeStyled = styled.div`
background: url("https://images.unsplash.com/photo-1504441221322-7525a924d341?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dW1icmVsbGFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
background-size: cover;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
margin-bottom: -60px;


.home-main {
  display: flex;
  flex-direction: column;
  align-items: center;
text-align: center;
line-height: 40px;
color: #092741;
padding: 20px;
background: rgba(249, 234, 231, .5);
border: 4px solid rgba(249, 234, 231, .3);

}

h1 {
  font-family: avenir;
  font-weight: 400;
  font-size: 60px;
}

#home-flask {
  color: #E36562;
}
h2 {
  margin-top: 0;
  font-weight: 300;
}

p {
  font-style: italic;
  font-weight: 200;
  color: #F1F0F0;
}

.home-button-container {
  display: flex;
  justify-content: space-between;
  width: 200px;
}

.home-link {
  text-decoration: none;
  color: #F1F0F0;
}

`

export default HomeStyled;