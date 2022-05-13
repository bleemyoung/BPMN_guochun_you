<template>
  <div class="header">
    <!-- 右侧导航栏折叠按钮 -->
    <!-- <span
      class="btn-collapse"
      @click="collapseChage"
      :title="collapse ? '展开侧边栏' : '收起侧边栏'"
    >
      <i class="el-icon-menu"></i>
    </span> -->
    <!-- 系统标题 -->
    <!-- <h3 class="header-title margin-l-10">后台管理系统模板</h3> -->
    <div style="display: flex">
      <img
        src="@/assets/img/logo.png"
        style="width: 180px; margin-left: 10px"
        alt=""
      />
    </div>
    <div style="flex: 1">
      <div class="header-right">
        <img
          src="@/assets/img/msg.png"
          class="header-portrait"
          style="width: 30px; height: 30px"
          alt=""
        />
        <!-- 消息中心 -->
        <div class="btn-info">
          <el-tooltip placement="bottom">
            <span slot="content">{{
              message ? `有${message}条消息` : "消息中心"
            }}</span>
            <router-link to="/info">
              <!-- <i class="el-icon-bell"></i> -->
              <img
                style="width: 30px; height: 30px; vertical-align: middle"
                src="@/assets/img/bell.png"
                alt=""
              />
            </router-link>
          </el-tooltip>
          <span class="btn-info-tip" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <img class="header-portrait" src="static/portrait.jpg" alt="用户头像" />
        <!-- <span class="user-name">switch</span> -->
        <!-- 用户名下拉菜单 -->
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <!-- <i class="el-icon-caret-bottom"></i> -->

            <img
              style="width: 15px; vertical-align: middle"
              src="@/assets/img/down.png"
              alt=""
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <a
              href="https://github.com/nut77/vue2-elementui-admin"
              target="_blank"
            >
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a> -->
            <el-dropdown-item command="loginout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "./bus";
export default {
  name: "Header",
  data() {
    return {
      message: 1,
      username: localStorage.getItem("username"),
      collapse: false,
    };
  },
  methods: {
    // 侧边栏折叠打开效果
    collapseChage() {
      this.collapse = !this.collapse;
      Bus.$emit("collapse", this.collapse);
    },

    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if ("loginout" == command) {
        localStorage.removeItem("username");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped lang="less">
[class*="el-icon"] {
  cursor: pointer;
}
.header {
  width: 100%;
  background-color: #fff;
  color: white;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
}
.user-name {
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #131523;
  margin-left: -20px;
}
.header-title,
.btn-info {
  display: inline-block;
}
.header-title,
.btn-collapse,
.el-icon-bell {
  font-size: 25px;
}
.header-right {
  float: right;
  margin-right: 30px;
}
.btn-collapse {
  vertical-align: sub;
}
.btn-info {
  position: relative;
}
.btn-info-tip {
  position: absolute;
  top: 10px;
  .circle(8px);
  background-color: #ff464f;
}
.el-icon-bell {
  color: white;
  vertical-align: text-top;
}
.header-portrait {
  .circle(40px);
  margin: 0 20px;
  margin-right: 10px;
  vertical-align: middle;
}
.el-dropdown-link {
  // color: white;
  color: #131523;
  cursor: pointer;
}
</style>
