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

#update-title {
  color: #E36562;
}

form {
  display: flex;
  width: 66%;
  justify-content: space-evenly;
}

.edit-profile-main {
  display: flex;
  background: #F9EAE7;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 600px;
  height: 300px;
  padding: 20px;
  box-shadow: 2px 2px 2px 2px #61485380;
}

.edit-left{
  display: flex;
  flex-direction: column;
  align-items: center;

}

.edit-mid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.edit-right {
  width: 33%;
  display: flex; 
  flex-direction: column;
  /* align-items: flex-end; */
  justify-content: space-between;
}

.button-box {
  display: flex;
  justify-content: flex-end;
  width: 100%;
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


button {
  height: fit-content;
}

* {
  color: #092741;
}

label {
display: flex;
flex-direction: column;
text-align: center;
}

input {
  /* min-width: 160px; */
  /* width: 170px; */
width: 100%;
  height: 40px;
  border: none;
}

input:focus {
  outline: none;
  background: rgba(97, 72, 83, .3);
}

textarea {
  border: none;
  resize: vertical;
  width: 100%;
  min-height: 100px;
  max-height: 220px;
  height: 100px;
  /* resize: none; */
}

.medium-list {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}

small {
  font-style: italic;
  cursor: pointer;
  font-size: 12px;
}

h5 {
  background: #61485380;
  height: 30px;
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}

@media screen and (max-width: 600px) {

.side-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: initial;
  margin: 0 auto;
}

.mobile-edit-title {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
}

form {
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.profile-pic {
  margin: 20px 0;
}

.edit-profile-main {
  flex-direction: column;
  margin: initial;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: initial;
  box-shadow: none;
  padding: 0;
}

.edit-left, .edit-right, .edit-mid {
  width: 80%;
  line-height: 30px;
}

label {
  margin-top: 5px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.edit-right {
  margin-top: 20px;
  margin-bottom: 80px;
}

ul {
  background: white;
  padding: 10px ;
}

h5 {
  background: none;
  margin-top: 20px;
}

.media-edit {
  width: 100%;
}


button {
  margin-top: 5px;
}

#update {
justify-content: flex-start;
}

}


`

export default ProfileStyles;