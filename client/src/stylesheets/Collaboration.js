import styled from 'styled-components';

const ColabStyles = styled.div`

.main-div{
  margin-left: 270px;
  min-width: 700px;
  overflow: hidden;
}

.header-container {
  display: flex;
  width: 90%;
  min-width: 700px;
  height: 300px;
  background: white;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0;
  border-radius: 5px;
}

.title-user-pics {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #E36562;
  min-width: 300px;
}

.collaborator-pics {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}

.media-images {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.collaborator-image-small {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
}

.colab-posts-container {
  background: #F9EAE7;
  width: 90%;
  padding: 20px 0;
}

.colab-post {
  background: white;
  margin: 20px 40px;
  padding: 15px;
}

.post-top {
  display: flex;
  align-items: center;

  height: 60px;
  display: flex;
  color: #614853;
  margin-left: 50px;
}

.post-user-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.username {
  margin-left: 20px;
}

.content {
  width: Calc(100% + 30px);
  margin-left: -15px;
  border-top: 13px solid #61475360;
  margin-block-start: 5px;
  padding-top: 10px;
}

.content-child {
padding: 0 15px;
}

small {
  font-style: italic;

}


`

export default ColabStyles;