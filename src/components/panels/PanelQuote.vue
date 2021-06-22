<template>
    <blockquote>
        <p>Find something you're passionate about and keep tremendously interested in it.</p>
        <cite>Julia Child</cite>
    </blockquote>
</template>

<style lang="scss">
#quote {
    background: fixed url('../../assets/images/bg-quote.jpg') no-repeat center center;
    background-size: cover;
    color: $white;
    padding: $padding*4 0;
    text-align: center;

    @include respond-to('x-small') {
        background-attachment: scroll;
        padding: $padding*2 0;
    }

    blockquote {
        margin-bottom: 0;
    }
}
</style>