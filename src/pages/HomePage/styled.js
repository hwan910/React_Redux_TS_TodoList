import styled from "styled-components";

const Home = styled.div`
  background-color: #f2f0f0;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Article = styled.article`
  display: block;
  height: 75vh;
  width: 60%;
  padding: 40px 20px 40px 20px;
  background-color: white;
  overflow: auto;
`;
const Nav = styled.article`
  margin: 5px 10px 0;
  width: 40%;
`;

const NavBar = styled.div`
  padding-top: 3px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 46%;
  background-color: white;
`;

export { Home, Section, Article, Nav, NavBar };
