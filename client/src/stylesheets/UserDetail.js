import styled from 'styled-components';

const UserDetail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 50px;

h1 {
  color: #E36562;
  padding-top: 0;
  margin: 0;
}

.title-div, .below-title{
  display: flex;
  flex-direction: column;
  align-items: center;
}



.title-div {
  background: white;
  margin: 30px 0;
  width: 100%;
  padding: 30px;
  border: 2px solid #092741;
}

h3 {
  width: 100%;
  text-align: center;
  background: #61485380;
  padding: 5px 0;
  color: #092741;
}

.below-title {
  background: #F9EAE7;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #61485380;
  width: 65vw;
  padding: 30px 0;
  min-width: 460px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-text {
  text-align: center;
  width: 400px;
  background: white;
  padding: 20px;
}

ul {
  padding-left: 0px;
}





`

export default UserDetail;