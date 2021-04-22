<template>
  <div>
    <Header />
    <div class="w-md mx-auto flex space-x-10 mt-10 px-10">
      <Modal v-if="modal">
        <h4 slot="header">New Todo</h4>
        <TodoForm @newTodoAdded="addTodo" slot="body"></TodoForm>
        <div slot="footer">
          <button @click="toggleModal">Close</button>
        </div>
      </Modal>
      <div class="flex-1">
        <button @click="toggleModal">Add new</button>
      </div>
      <TodoList
        title="Pending"
        :todos="inCompletedTodo"
        @clicked="toggleStatus"
      ></TodoList>
      <TodoList
        title="Completed"
        :todos="completedTodo"
        @clicked="toggleStatus"
      ></TodoList>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";
import TodoForm from "./NewTodo";
import Header from "./Header";
import Modal from "./Modal";

export default {
  name: "Home",
  data() {
    return {
      todos: [{ title: "Sleep", status: false }],
      title: "custom title",
      mainTitle: "Remaining todos",
      modal: false,
    };
  },
  methods: {
    toggleStatus(todo) {
      todo.status = !todo.status;
    },
    addTodo(todo) {
      this.todos = [...this.todos, { ...todo }];
    },
    toggleModal() {
      this.modal = !this.modal;
    },
  },
  computed: {
    completedTodo() {
      return this.todos.filter((t) => t.status);
    },
    inCompletedTodo() {
      return this.todos.filter((t) => !t.status);
    },
  },
  components: {
    TodoList,
    TodoForm,
    Header,
    Modal,
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>