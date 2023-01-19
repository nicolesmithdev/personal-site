<template>
    <div id="arrows" @click="scrollToContent">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToContent() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#arrows {
    bottom: $padding;
    cursor: pointer;
    height: 65px;
    left: 50%;
    margin-left: -15px;
    position: absolute;
    width: 30px;

    @include respond-to('x-small') {
        display: none;
    }

    & > div:before {
        animation: pulseArrow 3s 0s infinite both;
        border-color: #F5F5F5 transparent transparent;
        border-style: solid;
        border-width: 15px 15px 0;
        content: "\00a0";
        height: 0;
        left: 0;
        position: absolute;
        top: 25px;
        width: 0;
    }

    & > div:first-child:before {
        animation: 3s ease 0s normal both infinite running pulseArrow;
        top: 0;
    }

    & > div:last-child:before {
        animation: 3s ease 0.6s normal both infinite running pulseArrow;
        top: 50px;
    }
}

@keyframes pulseArrow {
    0% {
        opacity: 0;
        transform: translateY(-80%);
    }
    50% {
        opacity: 1;
        transform: translateY(0px);
    }
    100% {
        opacity: 0;
        transform: translateY(0px);
    }
}
</style>