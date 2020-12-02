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


`

export default FormStyles;