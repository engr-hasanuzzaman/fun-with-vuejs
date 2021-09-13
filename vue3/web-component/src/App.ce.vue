<template>
  <div>
    <TodoElement
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :status="status"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
import TodoElement from "./components/TodoElement.ce.vue";

export default {
  setup() {
    const todos = reactive([
      {
        title: "Sample todo",
        status: false,
        id: 1,
      },
    ]);

    return {
      todos,
    };
  },
  components: {
    TodoElement,
  },
};
</script>

<style>
.todo-item {
  display: flex;
  border: 1px solid blue;
  padding: 10px;
}
</style>