<template>
  <Header />
  <Loading />
</template>

<script>
import Loading from "./components/Loading";
import Header from "./components/Header";


export default {
  name: "App",
  components: {
    Loading,
    Header
  },
  setup() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="scss">
html,
body,
#micro_web_main_app {
  width: 100%;
  /*height: 100%;*/
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sub-container {
  min-height: 100%;
  position: relative;
}
#micro-container {
  min-height: 100%;
  width: 100%;
}
</style>
