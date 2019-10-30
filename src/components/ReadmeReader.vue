<template>
    <div class="readme-container">
        <div v-html="htmlReadme" class="markdown-body"></div>
    </div>
</template>

<style lang="scss">
    @import '@/sass/vendor/markdown.scss';
    .readme-container {
        border: 1px solid #e1e4e8;
        border-radius: 2px;
        padding: 16px;
    }
</style>

<script>
import showdown from 'showdown';

export default {
    name: 'ReadmeReader',
    props: {
        data: {
            type: String
        },
    },
    watch: {
        data: function () {
            const converter = new showdown.Converter();
            this.htmlReadme = converter.makeHtml(this.data);
        }
    },
    data() {
        return {
            htmlReadme: ''
        }
    },
    mounted() {
        const converter = new showdown.Converter();
        this.htmlReadme = converter.makeHtml(this.data);
    }
}
</script>