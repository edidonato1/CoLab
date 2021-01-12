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

.search {
  position: relative;
  display: flex;
  justify-content: space-between;;
  width: 100%;
  margin-top: 0;
}

#search-icon {
  position: absolute;
  left: 148px;
  padding: 10px 5px;
  z-index: 1;
}

#user-search {
  padding-left: 30px;
  width: 65%;
}

#user-search:focus {
  background: white;
  border-bottom: 2px solid #092741;
  margin-bottom: -2px;
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

#thumbnail-username-container{
  display: flex;
  align-items: center;
}

.icon {
  margin-left: 5px; 
  color: #E36562;
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
}


.media-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  cursor: default;
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

@media screen and (max-width: 600px) {

#user-filter {
    width: 95%;
    height: fit-content;
  }
.search {
  flex-direction: column;
}


#search-icon {
  left: 42px;
  top: 25px;
  padding: 10px 5px;
  z-index: 1;
}

#user-search {
  padding-left: 30px;
  width: 65%;
}

.show-users-container {
  margin-top: 20px;
  width: initial;
  margin-bottom: 100px;
}

.user-thumbnail {
  width: 100%;

}

}

`

export default UserList;