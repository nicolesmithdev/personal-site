<template>
    <p>
        <img
            v-for="skill in skills"
            :key="skill"
            :src="require(`../../assets/images/${skill}.svg`)"
            :alt="skill"
            :title="skill"
            width="90"
            height="90"
        />
    </p>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                'html',
                'css',
                'javascript',
                'sass',
                'vue',
                'react',
                'nodejs',
                'php',
                'mysql',
                'wordpress',
            ],
        };
    },
};
</script>

<style lang="scss">
#skills {
    background-color: $light-gray;
    p {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 2rem;
        justify-content: center;
        img {
            max-height: 90px;
            max-width: 90px;
        }
    }
}
</style>
