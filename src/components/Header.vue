<template>
    <div class="h-12 bg-green-100 flex items-center justify-center">
        <router-link to="/todos" class="flex w-16 h-8 items-center justify-center bg-blue-200">Todo</router-link>
        <router-link to="/posts" class="flex w-16 h-8 items-center justify-center bg-blue-200">Post</router-link>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .router-link-active {
        background-color: rgba(0, 0, 200, 200);
    }
</style>