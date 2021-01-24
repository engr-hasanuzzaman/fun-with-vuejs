<template>
    <div class="container">
        <h1 :title="title" v-text="mainTitle"></h1>
        <ul>
            <li v-for="(todo, index) in inCompletedTodo" :key="todo.title + index">
               {{todo.title}} <input type="checkbox" name="" id="" v-model="todo.status">     
            </li>
        </ul>
        
        <input v-model="newTodo.title" placeholder="todo title" @input="handleChange">
        <p class="error">{{error}}</p>
        <button @click="addTodo" :disabled="isDisable">Add Todo</button>

        <div class="completed-todo">
            <h1>All the completed todos are here</h1>
            <ul>
                <li v-for="todo in completedTodo" v-text="todo.title" :key="todo.title"></li>
            </ul>
        </div>
    </div>
</template>

<script>
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
     } 
  },
  computed: {
      completedTodo () {
          return this.todos.filter(t => t.status);
      },
      inCompletedTodo () {
          return this.todos.filter(t => !t.status);
      }
  }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>