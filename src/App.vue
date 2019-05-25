<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
const SmoothScroll = require("smooth-scroll");
export default {
    name: "app",
    mounted() {
        new SmoothScroll('a[href*="#"]');
    }
};
</script>
<style lang="scss">
#app {
    font-family: "Noto Sans TC", sans-serif;
    background-color: whitesmoke;
}
html {
    scroll-behavior: smooth;
}

header {
    padding: 154px 0 100px;
}

@media (min-width: 992px) {
    header {
        padding: 156px 0 100px;
    }
}

section {
    padding: 150px 0;
}

.container {
    min-height: 100vh;
    position: relative;
}
img {
    display: block;
}
</style>
