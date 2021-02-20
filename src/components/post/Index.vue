<template>
    <div class="container">
        <Header />
        <h1 class="text-xl text-center my-2 font-bold">List of fetch posts</h1>
        <ul>
            <li v-for="post in allTodos" :key="post.id" class="border-2 border-purple-100 m-2"> 
                <p class="p-4">{{post.title}}</p>
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
        return {
            posts: [],
        }
    },
    methods: {
        ...mapActions(['fetchTodos']),
    },
    created: async function () {
       this.fetchTodos();
    },
    components: {
        Header
    },
    computed: {
        ...mapGetters(['allTodos']),
    },
}
</script>