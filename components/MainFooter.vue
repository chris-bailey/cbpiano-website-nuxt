<template>
    <footer>
        <hr />
        <div id="footerLeft">
            <p>Copyright &copy; {{ currentYear }} Chris Bailey Productions</p>
        </div>
        <div id="footerRight">
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink> &nbsp; | &nbsp;
            <NuxtLink to="/sitemap">Sitemap</NuxtLink>
        </div>
    </footer>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MainFooter',
    setup() {
        const currentYear = ref(new Date().getFullYear());
        return { currentYear };
    }
}
</script>

<style scoped lang="scss">
footer {
    text-align: center;
    font-size: 90%;
    font-family: sans-serif;
    margin-bottom: 10px;
    margin-top: 6px;

    hr {
        margin: 0;
    }
}

#footerLeft {
    float: left;
    margin: 0 0 0 99px;
}

#footerRight {
    float: right;
    margin: 12px 100px 0 0;
}
</style>
  