<template>
    <div class="test-container">
        <div>姓名：{{ userInfo.name }}</div>
        <div>年龄：{{ userInfo.age }}</div>
        <div>
            <button @click="ageChanage">点我改变信息</button>
        </div>
    </div>
</template>

<script>
    export default {
        // 数据.
        // data() { 等同于 data: function() {
        data() {
            return {
            };
        },
        computed: {
            userInfo() {
                return {
                    // this.$store调用从根节点注入的store.
                    'name': this.$store.state.userInfo.name,
                    'age': this.$store.state.userInfo.age
                };
            }
        },
        // 在 `methods` 对象中定义方法
        methods: {
            ageChanage() {
                this.$store.dispatch('setAge', {
                    'age': 100
                });

                this.$store.dispatch('setName', {
                    'name': '李四'
                });
            }
        }
    };
</script>

<style lang="less">
    .test {
        color: #fff;
    }
</style>
