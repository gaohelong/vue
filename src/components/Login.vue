<template>
  <div>
    <login></login>
  </div>
</template>

<script>
  import Login from './login/index'

  export default {
    name: 'login-container',
    components: {
      Login
    }
  }
</script>

<style>
  @import '../assets/css/global/bootstrap.min.css';
  @import '../assets/css/global/main.css';
  @import '../assets/css/modules/login/login.css';
</style>
