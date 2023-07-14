<script lang="ts">
    let todoTitle = ""

    let todos =[
        { id: 1, title: "Learn Svelte", completed: false },
        { id: 2, title: "Learn Vue", completed: false },
        { id: 3, title: "Learn React", completed: false },
        { id: 4, title: "Learn Solid", completed: false },
        { id: 5, title: "Learn Astro", completed: false },
    ]

    function addTodo(){
        todos = [...todos, { id: todos.length + 1, title: todoTitle, completed: false }]
        todoTitle = ""
    }

    function deleteTodo(id: number){
        todos = todos.filter(todo => todo.id !== id)
    }

</script>

    <div class="flex flex-col items-center gap-10 bg-orange-500 pb-4 overflow-auto max-h-1/4 min-h-1/4 border-2 border-slate-700">
      <h1 class="text-slate-200">Todo in Svelte</h1>
      {#each todos as todo }
        <div class="p-2 border-2 bg-orange-600 w-1/2 rounded relative">
            <h2 class="text-center">{todo.title}</h2>
              <button
                class="text-white-200 absolute top-0 right-2"
                on:click={() => deleteTodo(todo.id)}
              >
                x
              </button>
        </div>
      {/each}
    <form class="flex flex-col gap-y-2" on:submit|preventDefault={addTodo}>
      <label for="title" class="text-slate-700">Enter Title</label>
      <input
        id="title"
        bind:value={todoTitle}
        required
        placeholder="Title"
        class="rounded p-2"
      />
      <button class="border-2 rounded">Add</button>
    </form>
    </div>