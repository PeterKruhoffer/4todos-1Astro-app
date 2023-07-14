<template>
  <div
    class="overflow-auto flex flex-col items-center gap-10 pb-4 bg-green-600 border-2 border-slate-700"
  >
    <h1 class="text-slate-200 text-xl pt-2">Todo in Vue</h1>
    <div
      class="overflow-auto h-96 w-full flex flex-col items-center gap-7 pt-4"
    >
      <div v-for="todo in todos" class="w-1/2">
        <div
          class="p-2 border-2 bg-green-800 border-green-700/30 shadow-md rounded relative"
        >
          <h2 class="text-center text-slate-200">{{ todo.title }}</h2>
          <button
            class="text-slate-200 absolute -top-1 -right-1 bg-red-500 px-2 rounded"
            @click="deleteTodo(todo.id)"
          >
            x
          </button>
        </div>
      </div>
    </div>
    <form class="flex flex-col gap-y-2" @submit.prevent="addTodo">
      <label for="title-vue" class="text-slate-200">Enter Title</label>
      <input
        id="title-vue"
        required
        v-model="todoTitle"
        placeholder="Title"
        class="rounded p-2"
      />
      <button class="border-2 border-green-700/50 rounded text-green-900">
        Add
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const todoTitle = ref("");

const todos = ref<Todo[]>([
  { id: "1", title: "Learn Vue", completed: false },
  { id: "2", title: "Learn React", completed: false },
  { id: "3", title: "Learn Svelte", completed: false },
  { id: "4", title: "Learn Solid", completed: false },
  { id: "5", title: "Learn Astro", completed: false },
]);

function deleteTodo(id: string) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
function addTodo() {
  if (!todoTitle.value) {
    return;
  }
  todos.value.push({
    id: crypto.randomUUID(),
    title: todoTitle.value,
    completed: false,
  });
  todoTitle.value = "";
}
</script>
