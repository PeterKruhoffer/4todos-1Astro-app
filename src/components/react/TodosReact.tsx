import { useState, useId } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodosReact() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React", completed: false },
    { id: "2", title: "Learn Solid", completed: false },
    { id: "3", title: "Learn Svelte", completed: false },
    { id: "4", title: "Learn Vue", completed: false },
    { id: "5", title: "Learn Astro", completed: false },
  ]);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="overflow-auto flex flex-col items-center gap-10 pb-4 bg-blue-600/70 border-2 border-black">
      <h2 className="text-white text-xl pt-2">Todo in React</h2>
      <div className="overflow-auto h-96 w-full flex flex-col items-center gap-7 pt-4">
        {todos.map((todo) => (
          <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id} />
        ))}
      </div>
      <form
        className="flex flex-col gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input);
          setInput("");
        }}
      >
        <label htmlFor="title-react" className="text-slate-50">
          Enter Title
        </label>
        <input
          id="title-react"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          placeholder="Title"
          className="rounded p-2"
        />
        <button className="border-2 border-slate-900 rounded text-white">
          Add
        </button>
      </form>
    </div>
  );
}

function Todo({
  todo,
  deleteTodo,
}: {
  todo: Todo;
  deleteTodo: (id: string) => void;
}) {
  return (
    <div className="p-3 bg-blue-500 w-1/2 rounded relative shadow-md">
      <h2 className="text-center text-black">{todo.title}</h2>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-slate-50 absolute -top-1 -right-1 bg-red-500 px-2 rounded"
      >
        x
      </button>
    </div>
  );
}
