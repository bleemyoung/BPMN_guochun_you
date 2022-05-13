<template>
  <div class="wrapper">
    <com-header></com-header>
    <div class="flex conta-box">
      <com-sidebar class="sidebar"></com-sidebar>

      <div
        class="main-box flex-1"
        :style="{ left: collapse ? '64px' : '200px' }"
      >
        <keep-alive :include="tagComponent">
          <router-view class="main-cont" style="margin-top: 20px"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import comHeader from "./Header.vue";
import comSidebar from "./Sidebar.vue";
import comTags from "./Tags.vue";
import Bus from "./bus";
export default {
  name: "Base",
  components: { comHeader, comSidebar, comTags },
  data() {
    return {
      collapse: false,
      tagComponent: [],
    };
  },
  created() {
    Bus.$on("collapse", (isCollapse) => {
      this.collapse = isCollapse;
    });

    // 只有在标签页列表里的页面才使用keep-alive，关闭标签之后就不保存到内存中了
    Bus.$on("tags", (tagList) => {
      for (let item of tagList) {
        item.name && this.tagComponent.push(item.name);
      }
    });
  },
};
</script>

<style scoped lang="less">
.wrapper {
  // position: relative;
  height: 100%;
  overflow: hidden;
  background-color: #eee;
}

.conta-box {
  height: calc(100vh - 60px);
  width: 100%;
  overflow: hidden;
}
.main-box {
  margin-left: 20px;
}
.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

/deep/ .sidebar {
  width: 240px !important;
}
</style>
