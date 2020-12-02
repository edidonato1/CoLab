import styled from 'styled-components';

const LayoutStyled = styled.div`
display: flex;
overflow: auto;
width: 100vw;
height: 100vh;
background: #F1F0F0;



.main {
  margin-top: 60px;
  height: calc(100% - 60px);
  width: 100%;
}

.header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: #092741;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  width: 200px;
}

.logo {
  text-decoration: none;
  color: #E36562;
  font-family: avenir;
  font-size: 30px;
  margin-left: 40px;
}

.icon {
  text-decoration: none;
  color: #E36562;
  font-family: avenir;
  font-size: 25px;
}

button {
  padding: 5px;
  width: fit-content;
  background: #092741;
  color: #E36562;
  font-weight: 600;
  border: 2px outset #614753;
  border-radius: 10px;
}

button:hover {
background: #614753;
border-color: #092741;
text-shadow: 1px 1px #092741;
}

button:focus {
  outline: none;
}
`

export default LayoutStyled;