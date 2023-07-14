import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosReact() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Solid", completed: false },
    { id: 3, title: "Learn Svelte", completed: false },
    { id: 4, title: "Learn Vue", completed: false },
    { id: 5, title: "Learn Astro", completed: false },
  ]);

  const addTodo = (title: string) => {
    if (title === "") {
      return;
    }
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center gap-10 bg-blue-500 overflow-auto max-h-1/4 min-h-1/4 border-2 border-slate-700">
      <h1 className="text-slate-200">Todo in React</h1>
      {todos.map((todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id} />
      ))}
      <form
        className="flex flex-col gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input);
          setInput("");
        }}
      >
        <label html-for="title" className="text-slate-700">
          Enter Title
        </label>
        <input
          id="title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          placeholder="Title"
          className="rounded p-2"
        />
        <button className="border-2 rounded">Add</button>
      </form>
    </div>
  );
}

function Todo({
  todo,
  deleteTodo,
}: {
  todo: Todo;
  deleteTodo: (id: number) => void;
}) {
  return (
    <div className="p-2 border-2 bg-blue-600 w-1/2 rounded relative">
      <h2 className="text-center">{todo.title}</h2>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-white-200 absolute top-0 right-2"
      >
        x
      </button>
    </div>
  );
}
