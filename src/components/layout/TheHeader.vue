<template>
    <header>
        <div class="container">
            <router-link to="/" id="logo">
                <img src="../../assets/images/nicole-smith-web-dev.png" alt="Nicole Smith Web Developer" width="488" height="125"/>
            </router-link>

            <Arrows v-if="isHome" />
        </div>
    </header>
</template>

<script>
import Arrows from '../UI/Arrows.vue';

export default {
    components: {
        Arrows
    },
    computed: {
        isHome() {
            return this.$route.name === 'home';
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background: url("../../assets/images/header.jpg") no-repeat center center;
    background-size: cover;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    @include respond-to('medium') {
        background-attachment: fixed;
    }

    .home & {
        align-items: center;
        border-bottom: none;
        color: white;
        display: flex;
        height: 100vh;
        justify-content: center;
        position: relative;
        text-align: center;

        @include respond-to('x-small') {
            height: 33vh;
        }
    }
}

#logo {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    padding: 2rem 0;
    width: 293px;

    .home & {
        padding: 0;
        width: 488px;
    }
}

#logo img {
    display: block;
    filter: contrast(0) sepia(100%) hue-rotate(116deg) brightness(2) saturate(0);
    -webkit-filter: contrast(0) sepia(100%) hue-rotate(116deg) brightness(2) saturate(0);
}
</style>