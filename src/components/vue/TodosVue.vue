<template>
  <div
    class="flex flex-col items-center gap-10 pb-4 bg-green-500 overflow-auto max-h-1/4 min-h-1/4 border-2 border-slate-700"
  >
    <h1 class="text-slate-200">Todo in Vue</h1>
    <div v-for="todo in todos" class="w-1/2">
      <div class="p-2 border-2 bg-green-600 rounded relative">
        <h2 class="text-center">{{ todo.title }}</h2>
        <button
          class="text-white-200 absolute top-0 right-2"
          @click="deleteTodo(todo.id)"
        >
          x
        </button>
      </div>
    </div>
    <form class="flex flex-col gap-y-2" @submit.prevent="addTodo">
      <label html-for="title" class="text-slate-700">Enter Title</label>
      <input
        id="title"
        required
        v-model="todoTitle"
        placeholder="Title"
        class="rounded p-2"
      />
      <button class="border-2 rounded">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todoTitle = ref("");

const todos = ref<Todo[]>([
  { id: 1, title: "Learn Vue", completed: false },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Learn Svelte", completed: false },
  { id: 4, title: "Learn Solid", completed: false },
  { id: 5, title: "Learn Astro", completed: false },
]);

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
function addTodo() {
  if (!todoTitle.value) {
    return;
  }
  todos.value.push({
    id: todos.value.length + 1,
    title: todoTitle.value,
    completed: false,
  });
  todoTitle.value = "";
}
</script>
