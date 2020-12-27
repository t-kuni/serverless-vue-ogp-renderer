<template>
    <div style="width: 1200px; height: 630px; background-image: url('./background.png');">
        <div class="main-text">
            <span>{{text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        mounted   : () => {
        },
        watch: {
            '$body'(body) {
                this.text = body.text;
            },
        },
        props     : {
        },
        data      : function () {
            return {
                text: '',
            }
        },
        computed  : {
        },
        methods   : {
        }
    }
</script>

<style lang="scss" scoped>
    .main-text {
        display: flex;
        width: 100%;
        height: 100%;
        justify-items: center;
        justify-content: center;

        span {
            font-family: 'Roboto', sans-serif;
            display: inline-block;
            color: #202020;
            font-size: 60px;
            font-weight: bold;
            width: 950px;
            margin: auto;
            text-align: center;
            text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

            &.short {
                font-size: 80px;
            }
        }
    }
</style>