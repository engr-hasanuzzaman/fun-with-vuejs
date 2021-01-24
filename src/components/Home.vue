<template>
    <div class="container">
        <h1 :title="title">Todos</h1>
        <ul>
            <li v-for="todo in todos" :key="todo">
               {{todo}}     
            </li>
        </ul>
        <input v-model="newTodo" placeholder="todo title" @input="handleChange">
        <p class="error">{{error}}</p>
        <button @click="addTodo" :disabled="isDisable">Add Todo</button>
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
        title: 'custom title',
        isDisable: true,
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
          this.isDisable = true;    
      },
     handleChange() {
         if (this.newTodo.trim().length === 0) {
              this.error = "Title is required";
              this.isDisable = true;
              return;
          }

          this.error = "";
          this.isDisable = false;
     } 
  }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>