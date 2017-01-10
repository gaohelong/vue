<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="/news" target="_self">新闻</a></li>
      <li><a href="/img" target="_self">图片</a></li>
      <li><a href="/report" target="_self">报表</a></li>
      <li><a href="/domain" target="_self">域名</a></li>
      <br>
      <li><a href="javascript:void(0);" target="_self">bigdata</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
