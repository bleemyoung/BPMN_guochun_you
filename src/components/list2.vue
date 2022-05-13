<template>
  <div class="box-list">
    <div class="title">{{ title }}</div>

    <div style="width: 100%; margin-top: 10px" v-if="showBtn">
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
      <i style="margin-right: 10px; line-height: 35px" class="el-icon-menu"></i>
      <span class="flex-1" style="text-align: right; padding-right: 10px">
        {{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: {
      type: String,
      default: "活动组件",
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    arr: {
      type: Array,
      default: [
        "农事活动 01",
        "农事活动 02",
        "农事活动 03",
        "农事活动 04",
        "农事活动 05",
        "农事活动 06",
        "农事活动 07",
        "农事活动 08",
        "农事活动 09",
      ],
    },
  },
  data() {
    return {
      arr: [],
      idx: null,
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
  width: 100%;
  font-size: 14px;
  font-family: PingFangSC-Regular-, PingFangSC-Regular;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
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
