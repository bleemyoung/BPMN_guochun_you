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
        <img
          src="@/assets/img/refresh.png"
          alt=""
          style="width: 30px; margin: 15px"
          v-if="i == 0"
        />

        <img
          src="@/assets/img/bfh.png"
          alt=""
          style="width: 30px; margin: 15px"
          v-if="i == 1"
        />

        <img
          src="@/assets/img/money.png"
          alt=""
          style="width: 30px; margin: 15px"
          v-if="i == 2"
        />

        <img
          src="@/assets/img/people.png"
          alt=""
          style="width: 30px; margin: 15px"
          v-if="i == 3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    arr: {
      type: Array,
      default: [
        {
          name: "总支出",
          num: "14K",
        },
        {
          name: "资源闲置率",
          num: "56%",
        },
        {
          name: "￥768,342",
          num: "2,553",
        },
        {
          name: "人工成本",
          num: "20k",
        },
      ],
    },
  },
  data() {
    return {
      arr: [],
    };
  },
  methods: {},
  mounted() {},
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

  box-shadow: 0px 1px 4px 1px rgba(21, 34, 50, 0.08);
  .left {
    flex: 1;
    padding-left: 30px;
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
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: rgba(0, 88, 255, 0.1);
    border: 1px solid rgba(0, 88, 255, 0.1);
    margin: 45px 20px;
  }
}
</style>
