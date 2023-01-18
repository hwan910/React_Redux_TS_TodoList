import Header from "../../redux/modueles/Header";
import Input from "../../redux/modueles/Input";
import TodoList from "../../redux/modueles/TodoList";
import { Home, Section, Article, Nav, NavBar } from "./styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export type isActiveProps = {
  isActive: Boolean;
};

const HomePage = () => {
  return (
    <Home>
      <Header></Header>
      <Section>
        <Article>
          <TodoList isActive={true}></TodoList>
          <TodoList isActive={false}></TodoList>
        </Article>
        <Nav>
          <Input></Input>
          <NavBar>
            <Calendar></Calendar>
          </NavBar>
        </Nav>
      </Section>
    </Home>
  );
};
export default HomePage;
