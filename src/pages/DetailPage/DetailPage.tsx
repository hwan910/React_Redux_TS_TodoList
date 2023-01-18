import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Detail } from "./styled.js";
import Header from "../../redux/modueles/Header";
import Input from "../../redux/modueles/Input";
import TodoList from "../../redux/modueles/TodoList";
import { Home, Section, Article, Nav } from "../HomePage/styled";
import { RootState } from "../../redux/config/configStore.js";
const DetailPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);
  const list = todos.find((list: any) => list.title === param.title);
  console.log(list);
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
          <Detail>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              닫기
            </a>
            <h4>{list?.title}</h4>
            <div>{list?.contents}</div>
            <p>Id: {list?.id.slice(0, 8)}</p>
          </Detail>
        </Nav>
      </Section>
    </Home>
  );
};
export default DetailPage;
