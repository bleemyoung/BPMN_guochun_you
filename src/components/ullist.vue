<template>
  <div>
    <ul>
      <li class="ul-li" v-for="(item, i) in arr" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "uilist",
  props: {
    arr: {
      type: Array,
      default: [
        "中美元首视频通话信息量很大",
        "国家关系不能走到兵戎相向这一步热",
        "拜登：美不寻求同中国打“新冷战”热",
        "我们一起跨过这场“倒春寒”热",
        "白象呼吁吃多少买多少不要浪费",
        "拼多多砍价到小数点后6位仍失败新",
        "女子卖4套房创业12年如今负债1亿",
      ],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.ul-li {
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  list-style: none;
  counter-reset: count;
  line-height: 35px;
}

.ul-li::before {
  content: "●";
  color: #006cff;
  margin-right: 8px;
}
</style>
