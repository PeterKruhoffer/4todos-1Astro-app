<script lang="ts">
    let todoTitle = ""

    let todos =[
        { id: "1", title: "Learn Svelte", completed: false },
        { id: "2", title: "Learn Vue", completed: false },
        { id: "3", title: "Learn React", completed: false },
        { id: "4", title: "Learn Solid", completed: false },
        { id: "5", title: "Learn Astro", completed: false },
    ]

    function addTodo(){
        todos = [...todos, { id: crypto.randomUUID(), title: todoTitle, completed: false }]
        todoTitle = ""
    }

    function deleteTodo(id: string){
        todos = todos.filter(todo => todo.id !== id)
    }

</script>

    <div class="flex flex-col items-center gap-10 bg-slate-100 pb-4 border-2 border-slate-700">
      <h1 class="text-orange-500 text-xl pt-2">Todo in Svelte</h1>
      <div class="overflow-auto h-96 w-full flex flex-col items-center gap-7 pt-4">
      {#each todos as todo }
        <div class="p-2 border-2 bg-orange-500 border-orange-700/30 shadow-md w-1/2 rounded relative">
            <h2 class="text-center text-slate-200">{todo.title}</h2>
              <button
                class="text-slate-200 absolute -top-1 -right-1 bg-red-500 px-2 rounded"
                on:click={() => deleteTodo(todo.id)}
              >
                x
              </button>
        </div>
      {/each}
    </div>
    <form class="flex flex-col gap-y-2" on:submit|preventDefault={addTodo}>
      <label for="title-svelte" class="text-orange-500">Enter Title</label>
      <input
        id="title-svelte"
        bind:value={todoTitle}
        required
        placeholder="Title"
        class="rounded p-2 border-2"
      />
      <button class="border-2 rounded border-orange-700/30 text-orange-500">Add</button>
    </form>
    </div>