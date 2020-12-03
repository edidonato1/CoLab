import styled from 'styled-components';

const UserAside = styled.div`
position: fixed;
left: 0;
display: flex;
flex-direction: column;
background: #F9EAE7;
width: 250px;


li {
  list-style-type: none;
  line-height: 30px;
  color: #092741;
}

h1 {
  font-size: 25px;
  color: #E36562;
}

h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #61485380;
  height: 30px;
  color: #092741
}

select {
width: 100%;
background: #61485380;
height: 30px;
border: none;
}

select:focus {
  outline: none;
}

.profile-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.button-box {
  display: flex;
  justify-content: flex-end;
}

button {
  margin: 10px;
}



`

export default UserAside;