<template>
  <div class="container">
    <TodoElement
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :status="todo.status"
      @onComplete="handleComplete(todo.id)"
    />
    <hr>
    <TodoElementForm @onNew="onNewHandler" />
  </div>
</template>

<script>
import { reactive } from "vue";
import TodoElement from "./components/TodoElement.vue";
import TodoElementForm from "./components/TodoElementForm.vue";

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

    return {
      ...state,
    };
  },
  methods: {
    handleComplete(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.status = !todo.status;
        }
      });
    },
    onNewHandler (title) {
      this.todos.push({ title, status: false, id: this.todos.length + 1 });
    }
  },
  components: {
    TodoElement,
    TodoElementForm,
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
  cursor: pointer;
}

.todo-item .checkbox {
  cursor: pointer;
}

.todo-item--complete {
  text-decoration: line-through;
}

.form-container {
  display: flex;
}

.form-container .btn {
    margin-left: 10px;
    background-color: darkslategray;
    color: #ffffff;
    padding: 5px;
    border: 1px solid greenyellow;
    border-radius: 6px;
}

.form-container .input {
    flex: 1;
    border-radius: 5px;
    height: 30px;
    font-size: 18px;
}
</style>