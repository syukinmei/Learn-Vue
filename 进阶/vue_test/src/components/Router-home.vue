<template>
  <div>
    <h1>这是home组件</h1>
    <!-- <router-link to="/home/information" active-class="pickOn">个人信息</router-link> &nbsp; -->
    <router-link :to="{ name: 'Information' }" active-class="pickOn">个人信息query</router-link>
    &nbsp;
    <router-link active-class="pickOn" to="/home/setting">设置params</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "vueRouter-home",
};
</script>

<style scoped>
.pickOn {
  background-color: #ccc;
}
</style>
