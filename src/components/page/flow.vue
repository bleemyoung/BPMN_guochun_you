<template>
  <div class="flex box">
    <div style="padding-right: 30px; position: relative">
      <list title="流程列表" :arr="arr"></list>
      <div class="btns">
        <el-button style="width: 100%">新建农事流程</el-button>
      </div>
    </div>

    <div
      style="border-left: 1px solid #d4d4d4; padding-right: 30px"
      class="right"
    >
      <lists title="结构组件" :arr="['结构组件']" :showBtn="false"></lists>
      <lists title="决策组件" :arr="['决策组件']" :showBtn="false"></lists>
      <lists></lists>
    </div>
    <div class="flex-1 img" style="text-align: center">
      <img
        src="@/assets/img/flow.png"
        style="width: 90%; margin-top: 30px"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import list from "@/components/list";
import lists from "@/components/list2";

export default {
  name: "Home",
  components: { list, lists },
  data() {
    return {
      arr: [
        "K12 十二叶水稻流程",
        "K11 十二叶水稻流程",
        "K10 十二叶水稻流程",
        "K9 十二叶水稻流程",
        "K8 十二叶水稻流程",
        "K7 十二叶水稻流程",
        "K6 十二叶水稻流程",
        "K5 十二叶水稻流程",
        "K4 十二叶水稻流程",
        "K3 十二叶水稻流程",
        "K2 十二叶水稻流程",
        "K1 十二叶水稻流程",
        "C11 十二叶水稻流程",
      ],
    };
  },
  methods: {},
  mounted() {},
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
