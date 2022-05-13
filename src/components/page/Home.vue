<template>
  <div class="home">
    <div class="home-left">
      <notice></notice>
      <div class="title">控制台</div>
      <card></card>
      <div class="title">最近编辑</div>
      <div class="flex">
        <div class="flex-1" style="margin: 0 5px">
          <div class="title-l">农事资源</div>
          <div class="card-l" v-for="i in 3" :key="i">K12 十二叶水稻流程</div>
        </div>
        <div class="flex-1" style="margin: 0 5px">
          <div class="title-l">农事流程</div>
          <div class="card-l" v-for="i in 6" :key="i">农机 01</div>
        </div>
        <div class="flex-1" style="margin: 0 5px">
          <div class="title-l">农事指导</div>
          <div class="card-l" v-for="i in 3" :key="i">间作播种 JZBZ</div>
        </div>
      </div>
    </div>
    <div class="home-right">
      <div class="main-right-top">
        <div class="main-right-title">系统资讯</div>
        <ullist></ullist>
      </div>
      <div class="main-right-center">
        <img src="@/assets/img/main-banner.png" style="width: 100%" alt="" />
      </div>
      <div class="main-right-bottom">
        <div class="main-right-title">帮助文档</div>
        <ullist></ullist>
      </div>
    </div>
  </div>
</template>

<script>
import notice from "@/components/notice";
import card from "@/components/card";
import ullist from "@/components/ullist";

export default {
  name: "Home",
  components: { notice, card, ullist },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="less">
.home {
  display: flex;
  .home-left {
    flex: 1;
    margin-right: 40px;
  }
  .home-right {
    width: 360px;
  }
}
.title {
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  margin: 30px 0;
}

.card-l {
  width: 380px;
  height: 60px;
  background: #ffffff;
  border-radius: 6px 6px 6px 6px;
  font-size: 16px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #888888;
  line-height: 60px;
  padding-left: 20px;
  margin-bottom: 15px;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.title-l {
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  margin-bottom: 15px;
  color: #888888;
}

.main-right-top,
.main-right-center,
.main-right-bottom {
  background: #ffffff;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 20px;
}
.main-right-title {
  font-size: 18px;
  font-family: Poppins-SemiBold-, Poppins-SemiBold;
  font-weight: normal;
  color: #131523;
}
</style>
