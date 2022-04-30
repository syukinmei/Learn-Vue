<template>
  <div>
    <h1>{{ name }}{{ title }}</h1>
    <div>
      <p>名字：{{ name }}</p>
      <p>性别：{{ sex }}</p>
      <p>年龄：{{ age }}</p>
      <p v-if="info">其他信息：{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "peopleMsg",
  data() {
    return {
      title: "的个人信息",
    };
  },
  props: ["name", "age", "sex", "info"], //简单声明接收

  // 接收的同时对数据类型进行限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  //   info: String,
  // },

  // （prop验证）接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
//   props: {
//     name: {
//       type: String, // name 的类型是字符串
//       required: true, // name 是必要的
//     },
//     sex: {
//       type: String,
//       required: true,
//     },
//     age: {
//       type: Number,
//       required: true,
//     },
//     info: {
//       type: String,
//       required: false,
//     },
//   },

  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>