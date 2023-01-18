import styled from "styled-components";
const InputBox = styled.div`
  margin-bottom: -5px;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  height: 50%;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;

  div {
    padding-top: 20px;
    font-size: 30px;
    color: #245dbf;
    font-weight: 700;
  }
  input {
    border: 1px solid lightgray;
    width: 98%;
    height: 10%;
    font-size: 20px;
  }
  textarea {
    border: 1px solid lightgray;
    font-size: 20px;
    width: 98%;
    height: 30%;
    resize: none;
  }
  button {
    float: right;
    margin-top: 10px;
    width: 120px;
    height: 40px;
    border: 1px solid lightgray;
    background-color: #245dbf;
    color: white;
    font-size: 20px;
    :hover {
      border: 5px solid #245dbf;
      font-weight: 700;
    }
  }
`;

export default InputBox;
