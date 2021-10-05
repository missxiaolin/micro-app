<template>
  <div class="energy-container">
    测试vue2页面<router-link to="acs/index">跳转index</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {

  },
};
</script>

<style lang="scss">
.energy{
  &-container{
    width: 100%;
  }
  &-content{
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
