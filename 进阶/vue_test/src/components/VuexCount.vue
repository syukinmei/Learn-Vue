<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <h1>{{ count }} 乘以10倍后的值为: {{ $store.getters.tenfoldCount }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    &nbsp;
    <button @click="increment">加{{ n }}</button> &nbsp;
    <button @click="subtract">减{{ n }}</button> &nbsp;
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    // ...mapState({ count: "count", info: "info" }),
    // ...mapGetters(["tenfoldCount"]),
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", this.n);
      //   this.$store.commit("INCREMENT", this.n);
    },
    subtract() {
      this.$store.dispatch("subtract", this.n);
    },

    // ...mapActions({ increment: "increment", subtract: "subtract" }),
    // ...mapActions(["increment", "subtract"]),

    // ...mapMutations({ INCREMENT: "INCREMENT", SUBTRACT: "SUBTRACT" }),
    // ...mapMutations(["INCREMENT", "SUBTRACT"]),
  },
};
</script>

<style>
</style>