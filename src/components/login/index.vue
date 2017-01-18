<template>
    <div class="container-fluid">
        <div class="login-form">
            <img src="../../assets/img/login/welcome.png" class="login-welcome" >
            <div class="clearfix">
                <input type="text" id="login-username" class="username" autocomplete="off" placeholder="Username" >
            </div>
            <div class="clearfix mgn-t-6">
                <input type="password" id="login-password" class="pwd" autocomplete="off" placeholder="Password" >
            </div>
            <a class="btn-arrow" id="login-btn" href="javascript:void(0);"></a>
            <div class="error-msg" id="login-error-msg">帐号 / 密码错误</div>
        </div>
        <div class="login-bg-animation">
            <img src="../../assets/img/login/light.png" class="light" >
            <img src="../../assets/img/login/bg.jpg" class="bg" >
        </div>
        <div class="login-success">
            <img src="../../assets/img/login/success.png" >
        </div>
        <div class="example-list">
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link :class="'f-l'" to="/basicInstance">基础实例</router-link>
            <router-link :class="'f-l'" to="/event">事件</router-link>
            <router-link :class="'f-l'" to="/list">列表实例</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login'
        // mounted () {
        //     setTimeout(() => {
        //         this.$router.push({
        //             name: 'list'
        //         });
        //     }, 2000);
        // }
    };
</script>

<style lang="less">
    @import '../../assets/css/global/bootstrap.min.css';
    @import '../../assets/css/global/main.css';
    @import '../../assets/css/modules/login/login.css';
        
    .example-list {
        position: relative;
        z-index: 2;
        line-height: 40px;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }

    .example-list a {
        width: 10%;
        text-align: center;
        display: block;
        font-size: 12px;
    }
</style>
