<template>
    <div class="test-container">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        // 数据.
        // data() { 等同于 data: function() {
        data() {
            return {
                'msg': '我是base'
            };
        }
    };
</script>

<style lang="less">
    .test {
        color: #fff;
    }
</style>
