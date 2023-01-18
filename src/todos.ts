import { v4 as uuidv4 } from "uuid";

// 액션 value를 상수로 만들어 준다. 보통 한곳에 모여있다.
const ADD_TODOS = "ADD_TODOS";
const DELETE_TODOS = "DELETE_TODOS";
const SWITCH_TODOS = "SWITCH_TODOS";

export interface TodosType {
  todos: {
    id: string;
    title: string;
    content: string;
    isDone: boolean;
  };
}
// Action Creator
export const addTodos = (payload: TodosType[]) => {
  return {
    type: ADD_TODOS,
    payload,
  };
};
export const deleteTodos = (payload: string) => {
  return {
    type: DELETE_TODOS,
    payload,
  };
};
export const switchTodos = (payload: TodosType) => {
  return {
    type: SWITCH_TODOS,
    payload,
  };
};

// 초기 상태값
const initialState = [
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    contents: "리액트 기초를 공부합니다.",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "리액트 복습하기",
    contents: "리액트를 복습 합니다.",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "리액트 예습하기",
    contents: "리액트를 예습 합니다.",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODOS:
      return action.payload;
    case DELETE_TODOS:
      return state.filter((element) => element.title !== action.payload);
    case SWITCH_TODOS:
      return action.payload;

    default:
      return state;
  }
};

export default todos;
