import { createStore } from "solid-js/store";
import { For } from "solid-js";

export default function TodosSolid() {
  let input: string;
  const [todos, setTodos] = createStore([
    { id: 1, title: "Learn Solid", completed: false },
    { id: 2, title: "Learn Svelte", completed: false },
    { id: 3, title: "Learn Vue", completed: false },
    { id: 4, title: "Learn React", completed: false },
    { id: 5, title: "Learn Astro", completed: false },
  ]);

  const addTodo = (title: string) => {
    if (title === "") {
      return;
    }
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    );
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center gap-10 bg-sky-500 pb-4 overflow-auto max-h-1/4 min-h-1/4 border-2 border-slate-700">
      <h1 className="text-slate-200">Todo in Solid</h1>
      <For each={todos}>
        {(todo) => {
          return (
            <div className="p-2 border-2 bg-blue-400 w-1/2 rounded relative">
              <h2 className="text-center">{todo.title}</h2>
              <button
                onClick={() => deleteTodo(todo.id)}
                class="text-white-200 absolute top-0 right-2"
              >
                x
              </button>
            </div>
          );
        }}
      </For>
      <form
        class="flex flex-col gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input.value);
          input.value = "";
        }}
      >
        <label for="title" class="text-slate-700">
          Enter Title
        </label>
        <input
          id="title"
          ref={input}
          required
          placeholder="Title"
          class="rounded p-2"
        />
        <button class="border-2 rounded">Add</button>
      </form>
    </div>
  );
}
