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

`

export default MediumStyled;