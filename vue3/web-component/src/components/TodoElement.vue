<template>
  <div class="todo-item">
    <p :class="status ? 'todo-item--complete' : ''">{{ title }}</p>
    <input
      type="checkbox"
      name="status"
      @click="$emit('onComplete')"
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
