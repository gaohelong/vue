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
  </div>
</template>

<script>
</script>

<style> 
</style>
