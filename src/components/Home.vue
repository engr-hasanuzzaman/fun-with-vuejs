<template>
    <div class="w-md mx-auto flex space-x-10 mt-10 px-10">
        <div class="flex-1">
            <TodoForm @newTodoAdded="addTodo"></TodoForm>
        </div>
        <TodoList title="Pending" :todos="inCompletedTodo" @clicked="toggleStatus"></TodoList>
        <TodoList title="Completed" :todos="completedTodo" @clicked="toggleStatus"></TodoList>
    </div>
</template>

<script>
import TodoList from './TodoList';
import TodoForm from './NewTodo';

export default {
  name: 'Home',
  data() {
    return {
        todos: [
            {title: "Sleep", status: false }
            ],
        title: 'custom title',
        mainTitle: "Remaining todos",
    }
  },
  methods: {
     toggleStatus (todo) {
         todo.status = !todo.status;
     },
     addTodo(todo) {
         this.todos = [...this.todos, {...todo}];
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
      TodoList,
      TodoForm
  }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>