<template>
  <div class="todo-item" @click="$emit('onComplete')">
    <p :class="status ? 'todo-item--complete' : ''">{{ title }}</p>
    <input
      type="checkbox"
      name="status"
      class="checkbox"
      :checked="status"
    />
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

defineEmits(["onComplete"]);
</script>
