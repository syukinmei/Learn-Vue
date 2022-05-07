<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <PeopleMsg name="syukinmei" sex="男" :age="age" />
      <button @click="Upage">年龄+1</button>
    </div>
    <PeopleMsg name="ebiebi" sex="女" :age="18" info="我爱臭美" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PeopleMsg from "./components/PeopleMsg.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PeopleMsg,
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
