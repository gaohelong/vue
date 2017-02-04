<template>
    <div>
        <div class="example-partition">{{msg | bd_trim}}</div>
        <div class="example-partition">{{num | bd_square}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: ' 我是过滤器 ',
                num: 9
            };
        },
        computed: {
        },
        // 在methods对象中定义方法
        methods: {
        }
    };
</script>

<style lang="less">
    .example-partition {
        margin: 20px;
        border: 1px #269687 solid;
        padding: 10px;
    }
    .mgn-10 {margin:10px;}
    .f-s-16 {font-size: 16px;}
</style>
