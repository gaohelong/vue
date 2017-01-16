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

<style>
  @import '../../../assets/css/global/bootstrap.min.css';
  @import '../../../assets/css/global/main.css';
  @import '../../../assets/css/modules/login/login.css';
</style>
