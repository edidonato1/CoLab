import styled from 'styled-components';

const UserList = styled.div`


.user-thumbnail {
  display: flex;
  flex-direction: column;
  width: 300px;
  background: yellow;
  margin: 30px;
}

.user-link {
  display: flex;
  align-items: center;
}

.user-thumbnail-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;
}

.thumbnail-username {
  font-size: 18px;
}

`

export default UserList;