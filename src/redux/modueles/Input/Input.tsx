import InputBox from "./styled";
import { addTodos } from "../../../todos";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../config/configStore";

const Input = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodos.title.length < 1 || newTodos.contents.length < 1) {
      alert("빈칸을 입력해주세요");
    } else {
      dispatch(addTodos([...state.todos, newTodos]));
      setTitle("");
      setContents("");
    }
  };
  const handleTitleChange = (event: any) => {
    setTitle(event.currentTarget.value);
  };
  const handleContentsChange = (event: any) => {
    setContents(event.currentTarget.value);
  };

  const newTodos = {
    id: uuidv4(),
    title: title,
    contents: contents,
    isDone: false,
  };

  return (
    <InputBox>
      <form onSubmit={handleSubmitClick}>
        <div>제목</div>
        <input value={title} onChange={handleTitleChange} />
        <div>내용</div>
        <textarea value={contents} onChange={handleContentsChange} />
        <button>추가하기</button>
      </form>
    </InputBox>
  );
};
export default Input;
