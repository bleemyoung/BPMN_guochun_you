<template>
  <div class="box">
    <div style="overflow-y: scroll">
      <div class="title">实例列表</div>
      <div class="eg-box" v-for="i in 2" :key="i">
        <div class="flex" style="align-items: center">
          <span class="title">十一叶水稻种植</span>

          <el-button icon="el-icon-document" style="height: 36px"
            >进入实例</el-button
          >
          <span class="flex-1 desc" style="text-align: center">
            西区 34 号田 | 72 亩 | 14 人 | 已启动 234 天 20 小时
          </span>

          <div style="margin-right: 30px" class="flex">
            <div class="ddm">日度</div>
            <div class="ddm week">周度</div>
            <div class="ddm">月度</div>
          </div>

          <div>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>

        <div style="padding-bottom: 15px">
          <chart></chart>
        </div>
        <div style="padding-bottom: 20px">
          <card></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card2";
import chart from "@/components/chart";
export default {
  components: { card, chart },
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
  height: 100%;
  overflow: hidden;
}
.title {
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  padding: 20px;
}

.eg-box {
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(21, 34, 50, 0.08);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 8px;

  .title {
    font-size: 20px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #171725;
    margin-right: 30px;
  }

  .desc {
    font-size: 16px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(23, 23, 37, 0.6);
  }
}

.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}

.ddm {
  width: 48px;
  height: 36px;
  background: #ffffff;
  border-radius: 4px;

  font-size: 13px;
  font-family: Muli-SemiBold, Muli;
  font-weight: 600;
  color: #131523;
  text-align: center;
  line-height: 36px;
}

.week {
  background: #0058ff;
  color: #ffffff;
}
</style>
