<template>
    <div class="container">
        <Header />
        <h1 class="text-xl text-center my-2 font-bold">List of fetch posts</h1>
        <ul>
            <li v-for="post in allTodos" :key="post.id" class="border-2 border-purple-100 m-2 display flex"> 
                <p class="p-4">{{post.title}}</p>
                <button @click="handleDeletePost(post.id)" class="text-red-500">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>

import Header from '../Header';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "PostsPage",
    data() {
        return { }
    },
    methods: {
        ...mapActions(['fetchTodos', 'deletePost']),
        handleDeletePost(id) {
            this.deletePost(id);
        }
    },
    created: async function () {
        if (this.$store.state.Todos.todos.length == 0){
            this.fetchTodos ();
        }
    },
    components: {
        Header
    },
    computed: {
        ...mapGetters(['allTodos']),
    },
}
</script>