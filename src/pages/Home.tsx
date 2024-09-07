import BookmarkedList from "../components/BookmarkedList";
import Todo from "../components/home/Todo/Todo";
import TodoLayout from "../layouts/TodoLayout";

const Home = () => {
  return (
    <>
      <h1>Home Component</h1>
      <BookmarkedList />
      <Todo />
      <TodoLayout />
    </>
  );
};
export default Home;
