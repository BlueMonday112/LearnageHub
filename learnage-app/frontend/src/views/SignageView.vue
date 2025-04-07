<template>
  <div id="signage-view">
    <SignageDisplay />
  </div>
</template>

<script>
import SignageDisplay from "../components/SignageDisplay.vue";

export default {
  name: "SignageView",
  components: {
    SignageDisplay,
  },
};
</script>

<style scoped>
#signage-view {
  text-align: center;
  width: 100%;
}
</style>
