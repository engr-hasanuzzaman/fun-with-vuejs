<template>
    <div>
        <input type="text" name="title" id="" v-model="title">
        <button @click="$emit('onNew', $event.target.value)">Add New</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'TodoForm',
    setup() {
        const title = ref('');
        
        return {
            title
        }        
    },
}
</script>