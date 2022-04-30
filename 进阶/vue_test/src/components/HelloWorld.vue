<template>
  <div>
    {{ title }},{{ msg }}
    <hr />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "hello world",
    };
  },
  props: ["msg"],
};
</script>

<style>
</style>