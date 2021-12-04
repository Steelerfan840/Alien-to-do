// Created a component and set state to the initial defaults

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },

    {
      text: "meet friend for lunch",
      isCompleted: false,
    },

    {
      text: "build todo app",
      isCompleted: false,
    },
    {
      text: "practice Javascript",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    // mapped through todos and added a <div> to each
    <>
      <div class="app">
        {/* <div className = "todo-list"> */}
        {todos.map((todo, i) => (
          <div className="todo" key={i} id={i} onClick={removeTodo}>
            {todo.text}(-)
          </div>

          // </div>
        ))}

        <TodoForm addTodo={addTodo} />
        <div class="alien">
          <img src="alien.png" alt="" />
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
