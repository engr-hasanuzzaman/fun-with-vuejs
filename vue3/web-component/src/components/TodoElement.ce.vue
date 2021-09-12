<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <p>{{ this.title }}</p>
</template>