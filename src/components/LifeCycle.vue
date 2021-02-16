<template>
    <div>
        <p>The number of clicked is: {{tenTimeCounter}}</p>
        <button @click="$emit('clicked')"> Increment </button>
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
        clickCounter(newVal, old) {
            console.log("clickCounter is being updated", old, newVal);
            this.clickCounter = newVal;
        }
    },
    computed: {
        tenTimeCounter: {
            get: function () {
                console.log("tenTimeCounter get");
                return this.clickCounter + 10;
            },
            set: function (clickCounter) {
                console.log("tenTimeCounter set", clickCounter);
            }
            
        }
    }
}
</script>