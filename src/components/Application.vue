<template>
    <div class="containerer">
        <Header></Header>
        <slot name="content" />
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
    name: "Application",
    components: {
        Header,
        Footer
    }
}
</script>