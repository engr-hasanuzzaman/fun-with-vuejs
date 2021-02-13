<template>
    <div class="containerer">
        <slot name="header" />
        <slot name="content" />
        <slot name="footer" />
    </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
    name: "Application",
    template: {
        Header,
        Footer
    }
}
</script>