<template>
    <div class="container">
        <h1>Todos</h1>
        <ul>
            <li v-for="todo in todos" :key="todo">
               {{todo}}     
            </li>
        </ul>
        <input v-model="newTodo" placeholder="todo title">
        <p class="error">{{error}}</p>
        <button @click="addTodo">Add Todo</button>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
        todos: ['Initial todo'],
        newTodo: '',
        error: '',
    }
  },
  methods: {
      addTodo() {
          if (this.newTodo.trim().length === 0) {
              return this.error = "Title is required";
          }

          this.todos.push(this.newTodo);
          this.error = '';
          this.newTodo = '';
      }
  }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>