<template>
  <div>
    <span>RouterSettingInfo</span>
    <p>展示this.$router.params: {{ $route.params }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted", this.$route.params);
  },
  updated() {
    console.log("updated", this.$route);
  },
  beforeDestroy() {
    console.log("SettingInfo组件即将摧毁");
  },
};
</script>

<style>
</style>