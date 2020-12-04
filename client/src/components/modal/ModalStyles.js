import styled from 'styled-components'

const Styled = styled.div`
  .modal-parent {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: white;
    background-color: rgba(240, 240, 240, .8);
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
    background: #F9EAE7;
    max-width: 350px;
    padding: 20px;
    box-shadow: 2px 2px 2px 2px #61485380;
    height: 300px;
    z-index: 2;
  }

  .confirm-button {
    position: relative;
    text-align: center;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 20px;
    padding: 5px;
    width: fit-content;
    background: #092741;
    color: #E36562;
    font-weight: 600;
    border: 2px outset #614753;
    border-radius: 10px;
  }

  .confirm-button:focus {
    outline: none;
  }

  h4 {
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    color: #092741;
  }

  .confirm {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }

  #confirm-delete {
    background: white;
  }

  #confirm-delete:hover {
    background: #09274160;
    color: #092741;
    text-shadow: 1px 1px #E36562;
  }

  `

  export default  Styled