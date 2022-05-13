<template>
  <div class="flex box">
    <div style="padding-right: 30px; position: relative; width: 220px">
      <list title="资源类型" :showBtn="false" :arr="arr"></list>
    </div>

    <div class="flex-1" style="padding-right: 30px">
      <div class="flex">
        <span class="argConductManage flex-1"> 农事指导管理 </span>
        <div style="display: flex; align-items: center">
          <div>
            <el-input
              placeholder="请输入你需要搜索的指导"
              v-model="val"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <el-button style="margin-left: 10px; height: 36px"
            >新建指导</el-button
          >
        </div>
      </div>

      <div class="content">
        <div class="title" style="padding-bottom: 0">资源编辑</div>

        <div class="content-box">
          <div
            class="flex cont-li"
            @click="handleClick(i)"
            :class="[active == i ? 'cont-li-active' : '']"
            v-for="i in 10"
            :key="i"
          >
            <div class="flex-1">
              <div class="txt">农机 01</div>
              <div class="subtxt">农机描述文字</div>
            </div>
            <div>
              <el-button type="text">删除</el-button>
              <el-button type="text">操作2</el-button>
              <el-button type="text">操作3</el-button>

              <el-button type="text" disabled icon="el-icon-edit"></el-button>
              <el-button
                type="text"
                disabled
                icon="el-icon-download"
              ></el-button>
            </div>
          </div>
          <div style="margin-top: 10px; display: flex; justify-content: center">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <div style="background: #fff" class="right">
      <div class="title">农机 01</div>
      <div class="flex" style="margin-bottom: 15px" v-for="i in 10" :key="i">
        <span class="select-txt">农机属性</span>

        <el-select v-model="value" placeholder="请选择内容">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import list from "@/components/list";
export default {
  components: { list },
  data() {
    return {
      arr: ["农机", "操作员", "农户", "传感器", "气象", "田地", "算法"],
      active: 1,
      options: [],
    };
  },
  methods: {
    handleClick(i) {
      this.active = i;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.btns {
  position: absolute;
  // width: 100%;
  width: calc(100% - 30px);
  bottom: 20px;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}

.img {
  border-left: 1px solid #d4d4d4;
}

.title {
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  width: 100%;
  padding: 20px;
}

.right {
  padding-left: 30px;
  position: relative;
  width: 350px;
  .title {
    font-size: 18px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #171725;
  }
  .select-txt {
    margin-right: 10px;
    font-size: 16px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #171725;
    line-height: 36px;
  }
}

.right-box {
  background: #ffffff;
  border-radius: 3px 3px 3px 3px;
  opacity: 1;
  border: 1px solid #cccccc;
  padding: 20px;

  font-size: 14px;
  font-family: PingFangSC-Regular-, PingFangSC-Regular;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
}
.margin-bottom-10 {
  margin-bottom: 10px;
}

.argConductManage {
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  margin: 20px 0;
  flex: 1;
}

.content {
  background: #fff;

  .title {
    font-size: 18px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #171725;
  }
  .content-box {
    height: 800px;
    background: #ffffff;
    border-radius: 6px 6px 6px 6px;
    padding: 20px;

    .cont-li {
      border-radius: 6px 6px 6px 6px;
      opacity: 1;
      background: #fff;
      border-bottom: 1px solid rgba(112, 112, 112, 0.2);
      padding: 10px 15px;
    }

    .cont-li-active {
      background: #efefef;
    }

    .txt {
      font-size: 16px;
      font-family: PingFangSC-Medium-, PingFangSC-Medium;
      color: rgba(0, 0, 0, 0.9);
    }

    .subtxt {
      font-size: 14px;
      font-family: PingFangSC-Regular-, PingFangSC-Regular;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>