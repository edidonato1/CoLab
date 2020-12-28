import styled from 'styled-components';

const ColabStyles = styled.div`

.main-div{
  margin-left: 270px;
  overflow: hidden;
}

.header-container {
  width: 100%;
  display: flex;
  height: 300px;
  background: lightyellow;
  justify-content: space-evenly;
  min-width: 500px;
  z-index: 0;
}

.title-user-pics {
  display: flex; 
  flex-direction: column;
  justify-content: center;
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



`

export default ColabStyles;