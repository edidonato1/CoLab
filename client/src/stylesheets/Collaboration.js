import styled from 'styled-components';

const ColabStyles = styled.div`
overflow: hidden;

.main-div{
  margin-left: 270px;
  min-width: 800px;

}

.header-container {
  display: flex;
  width: 90%;
  min-width: 800px;
  height: 300px;
  background: url('https://images.unsplash.com/photo-1526302940525-8ad1365c43ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;
  justify-content: space-evenly;
  align-items: center;
  
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 0 4px 14px 0 rgba(0,0,0,.1);
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
  box-shadow: 0 20px 20px 0 rgba(240, 240, 240, .7);
}

.collaborator-image-small {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
}

.create-post {
  font-size: 22px;
}

.icon {
  margin-left: 20px;
  transition: .3s;
}

.icon:hover {
  color: #E36562;
  font-size: 24px;
}

.create-post-container {
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
max-width: 800px;
}

.colab-posts-container {
  background: #F9EAE7;
  width: 90%;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 800px;
}

.colab-post {
  background: white;
  margin: 20px 40px;
  padding: 15px;
  box-shadow: 0 4px 14px 0 rgba(0,0,0,.1);
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