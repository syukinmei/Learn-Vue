<template>
  <div>
    <h3>Home下的setting组件</h3>
    <div v-for="item in people" :key="item.id">
      <!-- 跳转路由并携带params参数，to的字符串写法 -->
      <!-- <router-link :to="`/home/setting/setInfo/${item.id}/${item.name}`">
        {{ item.id }}_{{ item.name }}
      </router-link> -->

      <!-- 跳转路由并携带params参数，to的对象写法 -->
      <router-link
        :to="{
          name: 'setInfo', // 避坑：要传递 params 参数必须使用name！！
          params: {
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
      people: [
        { id: "01", name: "张三" },
        { id: "02", name: "李四" },
        { id: "03", name: "王五" },
      ],
    };
  },
};
</script>

<style>
</style>