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
  padding: 40px;
}

.user-thumbnail {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 10px;
  border-bottom: 1px solid lightgray;
  background: #f9f9f9;
  padding: 15px 0 0 15px;
  border-radius: 5px;

}

.user-link {
  display: flex;
  align-items: center;
  transition: .3s;
}

.user-link:hover {
  color: #E36562;
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
  transition: .4s;
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
  border: 1px solid rgba(97, 72, 83, .4);;
  margin: 10px;
  background: #F1F0F0;
}

.filter-list:hover {
  background: rgba(97, 72, 83, .4);
  border: 1px solid white;
}

.remove-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: default;
  font-weight: 600;
  font-size: 15px;
  background: #F1F0F0;
  padding: 5px;
  height: 15px;
  width: 15px;
}

.remove-filter:hover {
  color: #E36562;
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

.matches, .matches-ul {
  display: flex;
  align-items: center;
}

.matches-title {
  margin-right: 10px;
}

.matches-li {
  background: #F9EAE7;
  padding: 0px 3px;
  margin: 0px 5px;
}

`

export default UserList;