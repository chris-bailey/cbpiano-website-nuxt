<template>
    <div id="mainContentSitemap">
        <h1>Sitemap</h1>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink to="/album">Album</NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink to="/listen">Listen</NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
        </ul>
    </div>
</template>

    
<script setup>
useHead({ title: 'Sitemap | Chris Bailey Piano' });
</script>

<style scoped lang="scss">
#mainContentSitemap {
    margin-top: 11px;
    padding: 1px 26px 24px 82px;
}
</style>