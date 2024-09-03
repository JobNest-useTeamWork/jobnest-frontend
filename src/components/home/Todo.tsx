const Todo = () => {
  return (
    <>
      <div>오늘 부분</div>
      <div>
        todo list part
        <TodoListPart />
      </div>
    </>
  );
};

const TodoListPart = () => {
  return (
    <>
      <div>
        할일 부분
        <div>왼쪽 토글</div>
        <div>할일 작성하는 부분</div>
      </div>
    </>
  );
};
export default Todo;
