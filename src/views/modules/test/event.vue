<template>
    <div>
        <!-- click -->
        <div class="example-partition">
            <div v-bind:class="btnCls" v-on:click="noParamsClick">
                无参数click
            </div>
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
                }
            };
        },
        computed: {
            /* click */
        },
        methods: {
            /* click */
            noParamsClick() {
                console.log('无参数click，你点了我');
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
