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
          <div class="card-l" v-for="i in 3" :key="i">
            <span class="flex-1" style="padding-left: 20px"
              >K12 十二叶水稻流程</span
            >

            <span style="padding-right: 20px; color: #006cff">@尤国淳</span>
          </div>
        </div>
        <div class="flex-1" style="margin: 0 5px">
          <div class="title-l">农事流程</div>
          <div class="card-l" v-for="i in 6" :key="i">
            <span class="flex-1" style="padding-left: 20px">农机 01</span>

            <span style="padding-right: 20px; color: #006cff">@张三</span>
          </div>
        </div>
        <div class="flex-1" style="margin: 0 5px">
          <div class="title-l">农事指导</div>
          <div class="card-l" v-for="i in 3" :key="i">
            <span class="flex-1" style="padding-left: 20px">间作播种 JZBZ</span>

            <span style="padding-right: 20px; color: #006cff">@李四</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-right">
      <div class="main-right-title">成员列表</div>
      <div class="">
        <div
          class="flex main-right-top"
          style="margin-bottom: 20px"
          v-for="i in 7"
          :key="i"
        >
          <div class="photo"></div>
          <div class="flex-1">
            <div class="flex">
              <span class="flex-1 user-name">计小软 </span>
              <el-button type="text">修改权限</el-button>
            </div>
            <div class="flex">
              <span class="flex-1 user-role">管理员 </span>
              <el-button type="text" style="color: #d90000">删除成员</el-button>
            </div>
          </div>
        </div>
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
  margin-bottom: 15px;
  display: flex;
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
  margin-bottom: 20px;
}

.photo {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #eee;
  //   padding: 10px;
  margin-right: 20px;
  margin-top: 6px;
}

.user-name {
  font-size: 16px;
  font-family: PingFangSC-Medium-, PingFangSC-Medium;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.9);
  line-height: 36px;
}

.user-role {
  font-size: 14px;
  font-family: PingFangSC-Regular-, PingFangSC-Regular;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
  line-height: 36px;
}
</style>
