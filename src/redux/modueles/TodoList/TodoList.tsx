import { Main, MainTitle, MainContents } from "./styled";
import Todo from "../Todo";
import { RootState } from "../../config/configStore";
import { isActiveProps } from "../../../pages/HomePage/HomePage";

const TodoList = ({ isActive }: isActiveProps) => {
  return (
    <Main>
      <MainContents>
        <MainTitle>{isActive === true ? "Working" : "Done"}</MainTitle>
        <Todo isActive={isActive} />
      </MainContents>
    </Main>
  );
};
export default TodoList;
