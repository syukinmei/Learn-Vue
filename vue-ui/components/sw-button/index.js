import swButton from "./sw-button.vue";

swButton.install = function (Vue) {
  Vue.component(swButton.name, swButton);
};

export default swButton;
