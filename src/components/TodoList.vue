<template>
    <div class="flex-1">
        <h1 v-text="title" class="mb-10"></h1>
        <div class="flex flex-col space-y-5 py-5">
            <Todo v-for="todo in todos" :title="todo.title" :status="todo.status" :key="todo.title" @clicked="handleToggleStatus(todo)" />
        </div>
    </div>
</template>

<script>
import Todo from './Todo';
export default {
    name: 'TodoList',
    props: ['title', 'todos', 'toggleStatus'],
    components: {
        Todo
    },
    methods: {
        handleToggleStatus(todo) {
            this.$emit('clicked', todo);
        }
    }
}
</script>