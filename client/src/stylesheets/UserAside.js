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

li:hover {
  color: #E36562;
}

h1 {
  font-size: 25px;
  color: #E36562;
}

h1:hover {
  color: #092741;
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

select:hover {
  background: rgba(97, 72, 83, .7);
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

@media screen and (max-width: 600px) {
  position: initial;
  width: 100%;
  background: #F1F0F0;;
  
  .profile-title {
    background: white;
  }
  
  .user-media {
    background:#F9EAE7;
    margin-top: 15px;
  }

  h1 {
    margin: 0;
  }

  h4 {
    background: none;
  }

  ul {
    background: white;
    width: 50%;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

}

`

export default UserAside;