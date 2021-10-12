<template>
  <div class="box-line">
    <!-- 测试vue2页面<router-link to="acs/index">跳转index</router-link> -->

    <div class="box">
      <div class="border-box">hover查看效果</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.energy {
  &-container {
    width: 100%;
  }
  &-content {
    width: 1200px;
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #000;
}

div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 300px;
  height: 200px;
  // padding: 20px;
  margin: 50px auto;
  color: #fff;
  background-color: #f60;
}
.border-box {
  position: relative;
  width: 100%;
  height: 100%;
  // padding: 20px;
}
.border-box::before,
.border-box::after {
  position: absolute;
  content: " ";
  width: 0;
  height: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.border-box::before {
  top: 0;
  left: 0;
  /* 鼠标离开后的回退效果，如果不设置回退效果，则鼠标离开后就直接很生硬的隐藏了 */
  transition: border-color 0s ease-in 0.8s, width 0.2s ease-in 0.6s,
    height 0.2s ease-in 0.4s;
}
.border-box::after {
  bottom: 0;
  right: 0;
  transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.2s,
    height 0.2s ease-in;
}


.border-box:hover:before,
.border-box:hover:after {
  width: 100%;
  height: 100%;
}

.border-box:hover::after {
  border-bottom-color: #fff;
  border-left-color: #fff;
  transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s,
    height 0.2s ease-out 0.6s;
}
.border-box:hover::before {
  border-top-color: #fff;
  border-right-color: #fff;
  transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
}
</style>
