<template>
  <div>
    <Header v-show="headerStatus" />
    <MainNav />
    <Loading v-show="loading" />
    <div v-show="!loading" id="micro-container">子应用内容</div>
  </div>
</template>

<script>
import Loading from "./components/Loading";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import { loading, header } from './store'

export default {
  name: "App",
  components: {
    Loading,
    Header,
    MainNav,
  },
  setup() {
    return {
      loading: loading.loadingStatus,
      headerStatus: header.headerStatus,
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
  height: 100vh;
  width: 100%;
}
</style>
