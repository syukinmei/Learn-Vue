<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <VueRouter />
    <div>
      <PeopleMsg name="syukinmei" sex="男" :age="age" />
      <button @click="Upage">年龄+1</button>
    </div>
    <PeopleMsg name="ebiebi" sex="女" :age="18" info="我爱臭美" />
    <VuexCount />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PeopleMsg from "./components/PeopleMsg.vue";
import VuexCount from "./components/VuexCount";
import VueRouter from "./components/Vue-router";
import watermark from "./utils/watermark";

export default {
  name: "App",
  components: {
    HelloWorld,
    PeopleMsg,
    VuexCount,
    VueRouter,
  },
  data() {
    return {
      age: 23,
    };
  },
  methods: {
    Upage() {
      this.age++;
    },
  },
  mounted() {
    this.$nextTick(() => {
      watermark.set("syukinmei", document.getElementById("app"));
      console.log(document.getElementById("app"));
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
