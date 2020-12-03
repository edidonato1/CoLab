import styled from 'styled-components';

const MediaStyles = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: 100vw;
/* background: red; */


.user-aside {
  width: 30%;
}

.icon {
  color: #E36562;
}

#add-request {
  position: fixed;
  left: 5px;
  top: 450px;
}

.all-media {
  display: flex;
  flex-direction: row;
}

.media-container {
/* width: 75vw; */
min-width: 750px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
background: #F9EAE7;

margin-left: 260px;
}


h1 {
  color: #E36562;
  text-align: center;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09274140;
  margin: 0;
  height: 50px;
  width: 100%;
  text-decoration: none;
  color: #E36562;
}

.description {
  display: flex;
  padding: 0 14px;
  background: white;
  height: 170px;
  margin: 0;
}

#description {
  font-size: 15px;
}

.media-card {
  margin: 20px 0;
  display: flex;
  width: 100%;
  min-width: 500px;
  max-width: 800px;
  height: 250px;

}

#image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  min-width: 220px;
  height: 220px;
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
  object-fit: cover;
  width: 180px;
  height: 180px;
}

`

export default MediaStyles;