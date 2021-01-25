<template>
    <div class="flex flex-col space-y-5">
        <input 
            v-model="title" placeholder="todo title"
             @input="handleChange" 
             class="rounded boder-2 border-blue-200 h-10"
        >
        <p class="text-red-500">{{error}}</p>
        <button 
            @click="addTodo" 
            :disabled="isDisable" 
            class="text-white font-bold py-2 px-4 rounded"
            v-bind:class="[{'bg-gray-500 hover:bg-gray-500': isDisable}, {'bg-blue-500 hover:bg-blue-600': !isDisable}]"
        >
            Add Todo
        </button>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data() {
        return {
            title: '',
            status: false,
            error: '',
            isDisable: false,
        }
    },
    methods: {
        handleChange() {
         if (this.title.trim().length === 0) {
              this.error = "Title is required";
              this.isDisable = true;
              return;
          }

          this.error = "";
          this.isDisable = false;
     },
     addTodo() {
          if (this.title.trim().length === 0) {
              return this.error = "Title is required";
          }
          this.$emit("newTodoAdded", {title: this.title, status: false});
          this.error = '';
          this.title = '';
          this.isDisable = true;    
      },
    }
}
</script>