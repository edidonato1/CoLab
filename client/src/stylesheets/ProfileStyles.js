import styled from 'styled-components';

const ProfileStyles = styled.div`
 padding-top: 20px;

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.side-bar {
position: fixed;
left: 50px;
}

h2 {
  text-align: center;
}

.dash-parent {
  margin-left: 270px;
}

// Dashboard photos

.dashboard {
  margin: 0 auto;
  background-color: #F9EAE7;
  width: fit-content;
  height: fit-content;
  padding: 20px;
}

.dash-photo-box {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  min-width: 500px;
  height: 400px;
  background: white;
  padding: 15px;
}

.photo-box-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  margin: 5px;
}

#top-left {
  width: 40%;
  height: 95%;
  object-fit: cover;
  margin: 5px;
}

#top-right {
  width: 56%;
  height: 95%;
  object-fit: cover;
  margin: 5px;
}

#bottom {
  width: 98%;
  object-fit: cover;
  height: 200px;
  margin: 5px;
}



// Edit Profile

form {
  display: flex;
  width: 66%;
  justify-content: space-evenly;
}

.edit-profile-main {
  display: flex;
  background: lightyellow;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width: 100%;
}

.edit-left{
  display: flex;
  flex-direction: column;
  background: lightgreen;
}

.edit-mid {
  display: flex;
  flex-direction: column;
}

.edit-right {
  width: 33%;
  display: flex; 
  flex-direction: column;
  align-items: center;
}

.button-box {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

button {
  height: fit-content;
}





`

export default ProfileStyles;