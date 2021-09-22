<template>
    <div>
        <input type="text" name="title" id="" v-model="title">
        <button @click="(e) => { $emit('onNew', title); title = ''}">Add New</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'TodoElementForm',
    setup() {
        const title = ref('');
        
        return {
            title
        }        
    },
}
</script>