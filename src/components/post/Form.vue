<template>
    <div class="m-20">
        <form @submit.prevent="handleSubmit">
        <div class="flex flex-col mb-4">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="title">Title</label>
            <input class="border py-2 px-3 text-grey-darkest" type="text" name="title" id="title" v-model="post.title" required>
        </div>
        <div class="flex flex-col mb-4">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="body">Body</label>
            <textarea class="border py-2 px-3 text-grey-darkest" type="text" name="body" id="body" rows="4" cols="12" v-model="post.body" required/>
        </div>
        <button class="block bg-blue-200 hover:bg-teal-dark uppercase text-lg mx-auto p-4 rounded" type="submit">Create Post</button>
    </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'NewPost',
    data() {
        return {
            post: {
                title: '',
                body: '',
                userId: 1,
            }
        }
    },
    methods: {
        ...mapActions(['createTodo']),
        handleSubmit (e) {
            e.preventDefault();
            this.createTodo(this.post);
            this.$router.push('/posts')
        }
    }
}
</script>