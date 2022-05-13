<template>
  <div class="box">
    <div class="title">{{ title }}</div>

    <div style="width: 100%" v-if="showBtn">
      <el-input
        placeholder="请输入你需要搜索的指导"
        v-model="val"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <div
      v-for="(item, i) in arr"
      :class="[idx == i ? 'list-active' : '']"
      :key="i"
      class="list flex"
      @click="handleClick(i)"
    >
      <span class="flex-1"> {{ item }}</span>

      <i
        v-if="idx == i && showBtn"
        style="margin-right: 10px; line-height: 35px"
        class="el-icon-delete"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: {
      type: String,
      default: "决策列表",
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    arr: {
      type: Array,
      default: [
        "轮播间作决策",
        "耕整地决策",
        "品种选择决策",
        "种植日历决策",
        "种植密度决策",
        "播种量选择决策模型",
        "土壤肥力决策模型",
        "灌溉水决策模型",
      ],
    },
  },
  data() {
    return {
      arr: [],
      idx: 0,
    };
  },
  methods: {
    handleClick(i) {
      this.idx = i;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
}
.title {
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  width: 100%;
  padding: 20px;
}

.list {
  width: 100%;
  height: 36px;
  line-height: 36px;
  background: #ffffff;
  border-radius: 3px 3px 3px 3px;
  font-size: 14px;
  font-family: PingFangSC-Regular-, PingFangSC-Regular;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 10px;
}

.list-active {
  background: #0052d9;
  color: #fff;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
</style>
