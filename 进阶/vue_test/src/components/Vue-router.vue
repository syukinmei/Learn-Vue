<template>
  <div>
    <h1>Vue Router Demo</h1>
    <div>
      <div>
        <!-- <a href="javascript:void(0);">home</a>
        <br />
        <a href="javascript:void(0);">about</a> -->

        <!-- <a href="./about.html">about</a> -->

        <!-- vue中借助router-link标签实现路由的切换 -->
        <router-link active-class="pickOn" to="/home">home</router-link> &nbsp;
        <router-link active-class="pickOn" to="/about">about</router-link>
      </div>
      <div>
        <span>展示区</span>
        <!-- 指定组件的呈现位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pickOn {
  background-color: #ccc;
}
</style>