<template>
    <div>
        <!-- vuex、class、style、event、data、computed、methods综合实例 -->
        <div class="test-container">
            <div v-bind:style="{ color: testContainerStyle.activeColor, fontSize: testContainerStyle.fontSize + 'px' }">姓名：{{ userInfo.name }}</div>
            <div>年龄：{{ userInfo.age }}</div>
            <div>
                <button v-bind:class="{btn: testContainerCls.btnSH, 'btn-danger': testContainerCls.btnDangerSH}"  @click="ageChanage">点我改变信息</button>
            </div>
        </div>

        <!-- class -->
        <div class="mgn-10" v-bind:class="{'f-s-16': cls.fs16}">
            class与bind-class并存.
        </div>

        <div v-bind:class="cls.cls">
            class内容保存到一个字符串里.
        </div>

        <!-- style -->

        <!-- event -->

        <!-- computed -->

        <!-- methods -->
    </div>
</template>

<script>
    export default {
        // 数据.
        // data() { 等同于 data: function() {
        data() {
            return {
                /* ------ */
                testContainerCls: {
                    btnSH: true,
                    btnDangerSH: true
                },
                testContainerStyle: {
                    activeColor: 'red',
                    fontSize: 16
                },

                /* ------ */
                cls: {
                    fs16: true,
                    cls: 'mgn-10 f-s-16'
                }
            };
        },
        computed: {
            /* ------ */
            userInfo() {
                return {
                    // this.$store调用从根节点注入的store.
                    'name': this.$store.state.userInfo.name,
                    'age': this.$store.state.userInfo.age
                };
            }
        },
        // 在methods对象中定义方法
        methods: {
            /* ------ */
            ageChanage() {
                this.$store.dispatch('setUserInfo', {
                    'age': 100,
                    'name': '李四'
                });
            }
        }
    };
</script>

<style lang="less">
    .mgn-10 {margin:10px;}
    .f-s-16 {font-size: 16px;}
</style>
