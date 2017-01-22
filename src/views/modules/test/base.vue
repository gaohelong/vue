<template>
    <div>
        <!-- vuex、class、style、event、data、computed、methods综合实例 -->
        <div class="example-partition">
            <div v-bind:style="{color: testContainerStyle.activeColor, fontSize: testContainerStyle.fontSize + 'px'}">姓名：{{ userInfo.name }}</div>
            <div>年龄：{{ userInfo.age }}</div>
            <div>
                <button v-bind:class="{btn: testContainerCls.btnSH, 'btn-danger': testContainerCls.btnDangerSH}"  @click="ageChanage">点我改变信息</button>
            </div>
        </div>

        <!-- class -->
        <div class="example-partition">
            <div class="mgn-10" v-bind:class="{'f-s-16': cls.fs16}">
                class与bind-class并存.
            </div>

            <div v-bind:class="cls.cls">
                class内容保存到一个字符串里.
            </div>

            <div v-bind:class="cls.obj">
                class放在一个对象中.
            </div>

            <div v-bind:class="[cls.arr.btnCls, cls.arr.btnDanger]">
                把一个数组传给 v-bind:class
            </div>
        </div>

        <!-- style -->
        <div class="example-partition">
            <div v-bind:style="style.str">
               style放在一个字符串里. 
            </div>

            <div v-bind:style="{color: style.obj.color, fontSize: style.obj.fontSize + 'px'}">
               style放在一个对象中.
            </div>
        </div>
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
                    cls: 'mgn-10 f-s-16',
                    obj: {
                        btn: true,
                        'btn-danger': true
                    },
                    arr: {
                        btnCls: 'btn',
                        btnDanger: 'btn-danger'
                    }
                },

                /* ------ */
                style: {
                    str: 'font-size: 16px; color: #a3ef00;',
                    obj: {
                        color: '#ff0000',
                        fontSize: '18'
                    }
                }
            };
        },
        computed: {
            /* ------ */
            userInfo() {
                return {
                    // this.$store调用从根节点注入的store.
                    'name': this.$store.state.user.userInfo.name,
                    'age': this.$store.state.user.userInfo.age
                };
            }
        },
        // 在methods对象中定义方法
        methods: {
            /* ------ */
            ageChanage() {
                this.$store.dispatch('setUserInfo', {
                    'id': 1,
                    'age': 100,
                    'name': '李四'
                });
            }
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
