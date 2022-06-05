<template>
  <div class="flex box">
    <div style="padding-right: 30px; position: relative;width: 300px">
      <list></list>
      <div class="btns">
        <el-button style="width: 100%">新建农事决策</el-button>
      </div>
    </div>

    <DMN></DMN>
  </div>
</template>
<script>
import DMN from "@/components/DMN";
import list from "@/components/list";

export default {
  name: "Home",
  components: {list, DMN},
  data() {
    return {
      options: [],
    };
  },
  methods: {},
  mounted() {
  },
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.btns {
  position: absolute;
  // width: 100%;
  width: calc(100% - 30px);
  bottom: 20px;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.img {
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
}

.title {
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  width: 100%;
  padding: 20px;
}

.right {
  padding-left: 30px;
  position: relative;
  width: 350px;
}

.right-box {
  background: #ffffff;
  border-radius: 3px 3px 3px 3px;
  opacity: 1;
  border: 1px solid #cccccc;
  padding: 20px;

  font-size: 14px;
  font-family: PingFangSC-Regular-, PingFangSC-Regular;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
}

.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
