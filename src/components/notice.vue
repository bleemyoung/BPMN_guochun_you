<template>
  <div class="box">
    <div class="notice-title">
      <span class="left"
        ><i
          class="el-icon-warning icon-info"
          style="
            color: #0052d9;
            position: absolute;
            left: 20px;
            line-height: 20px;
          "
        ></i
        >通知</span
      >
      <span class="right">x</span>
    </div>
    <div class="detail">近期农业大脑将进行多次更新！</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 80px;
  background: #d4e3fc;
  border-radius: 6px;
}
.notice-title {
  display: flex;
  padding-top: 20px;
  .left {
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    flex: 1;
    padding-left: 40px;
    position: relative;
    icon-info {
      line-height: 20px;
      position: absolute;
      color: #0052d9;
    }
  }

  .right {
    margin-right: 20px;
  }
}
.detail {
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 40px;
}
</style>
