<template>
    <div class="h-12 bg-green-100 flex items-center justify-center">
        <ul>
            <li>
                <router-link to="/todos">Todo</router-link>
            </li>
            <li>
                <router-link to="/posts">Post</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>