<template>
  <div class="box">
    <div class="card" v-for="(item, i) in arr" :key="i">
      <div class="left">
        <div class="title">{{ item.name }}</div>
        <div class="num">{{ item.num }}</div>
        <div class="info">
          <span>2.3% <i class="el-icon-top" style="font-weight: 900"></i></span>
          <span class="info-txt">相较上月</span>
        </div>
      </div>
      <div class="right">
        <div id="line" v-if="i == 0" class="chart"></div>
        <div id="line1" v-if="i == 1" class="chart"></div>
        <div id="line2" v-if="i == 2" class="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Util from "@/assets/js/util";
export default {
  name: "Home",
  props: {
    arr: {
      type: Array,
      default: [
        {
          name: "健康指数",
          num: "97",
        },
        {
          name: "流程稳定性",
          num: "102",
        },
        {
          name: "实例执行情况",
          num: "85%",
        },
      ],
    },
  },
  data() {
    return {
      arr: [],
    };
  },
  computed: {
    chartLine() {
      return this.$echarts.init(Util.getDom("line"));
    },
    chartLine1() {
      return this.$echarts.init(Util.getDom("line1"));
    },
    chartLine2() {
      return this.$echarts.init(Util.getDom("line2"));
    },
  },
  methods: {
    drawLine() {
      this.$axios.get("/chart-simple/line").then((res) => {
        let title = "";
        this.chartLine.setOption({
          title: Object.assign({}, Util.defaultEchartsOpt.title, {
            text: title,
          }),
          tooltip: {
            trigger: "axis",
            formatter: "{a} <br/>{b} : {c}",
          },
          xAxis: {
            type: "category",
            show: false,
            data: res.data.xData,
            boundaryGap: false,
            splitLine: {
              show: false,
              interval: "auto",
              lineStyle: {
                color: ["#D4DFF5"],
              },
            },
            axisLine: {
              lineStyle: {
                color: "#999",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
              },
            },
          },
          yAxis: {
            type: "value",
            show: false,
            splitLine: {
              lineStyle: {
                color: ["#D4DFF5"],
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#999",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
              },
            },
          },
          series: [
            {
              name: title,
              data: res.data.yData,
              type: "line",
              smooth: true,
              showSymbol: false,
              symbol: "circle",
              symbolSize: 6,
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "RGBA(31, 210, 134, 1)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(228, 250, 241, 1)",
                      },
                    ],
                    false
                  ),
                },
              },
              itemStyle: {
                normal: {
                  color: "RGBA(31, 210, 134, 1)",
                },
              },
              lineStyle: {
                normal: {
                  width: 2,
                },
              },
            },
          ],
        });
      });
      return this;
    },
    drawLine1() {
      this.$axios.get("/chart-simple/line").then((res) => {
        let title = "";
        this.chartLine1.setOption({
          title: Object.assign({}, Util.defaultEchartsOpt.title, {
            text: title,
          }),
          tooltip: {
            trigger: "axis",
            formatter: "{a} <br/>{b} : {c}",
          },
          xAxis: {
            type: "category",
            show: false,
            data: res.data.xData,
            boundaryGap: false,
            splitLine: {
              show: false,
              interval: "auto",
              lineStyle: {
                color: ["#D4DFF5"],
              },
            },
            axisLine: {
              lineStyle: {
                color: "#999",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
              },
            },
          },
          yAxis: {
            type: "value",
            show: false,
            splitLine: {
              lineStyle: {
                color: ["#D4DFF5"],
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#999",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
              },
            },
          },
          series: [
            {
              name: title,
              data: res.data.yData,
              type: "line",
              smooth: true,
              showSymbol: false,
              symbol: "circle",
              symbolSize: 6,
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "RGBA(255, 199, 0, 1)", // "rgba(199, 237, 250, 0.5)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(255, 246, 216, 1)",
                      },
                    ],
                    false
                  ),
                },
              },
              itemStyle: {
                normal: {
                  color: "RGBA(255, 199, 0, 1)",
                },
              },
              lineStyle: {
                normal: {
                  width: 2,
                },
              },
            },
          ],
        });
      });
      return this;
    },
    drawLine2() {
      this.$axios.get("/chart-simple/line").then((res) => {
        let title = "";
        this.chartLine2.setOption({
          title: Object.assign({}, Util.defaultEchartsOpt.title, {
            text: title,
          }),
          tooltip: {
            trigger: "axis",
            formatter: "{a} <br/>{b} : {c}",
          },
          xAxis: {
            type: "category",
            show: false,
            data: res.data.xData,
            boundaryGap: false,
            splitLine: {
              show: false,
              interval: "auto",
              lineStyle: {
                color: ["#D4DFF5"],
              },
            },
            axisLine: {
              lineStyle: {
                color: "#999",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
              },
            },
          },
          yAxis: {
            type: "value",
            show: false,
            splitLine: {
              lineStyle: {
                color: ["#D4DFF5"],
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#999",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
              },
            },
          },
          series: [
            {
              name: title,
              data: res.data.yData,
              type: "line",
              smooth: true,
              showSymbol: false,
              symbol: "circle",
              symbolSize: 6,
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "RGBA(30, 94, 255, 1)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(236, 245, 254, 1)",
                      },
                    ],
                    false
                  ),
                },
              },
              itemStyle: {
                normal: {
                  color: "RGBA(30, 94, 255, 1)",
                },
              },
              lineStyle: {
                normal: {
                  width: 2,
                },
              },
            },
          ],
        });
      });
      return this;
    },

    resizeChart() {
      window.addEventListener("resize", () => {
        this.chartLine.resize();
        this.chartLine1.resize();
        this.chartLine2.resize();
      });
    },
  },
  mounted() {
    this.drawLine();
    this.drawLine1();
    this.drawLine2();
  },
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
}
.card {
  flex: 1;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 6px 6px 6px 6px;
  display: flex;
  margin: 0 5px;
  border: 1px solid rgba(21, 34, 50, 0.08);
  overflow: hidden;

  box-shadow: 0px 1px 4px 1px rgba(21, 34, 50, 0.08);
  .left {
    padding-left: 30px;
    width: 150px;
    // overflow: hidden;
    .title {
      font-size: 16px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #5a607f;
      margin-top: 30px;
    }
    .num {
      margin-top: 10px;
      height: 39px;
      font-size: 28px;
      font-family: Poppins-SemiBold-, Poppins-SemiBold;
      font-weight: normal;
      color: #131523;
    }

    .info {
      font-size: 16px;
      font-family: Poppins-SemiBold-, Poppins-SemiBold;
      font-weight: 900;
      color: #3dd598;
    }

    .info-txt {
      font-size: 12px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #7e84a3;
    }
  }
  .right {
    flex: 1;
  }
}

.chart {
  width: 100%;
  height: 150px;
  .border-radius(8px);
  background-color: #fff;
  // box-shadow: 0 0 5px transparent;
  // &:hover {
  //   box-shadow: 0 0 5px @mainColor;
  // }
}
</style>
