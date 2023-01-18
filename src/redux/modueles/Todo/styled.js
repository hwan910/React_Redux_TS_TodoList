import styled from "styled-components";

const Card = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  margin-top: 5px;
  border-bottom: 1px solid lightgray;
  width: 95%;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #e4ebf5;
  }
  .done {
    text-decoration: line-through;
  }
  div {
    display: flex;
  }
  h4 {
    font-size: 20px;
    padding-left: 20px;
  }

  p {
    margin: 10px 0 10px 10px;
  }
`;
const Botton = styled.button`
  margin-top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid lightgray;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
`;
const DelBotton = styled.button`
  margin-top: 15px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0 solid white;
  background-color: white;
  font-size: 20px;

  cursor: pointer;
`;
const View = styled.div`
  cursor: pointer;
`;
export { Card, Botton, View, DelBotton };
