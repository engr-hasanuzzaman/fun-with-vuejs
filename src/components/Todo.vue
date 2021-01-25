<template>
    <div class="rounded border-gray-100 border-2 flex h-10 items-center pl-5" v-bind:class="containerClass">
        <span v-text="title" class="mr-5">{{title}}</span>
        <input type="checkbox" name="status" v-model="status" @click="clicked">
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: ['title', 'status', 'onChange'],
    methods: {
        clicked() {
            this.$emit('clicked');
        }
    },
    computed: {
        containerClass() {
            return this.status ? 'completed' : 'pending';
        }
    }
}
</script>

<style scoped>
    .todo-container {
        padding:  5px;
        margin-bottom: 10px;
        text-align: center;
    }
    .pending {
        border: 2px solid red;
    }
    
    .completed {
        border: 2px solid grey;
    }
</style>