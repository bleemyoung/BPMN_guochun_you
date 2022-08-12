<template>
  <div style="padding: 20px; width: 200px; overflow: hidden; background: #fff">
    <el-aside width="auto" height="auto">
      <div style="border-top: 1px solid #f7f7f7"></div>
      <el-menu
        :collapse="isCollapse"
        :default-active="onRoutes"
        background-color="#fff"
        text-color="#ccc"
        active-text-color="#ddd"
        unique-opened
        style="height: 100%"
        router
      >
        <template v-for="item in items">
          <template v-if="item.subItems">
            <el-submenu :index="item.path" :key="item.label">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="(subItem, i) in item.subItems"
                :index="subItem.path"
                :key="i"
              >
                {{ subItem.title }}
              </el-menu-item>
            </el-submenu>
          </template>

          <template v-else>
            <template v-if="item.title == '小组管理'">
              <el-menu-item
                :index="item.path" 
                :key="item.label"
                style="position: absolute; bottom: 105px; width: 100%"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
            <template v-else-if="item.title == '个人中心'">
              <el-menu-item
                :index="item.path"
                :key="item.label"
                style="position: absolute; bottom: 50px; width: 100%"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
            <template v-else>
              <el-menu-item :index="item.path"
              :key="item.label">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import Bus from "./bus";
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapse: false,
      items: [
        {
          title: "控制台",
          path: "/index",
          icon: "iconfont icon-clock",
        },
        {
          title: "实例列表",
          path: "/example",
          icon: "iconfont icon-menu",
        },

        // {
        //   title: "echarts图表",
        //   path: "echarts",
        //   icon: "el-icon-star-on",
        //   subItems: [
        //     {
        //       title: "简单图表",
        //       path: "/chart-simple",
        //     },
        //     {
        //       title: "复杂图表",
        //       path: "/chart-complex",
        //     },
        //   ],
        // },
        {
          title: "农事流程管理",
          path: "/flow",
          icon: "iconfont icon-list",
        },
        {
          title: "农事活动管理",
          path: "/active",
          icon: "iconfont icon-fangkuai",
        },
        {
          title: "农事决策管理",
          path: "/decision",
          icon: "iconfont icon-switch",
        },
        {
          title: "农事资源管理",
          path: "/source",
          icon: "iconfont icon-fangkuai",
        },
        {
          title: "农事指导管理",
          path: "/guide",
          icon: "iconfont icon-fangkuai",
        },
        {
          title: "小组管理",
          path: "/group",
          icon: "iconfont icon-user",
        },
        {
          title: "个人中心",
          path: "/mine",
          icon: "iconfont icon-user",
        },
        // {
        //   title: "错误页面",
        //   path: "/error",
        //   icon: "el-icon-warning",
        // },
        // {
        //   title: "404页面",
        //   path: "/404",
        //   icon: "el-icon-error",
        // },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.fullPath;
    },
  },
  created() {
    // 通过 event bus进行组件间的通信 来折叠和展开侧边栏
    Bus.$on("collapse", (isCollapse) => {
      this.isCollapse = isCollapse;
    });
  },
};
</script>

<style scoped lang="less">
.el-menu {
  height: 100%;
  border: none;
  &:not(.el-menu--collapse) {
    width: 100%;
  }
}
.el-menu-item {
  color: rgba(0, 0, 0, 0.6) !important;
}

.el-menu-item:hover {
  background-color: #e5f0ff !important;
  border-radius: 10px !important;
}
.el-menu-item.is-active {
  background-color: #e5f0ff !important;
  color: rgba(0, 0, 0, 0.6) !important;
  border-radius: 10px;
}
/deep/ .el-submenu__title {
  color: rgba(0, 0, 0, 0.6) !important;
}

/deep/ .el-submenu__title:hover {
  background-color: #e5f0ff !important;
  border-radius: 10px !important;
}

.el-aside {
  height: 100%;
  overflow: hidden;
}


</style>
