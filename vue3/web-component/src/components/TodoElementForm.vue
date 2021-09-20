<template>
    <div>
        <input type="text" name="title" id="" v-model="title">
        <button @click="$emit('onNew', title)">Add New</button>
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