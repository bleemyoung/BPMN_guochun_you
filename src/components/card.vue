<template>
  <div class="box">
    <div class="card" v-for="(item, i) in arr" :key="i">
      <div class="left">
        <div class="title">{{ item.name }}</div>
        <div class="num">{{ item.num }}</div>
      </div>
      <div class="right">
        <img
          src="@/assets/img/refresh.png"
          alt=""
          style="width: 30px; margin: 15px"
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
          name: "拥有农事流程",
          num: "3",
        },
        {
          name: "拥有农事活动",
          num: "1,553",
        },
        {
          name: "拥有农事决策",
          num: "2,553",
        },
        {
          name: "拥有农事资源",
          num: "26,553",
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
  height: 120px;
  background: #ffffff;
  border-radius: 6px 6px 6px 6px;
  display: flex;
  margin: 0 5px;
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
  }
  .right {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: rgba(0, 88, 255, 0.1);
    border: 1px solid rgba(0, 88, 255, 0.1);
    margin: 30px;
  }
}
</style>
