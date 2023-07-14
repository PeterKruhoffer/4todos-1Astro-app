import { createStore } from "solid-js/store";
import { For } from "solid-js";

export default function TodosSolid() {
  let input: string;
  const [todos, setTodos] = createStore([
    { id: "1", title: "Learn Solid", completed: false },
    { id: "2", title: "Learn Svelte", completed: false },
    { id: "3", title: "Learn Vue", completed: false },
    { id: "4", title: "Learn React", completed: false },
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
    <div class="overflow-auto flex flex-col items-center gap-10 pb-4 bg-sky-700/90 border-2 border-slate-700">
      <h2 class="text-slate-200 text-xl pt-2">Todo in Solid</h2>
      <div class="overflow-auto h-96 w-full flex flex-col items-center gap-7 pt-4">
        <For each={todos}>
          {(todo) => {
            return (
              <div className="p-2 border-2 bg-sky-500 border-slate-700 shadow-md w-1/2 rounded relative">
                <h2 className="text-center text-slate-200">{todo.title}</h2>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  class="text-slate-200 absolute -top-1 -right-1 bg-red-500 px-2 rounded"
                >
                  x
                </button>
              </div>
            );
          }}
        </For>
      </div>
      <form
        class="flex flex-col gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input.value);
          input.value = "";
        }}
      >
        <label for="title-solid" class="text-slate-200">
          Enter Title
        </label>
        <input
          id="title-solid"
          ref={input}
          required
          placeholder="Title"
          class="rounded p-2"
        />
        <button class="border-2 border-slate-700 rounded text-slate-200">
          Add
        </button>
      </form>
    </div>
  );
}
