<template>
    <div class="form-container">
        <input type="text" name="title" id="" v-model="title" class="input">
        <button @click="(e) => { $emit('onNew', title); title = ''}" class="btn">Add New</button>
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