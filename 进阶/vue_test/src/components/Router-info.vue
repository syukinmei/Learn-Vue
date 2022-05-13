<template>
  <div>
    <h3>Home下的information组件</h3>
    <div v-for="item in family" :key="item.id">
      <!-- 跳转路由并携带query参数，to的字符串写法 -->
      <!--       
    <router-link :to="`/home/information/detail?id=${item.id}&name=${item.name}`">
        {{ item.id }}_{{ item.name }}
    </router-link>
       -->

      <!-- 跳转路由并携带query参数，to的对象写法 -->
      <router-link
        :to="{
          path: '/home/information/detail',
          query: {
            id: item.id,
            name: item.name,
          },
        }"
      >
        {{ item.id }}_{{ item.name }}
      </router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      family: [
        { id: "01", name: "syukinmei" },
        { id: "02", name: "ebiebi" },
        { id: "03", name: "syuXXX" },
      ],
    };
  },
  // 组件内的守卫
  // 通过路由规则，进入该组件 并且 渲染该组件 时被调用，此时不能获取组件实例this
  beforeRouteEnter(to, from, next) {
    console.log("———— information 组件内的守卫 Enter");
    next((vm) => {
      console.log(vm.family, "vmmmmmm");
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("———— information 组件内的守卫 Update");
    next();
  },
  // 通过路由规则，离开该组件对应的路由时被调用
  beforeRouteLeave(t0, from, next) {
    console.log("———— information 组件内的守卫 Leave");
    next();
  },

  updated() {
    console.log("update");
  },
  beforeCreate() {
    console.log("beforeCreated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
</style>