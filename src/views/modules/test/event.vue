<template>
    <div>
        <!-- click -->
        <div class="example-partition">
            <div v-bind:class="btnCls" v-on:click="counter += 1">
                简单计数器：{{counter}}
            </div>

            <div v-bind:class="btnCls" v-on:click="noParamsClick">
                无参数click
            </div>

            <div v-bind:class="btnCls" v-on:click="say('hello javascript')">
                内联处理器方法
            </div>
            <div v-bind:class="btnCls" v-on:click="say('hello nodejs')">
                内联处理器方法
            </div>

            <!-- 有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方法 -->
            <div v-bind:class="btnCls" v-on:click="sDom('event', $event)">
                $event使用
            </div>

            <!-- v-on:clickSay == @clickSay -->
            <div v-bind:class="btnCls" @clickSay="say">
                自定义事件等着被调用
            </div>
        </div>

        <!-- 事件修饰符 -->
        <div class="example-partition">
            <!-- 阻止单击事件冒泡 -->
            <a v-bind:class="'block l-h-28'" v-on:click.stop="s1" href="javascript:void(0);">阻止单击事件冒泡</a>

            <!-- 提交事件不再重载页面 -->
            <form v-on:submit.prevent="onSubmit">
                <button v-bind:class="btnCls" type="submit">提交</button>
            </form>

            <!-- 修饰符可以串联 -->
            <a v-bind:class="'block l-h-28'" v-on:click.stop.prevent="s2" href="http://www.sinobbd.com">修饰符可以串联</a>

            <!-- 只有修饰符 -->
            <a v-bind:class="'block l-h-28'" v-on:click.prevent href="http://www.sinobbd.com">只有修饰符</a>

            <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
            <a v-bind:class="'block l-h-28'" v-on:click.prevent.self="say('自身')" href="http://sinobbd.com">只当事件在该元素本身（而不是子元素）触发时触发回调</a>
        </div>

        <!-- 按键修饰符 -->
        <div class="example-partition">
            <!-- vue自带的按键别名：.enter、.tab、.delete (捕获 “删除” 和 “退格” 键)、.esc、.space、.up、.down、.left、.right -->

            <!-- 只有在 keyCode 是 13 时调用绑定的方法 -->
            <input :class="'form-control'" v-on:keyup.13="keyupEnterProc">
            
            <!-- 同上，下面只是做了映射 -->
            <input :class="'form-control' "@keyup.enter="keyupEnterProc1">




            <!-- 2.1.0 新增如下修饰符开启鼠标或键盘事件监听，使在按键按下时发生响应。.ctrl、.alt、.shift、.meta.-->
            <!-- Alt + C -->
            <input :class="'form-control f-c-0'" @keyup.alt.67="warn('error')" value="Alt + C">

            <!-- Ctrl + Click -->
            <div :class="'l-h-28'" @click.ctrl="warn('kao')">Ctrl + 鼠标左键Click</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                btnCls: {
                    btn: true,
                    'btn-danger': true
                },
                counter: 0
            };
        },
        computed: {
            /* click */
        },
        methods: {
            /* click */
            noParamsClick(event) {
                console.log(event.target.tagName);
                console.log(event);
                console.log('无参数click，你点了我');
            },
            say(str) {
                console.log(str);
            },
            sDom(str, event) {
                // 现在我们可以访问原生事件对象
                if (event) {
                    event.stopPropagation(); // 阻止事件冒泡.
                    event.preventDefault(); // 阻止默认行为.
                }

                console.log(event);
                console.log(str);
            },

            /* 事件修饰符 */
            s1() {
                this.say('haha'); // 调用当前methods中的方法.
                console.log('阻止事件冒泡->阻止调用say事件');
            },
            s2() {
                console.log('.stop.prevent串联使用可阻止事件冒泡和默认行为');
            },
            onSubmit() {
                console.log('.prevent阻止默认行为->这里阻止提交按钮将表单提交');
            },

            /* 按键修饰符 */
            keyupEnterProc(event) {
                console.log(event.target.value);
            },
            keyupEnterProc1(event) {
                console.log(event.target.value);
            },
            warn(str) {
                console.log(str);
            }
        }
    };
</script>

<style lang="less">
    @import '../../../assets/css/modules/event/event.css';
</style>
