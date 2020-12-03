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

h6 {
  position: absolute;
  right: 10px;
  cursor: default;
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
  justify-content: flex-start;
  min-width: 500px;
}

img {
border-radius: 50%;
object-fit: cover;
width: 150px;
height: 150px;
margin-right: 40px;
}

.create-post {
  text-align: right;
  margin-right: 40px;
  font-size: 20px;
}

.icon {
  color: #E36562;
}

.no-posts {
  color: #614853;
}

.post-container {
background: #F9EAE7;
padding: 10px 20px;
min-height: 200px;
}

.post {
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  background: white;

}

.post-top {
  position: relative;
  height: 60px;
  display: flex;
  background: #09274160;
  color: #614853;
}

.user-info {
  display: flex;
  align-items: center;
  height: 60px;
  width: 200px;
  background: #092741;
  color: #F1F0F0;
  margin-right: 20px;
  padding-left: 10px;
}

#user-pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
}

#content{
  margin: 10px;
}

small {
  font-style: italic;
  color: #614853;
  padding: 2px;
}


.edit-input {
  min-width: 150px;
  width: 50%;
  border: none;
  background: none;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #614853;
}

.edit-input:focus {
  outline: none;
  background: rgba(97, 72, 83, .3);
  color: #092741;
}

#edit-textarea {
  width: 98%;
  font-size: 16px;
  border: none;
  resize: vertical;
  min-height: 100px;
  max-height: 150px;
}

#edit-textarea:focus {
  background: rgba(97, 72, 83, .3);
  outline: none;
}

#delete {
  background: #F9EAE7;
}

#delete:hover {
  background: #09274160;
  color: #092741;
  text-shadow: 1px 1px #E36562;
}

.button-box {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

@media screen and (max-width: 600px) {

.user-aside {
  display: none;
}

.medium-parent {
  margin: 80px 0;
  width: initial;
  margin-left: 0;
}

.create-post {
  margin-right: 5px;
}

.medium-title {
  flex-direction: column;
  min-width: initial;
}

.title-right {
  text-align: center;
}

.post-top {
  flex-direction: column;
  height: initial;
}

.user-info {
  width: initial;
  margin-right: initial;
}

.subject {
  margin-left: 10px;
}

img {
  margin-right: 0%;
}

h6 {
/* bottom: 5px; */
margin: 0;
bottom: 0;
}

.edit-input {
  margin-left: 5px;
width: 100%;
height: 60px;
}

}

`

export default MediumStyled;