import skButton from './vue-skButton.vue'
export default skButton
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('sk-button', skButton);
}