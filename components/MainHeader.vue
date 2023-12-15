<template>
    <header>
        <!-- Show banner image using CSS -->
    </header>

    <nav id="topMenu">
        <ul>
            <li><NuxtLink to="/" exact>Home</NuxtLink></li>
            <li><NuxtLink to="/album">Album</NuxtLink></li>
            <li><NuxtLink to="/listen">Listen</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
    </nav>

    <hr />
</template>
  
<script>
export default {
    name: 'MainHeader',
}
</script>

<style scoped lang="scss">
#topMenu .router-link-active {
  text-decoration: underline;
}

header {
    background: url("../assets/banner.jpg") no-repeat;
    display: block;
    margin: 0;
    padding: 0;
    width: 760px;
    height: 151px;
}

#topMenu {
    font-size: 120%;
    font-weight: bold;
    margin-top: 7px;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline;

        li {
            margin: 0;
            padding: 0;
            display: inline;
            text-align: center;
            list-style: none;

            a {
                color: #FFF;
                padding: 8px 52px;
                text-decoration: none;
                display: inline;

                &:hover {
                    color: #888;
                }
            }
        }
    }
}
</style>
  