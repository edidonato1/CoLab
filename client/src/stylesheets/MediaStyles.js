import styled from 'styled-components';

const MediaStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.media-container {
width: 75vw;
min-width: 750px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
background: #F9EAE7;
}

a {
  text-decoration: none;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09274140;
  margin: 0;
  height: 60px;
  width: 100%;
  text-decoration: none;
  color: #E36562;
}

p {
  display: flex;
  padding: 20px;
  background: white;
  height: 200px;
  margin: 0;
}

.media-card {
  margin: 20px 0;
display: flex;
width: 100%;
min-width: 500px;
max-width: 800px;
height: 300px;

}

#image-container {
  display: flex;
  align-items: center;
  justify-content: center;
width: 300px;
min-width: 300px;
height: 300px;
/* background: #092741; */
background: rgba(9, 39, 65, .9);
}

.media-card-right {
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
  min-width: 420px;

}

img {
border-radius: 50%;
/* border: 2px solid rgb(249, 234, 231); */
object-fit: cover;
width: 220px;
height: 220px;
}

`

export default MediaStyles;