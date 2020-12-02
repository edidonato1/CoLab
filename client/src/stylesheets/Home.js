import styled from 'styled-components';

 const HomeStyled = styled.div`
background: url("https://images.unsplash.com/photo-1504441221322-7525a924d341?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dW1icmVsbGFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
background-size: cover;
/* height: calc(100% - 60px); */
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
overflow: hidden;
margin-bottom: -60px;


.home-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
text-align: center;
line-height: 40px;
/* color: #F1F0F0; */
color: #092741;
padding: 20px;
/* background: #F9EAE7; */
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

button {
  padding: 5px;
  width: fit-content;
  background: #092741;
  color: #E36562;
  font-weight: 500;
  border: 2px outset #614753;
  border-radius: 1px;
}

button:hover {
background: #614753;
border-color: #092741;
}

`

export default HomeStyled;