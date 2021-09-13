<template>
  <div class="todo-item">
    <p>{{ title }}</p>
    <input type="checkbox" name="status" id="" :checked="status" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.todo-item {
  display: flex;
  border: 1px solid blue;
  padding: 10px;
}
</style>