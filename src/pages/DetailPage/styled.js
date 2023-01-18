import styled from "styled-components";

const Detail = styled.div`
  margin-top: 20px;
  padding: 10px;
  height: 42%;
  background-color: white;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  overflow: auto;

  a {
    width: 100px;
    cursor: pointer;
    font-size: 20px;

    :hover {
      font-weight: 700;
    }
  }
  h4 {
    font-size: 30px;
  }
  div {
    font-size: 20px;
    height: 50%;
    padding-left: 10px;
  }
  p {
    text-align: end;
  }
`;

export { Detail };
