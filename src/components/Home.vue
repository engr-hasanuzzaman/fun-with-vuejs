<template>
    <div class="container">
        <h1 :title="title" v-text="mainTitle"></h1>
        <ul>
            <Todo v-for="(todo, index) in inCompletedTodo" :title="todo.title" :status="todo.status" :key="todo.title+index" @clicked="toggleStatus(todo)"/>
        </ul>
        
        <input v-model="newTodo.title" placeholder="todo title" @input="handleChange">
        <p class="error">{{error}}</p>
        <button @click="addTodo" :disabled="isDisable">Add Todo</button>

        <div class="completed-todo">
            <h1>All the completed todos are here</h1>
            <ul>
                <Todo v-for="todo in completedTodo" :title="todo.title" :status="todo.status" :key="todo.title" @clicked="toggleStatus(todo)" />
            </ul>
        </div>
    </div>
</template>

<script>
import Todo from './Todo';

export default {
  name: 'Home',
  data() {
    return {
        todos: [
            {title: "Sleep", status: false }
            ],
        newTodo: {title: '', status: false},
        error: '',
        title: 'custom title',
        isDisable: true,
        mainTitle: "Remaining todos",
    }
  },
  methods: {
      addTodo() {
          if (this.newTodo.title.trim().length === 0) {
              return this.error = "Title is required";
          }

          this.todos = [...this.todos, {...this.newTodo}];
          this.error = '';
          this.newTodo.title = '';
          this.isDisable = true;    
      },
     handleChange() {
         if (this.newTodo.title.trim().length === 0) {
              this.error = "Title is required";
              this.isDisable = true;
              return;
          }

          this.error = "";
          this.isDisable = false;
     },
     toggleStatus (todo) {
         todo.status = !todo.status;
     }
  },
  computed: {
      completedTodo () {
          return this.todos.filter(t => t.status);
      },
      inCompletedTodo () {
          return this.todos.filter(t => !t.status);
      }
  },
  components: {
      Todo
  }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>