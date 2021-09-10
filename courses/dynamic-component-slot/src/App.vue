<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="currentComponent = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="currentComponent = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="currentComponent = 'app-red'">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="currentComponent">{{currentContent}}</component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function() {
            return {
                componentText: {
                    red: "this is red app",
                    blue: "this is blue app",
                    green: "this is green app",
                },
                currentComponent: 'app-blue'
            }
        },
        computed: {
            currentContent: function() {
                return this.componentText[this.currentComponent.split('-')[1]];
            }
        }
    }
</script>

<style>
</style>
