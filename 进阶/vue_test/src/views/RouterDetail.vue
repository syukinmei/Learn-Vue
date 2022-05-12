<template>
  <div>
    <span>RouterDetail</span>
    <p>id: {{ $route.query.id }}</p>
    <p>名字: {{ $route.query.name }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted", this.$route.query);
  },
  updated() {
    console.log("updated", this.$route.query);
  },
  beforeDestroy() {
    console.log("Detail组件即将摧毁");
  },
};
</script>

<style>
</style>