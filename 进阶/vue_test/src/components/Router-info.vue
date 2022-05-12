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
};
</script>

<style>
</style>