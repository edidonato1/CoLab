import styled from 'styled-components';

const MediaStyles = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: 100vw;
/* background: red; */
.mobile-select {
  display: none;
}

.user-aside {
  width: 30%;
}

.icon {
  color: #E36562;
}

#add-request {
  position: fixed;
  left: 5px;
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
  justify-content: center;
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

@media screen and (max-width: 500px) {
  justify-content: center;

.mobile-select {
  display: flex;
  justify-content: center;
  width: 100%;
}

select {
  width: 80%;
  background: #61485380;
  height: 30px;
  border: none;

}

.mobile-select:focus {
  outline: none;
}
  
  .user-aside {
display: none;
}

#add-request {
  display: none;
}

.all-media {
}

.media-container {
  margin: 0 auto;
  min-width: initial;
  width: 100vw;
  margin-left: initial;
  margin-bottom: 60px;
}

.description {
  display: none;
}

.media-card {
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
  align-items: center;
}

h2 {
  width: 250px;
  object-fit: contain;
}

.media-card-right {
justify-content: center;
min-width: initial;
width: initial;
}

#image-container {
  width: 250px;
}


}

`

export default MediaStyles;