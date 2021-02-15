<template>
    <div>
        <p>The number of clicked is: {{tenTimeCounter}}</p>
        <button @click="$emit('clicked')"></button>
    </div>
</template>

<script>
export default {
    name: "Clock",
    props: {
        clickCounter: {
            type: Number,
            required: true,
        }
    }
    ,
    watch: {
        clickCounter() {

        }
    },
    computed: {
        tenTimeCounter: {
            get: () => {
                return this.clickCounter + 10;
            },
            set: (clickCounter) => {
                console.log("new counter value is ", clickCounter);
            }
            
        }
    }
}
</script>