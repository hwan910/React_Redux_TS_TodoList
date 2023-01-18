import { useSelector, useDispatch } from "react-redux";
import { addTodos, deleteTodos, TodosType } from "../../../todos";
import { useNavigate } from "react-router-dom";
import { Card, Botton, View, DelBotton } from "./styled";
import { useEffect, useState } from "react";
import { RootState } from "../../config/configStore";
import { Dispatch } from "redux";
import { isActiveProps } from "../../../pages/HomePage/HomePage";

const Todo = ({ isActive }: isActiveProps) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteTodos(event.currentTarget.value));
    console.log(`[${event.currentTarget.value}]가 삭제되었습니다.`);
    navigate("/");
    console.log("삭제", event);
  };

  const handleSwitchClick = (event: any) => {
    const target = todos.find(
      (element: any) => element.id === event.currentTarget.value
    );
    target.isDone === false ? (target.isDone = true) : (target.isDone = false);
    const copy: TodosType[] = [...todos];
    dispatch(addTodos(copy));
    console.log(`[${target.title}]가 (완료/취소)되었습니다!`);
  };

  return (
    <>
      {todos
        .filter((list: any) => list.isDone !== isActive)
        .map((list: any) => {
          return (
            <Card key={list.id}>
              <div>
                <Botton value={list.id} onClick={handleSwitchClick}>
                  {isActive === true ? "" : "✔️"}
                </Botton>
                <View
                  onClick={() => {
                    navigate(`/detail/${list.title}`);
                  }}
                >
                  <h4 className={isActive !== true ? "done" : ""}>
                    {list.title}
                  </h4>
                </View>
              </div>
              <DelBotton value={list.title} onClick={handleDeleteClick}>
                ❌
              </DelBotton>
            </Card>
          );
        })}
    </>
  );
};

export default Todo;
