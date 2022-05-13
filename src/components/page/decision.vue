<template>
  <div class="flex box">
    <div style="padding-right: 30px; position: relative">
      <list></list>
      <div class="btns">
        <el-button style="width: 100%">新建农事决策</el-button>
      </div>
    </div>
    <div class="flex-1 img" style="text-align: center">
      <img
        src="@/assets/img/decision.jpg"
        style="width: 90%; margin-top: 30px"
        alt=""
      />
    </div>
    <div style="" class="right">
      <div class="title">决策分支 02</div>

      <el-button style="width: 100%; margin-bottom: 15px"
        >添加判定条件</el-button
      >

      <div class="right-box">
        <div class="flex">
          <span class="flex-1 margin-bottom-10">当</span>
          <span>优先级1</span>
        </div>
        <el-select
          class="margin-bottom-10"
          style="width: 100%"
          v-model="value"
          placeholder="轮播种数"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
        <div class="flex margin-bottom-10">
          <div style="margin-right: 10px; width: 100px">
            <el-select v-model="value" placeholder="大于">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
          <div class="flex-1">
            <el-select v-model="value" placeholder="500">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="margin-bottom-10">且</div>

        <el-select
          class="margin-bottom-10"
          style="width: 100%"
          v-model="value"
          placeholder="轮播种数"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
        <div class="flex margin-bottom-10">
          <div style="margin-right: 10px; width: 100px">
            <el-select v-model="value" placeholder="大于">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
          <div class="flex-1">
            <el-select v-model="value" placeholder="500">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <el-button style="width: 100%">添加子条件</el-button>
      </div>

      <div class="title">或</div>

      <div class="right-box">
        <div class="flex">
          <span class="flex-1 margin-bottom-10">当</span>
          <span>优先级1</span>
        </div>
        <el-select
          class="margin-bottom-10"
          style="width: 100%"
          v-model="value"
          placeholder="轮播种数"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
        <div class="flex margin-bottom-10">
          <div style="margin-right: 10px; width: 100px">
            <el-select v-model="value" placeholder="大于">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
          <div class="flex-1">
            <el-select v-model="value" placeholder="500">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="margin-bottom-10">且</div>

        <el-select
          class="margin-bottom-10"
          style="width: 100%"
          v-model="value"
          placeholder="轮播种数"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
        <div class="flex margin-bottom-10">
          <div style="margin-right: 10px; width: 100px">
            <el-select v-model="value" placeholder="大于">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
          <div class="flex-1">
            <el-select v-model="value" placeholder="500">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <el-button style="width: 100%">添加子条件</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import list from "@/components/list";

export default {
  name: "Home",
  components: { list },
  data() {
    return {
      options: [],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="less">
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
  border-right: 1px solid #d4d4d4;
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
</style>
