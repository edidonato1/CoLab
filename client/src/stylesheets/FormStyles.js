import styled from 'styled-components';

const FormStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
  color: #E36562;
  text-align: center;
}

#create-title {
  color: #092741;
}

.form-main {
  background: #F9EAE7;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 35vw;
  min-width: 300px;
  max-width: 500px;
  box-shadow: 2px 2px 2px 2px #61485380;
}

input {
  min-width: 150px;
  width: 70%;
  height: 40px;
  border: none;
}

input:focus {
  outline: none;
  background: rgba(97, 72, 83, .3);
}

textarea {
  width: 70%;
  max-width: 70%;
  border: none;
  resize: vertical;
  min-height: 100px;
  max-height: 250px;
}

label {
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  color: #092741;
}

.button-box {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #E92D66;
}

// Create Collaboration Styles
.colab-create-main {
  display: flex;
}

.user-option {
  background: white;
  background: rgba(97, 72, 83, .4);
  border: 1px solid #092741;
  margin: 10px 0;
  padding: 2px 5px;
  text-align: center;
  cursor: pointer;
  width: 90%;
}

.colab-preview {
  background: lightgreen;
  width: 500px;
  height: 300px;
}

.media-filters {
  display: flex;
}

.filter-list {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid rgba(97, 72, 83, .4);;
  margin: 10px;
  background: #F1F0F0;
  width: fit-content;
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



@media screen and (max-width: 600px) {
  .form-main {
    box-shadow: none;
  }

  .go-back {
    position: absolute;
    left: 10px;
}

}


`

export default FormStyles;