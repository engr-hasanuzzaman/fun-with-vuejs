<template>
    <div class="form-container">
        <input 
            type="text" 
            name="title" 
            id="" 
            v-model="title" 
            class="input" 
            @keyup.enter="() => { createNew(title) }"
        >
        <button @click="createNew($event.target.value)" class="btn">Add New</button>
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
    methods: {
        createNew: function(title) {
            this.$emit('onNew', title); 
            this.title = '';
        }
    }
}
</script>