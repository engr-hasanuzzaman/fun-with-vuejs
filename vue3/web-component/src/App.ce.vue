<template>
  <div class="container">
    <TodoElement
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :status="todo.status"
      @onComplete="handleComplete(todo.id)"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
import TodoElement from "./components/TodoElement.vue";

export default {
  setup() {
    const initialData = [
      {
        title: "Sample todo",
        status: false,
        id: 1,
      },
      {
        title: "Sample todo complete",
        status: true,
        id: 2,
      },
    ];
    const state = reactive({
      todos: [...initialData]
    });

    // methods
    function handleComplete(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.status = !todo.status;
        }
      });
    }
    return {
      ...state,
      handleComplete
    };
  },
  components: {
    TodoElement,
  },
};
</script>

<style>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.todo-item {
  display: flex;
  border: 1px solid blue;
  padding: 10px;
  align-items: center;
  justify-content: start;
  gap: 10px;
}

.todo-item--complete {
  text-decoration: line-through;
}
</style>