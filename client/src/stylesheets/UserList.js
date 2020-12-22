import styled from 'styled-components';

const UserList = styled.div`
width: 100%;
display: flex;
flex-direction: column;

.search-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding-bottom: ${({mediaFilter}) => (mediaFilter.length ? "0px" : "55px")}
}

.show-users-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
  margin: 0 auto;
  margin-top: 50px;
  background: white;
}

.user-thumbnail {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
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

.media-filters {
  display: flex;
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

select:focus {
  outline: none;
}

.filter-list {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid gray;
  margin: 10px;
}

.remove-filter {
  margin-left: 5px;
  cursor: default;
}

#username {
  /* width: 100%; */
}

#user-filter {
  width: 500px;
  height: 100px;
  padding: 20px;
}

#user-media-filter {
  width: 70%;
}

ul {
  padding-left: 0;
}

.matches-title {
  margin-bottom: 0px;

}

`

export default UserList;