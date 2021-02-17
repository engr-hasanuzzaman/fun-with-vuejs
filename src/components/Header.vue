<template>
    <div class="h-12 bg-green-100 flex items-center justify-center">
        <router-link to="/todos" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-4">Todo</router-link>
        <router-link to="/posts" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Post</router-link>
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