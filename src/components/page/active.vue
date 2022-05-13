<template>
  <div class="flex">
    <div>
      <div class="title">
        <span class="argActiveManage"> 农事活动管理 </span>
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
      <div
        style="
          backgroud: #fff;
          padding: 20px;
          border-radius: 10px;
          background: #fff;
          overflow: hidden;
        "
      >
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column
            prop="classificationCode"
            label="分类代码"
            sortable
            width="124"
          >
          </el-table-column>
          <el-table-column
            prop="procedureClassification"
            label="流程类别"
            sortable
            width="124"
          >
          </el-table-column>
          <!-- <el-table-column
          prop="procedureCode"
          label="流程代码"
          sortable
          width="144"
        >
        </el-table-column> -->
          <el-table-column
            prop="activityName"
            label="活动名称"
            sortable
            width="184"
          >
          </el-table-column>
          <el-table-column
            prop="activityDetails"
            label="活动详情"
            sortable
            width="295"
          >
          </el-table-column>
          <el-table-column prop="date" label="创建时间" sortable width="184">
          </el-table-column>
          <el-table-column label="操作" width="129">
            <template slot-scope="scope">
              <el-button
                center
                type="text"
                size="small"
                @click="dialogVisible = true"
                >编辑</el-button
              >
              <el-button
                center
                type="text"
                size="small"
                @click="rowDel(scope.$index, scope.row, $event)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          style="margin-top: 20px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>

    <!--编辑--->
    <div class="editorRight">
      <div width="432px">
        <span
          class="tqzb"
          style="font-weight: 400; font-size: 16px; color: #777777"
          >提前准备</span
        >
        <div class="fg"></div>
        <span
          class="gzMc"
          style="
            font-size: 24px;
            font-weight: 600;
            color: #006cff;
            margin-right: 160px;
          "
          >耕作 灭茬</span
        >
        <span class="id">ID</span>
        <span class="idNum">1782368768</span>
        <div class="fg"></div>

        <div class="rypz inputV">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="人员配置">
              <el-input
                v-model="formInline.user"
                placeholder="操作机等地员"
                class="inputTkcd"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="njpz inputV">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="农机配置">
              <el-select
                v-model="formInline.region"
                class="inputTkcd"
                placeholder="整地机"
              >
                <el-option label="整地机" value="shanghai"></el-option>
                <el-option label="无" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="cgq inputV">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="传感器">
              <el-select
                v-model="formInline.region"
                class="inputTkcd inputCgq"
                placeholder="无"
              >
                <el-option label="无" value="beijing"></el-option>
                <el-option label="传感器" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="yjhs inputV">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="预计耗时">
              <el-input
                v-model="formInline.user"
                class="inputTkcd"
                placeholder="10：00：00"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="cbhf inputV">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="成本花费">
              <el-input
                v-model="formInline.user"
                class="inputTkcd"
                placeholder="￥ 3000"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >保存活动</el-button
          >
          <el-button type="danger" @click="dialogVisible = false"
            >删除活动</el-button
          >
        </span>
      </div>
      <!-- 编辑-弹出层
    <el-dialog title="提前准备" :visible.sync="dialogVisible" width="432px">
      <span
        class="gzMc"
        style="
          font-size: 24px;
          font-weight: 600;
          color: #006cff;
          margin-right: 160px;
        "
        >耕作 灭茬</span
      >
      <span class="id">ID</span>
      <span class="idNum">1782368768</span>
      <div class="fg"></div>

      <div class="rypz inputV">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="人员配置">
            <el-input
              v-model="formInline.user"
              placeholder="操作机等地员"
              class="inputTkcd"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="njpz inputV">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="农机配置">
            <el-select
              v-model="formInline.region"
              class="inputTkcd"
              placeholder="整地机"
            >
              <el-option label="整地机" value="shanghai"></el-option>
              <el-option label="无" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="cgq inputV">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="传感器">
            <el-select
              v-model="formInline.region"
              class="inputTkcd inputCgq"
              placeholder="无"
            >
              <el-option label="无" value="beijing"></el-option>
              <el-option label="传感器" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="yjhs inputV">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="预计耗时">
            <el-input
              v-model="formInline.user"
              class="inputTkcd"
              placeholder="10：00：00"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="cbhf inputV">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="成本花费">
            <el-input
              v-model="formInline.user"
              class="inputTkcd"
              placeholder="￥ 3000"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >保存活动</el-button
        >
        <el-button type="danger" @click="dialogVisible = false"
          >删除活动</el-button
        >
      </span>
    </el-dialog> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
      total: 600,
      tableData: [
        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },

        {
          classificationCode: "ZZLC-SD",
          procedureClassification: "种植(水稻)...",
          activityName: "移栽前秧苗的管理作业",
          activityDetails: "秧苗叶龄已达到中苗标准,做好插秧前的...",
          date: "2022-03-20 14:30:00",
          procedureCode: "ZZLC-11-SD-37",
        },
      ],
      dialogVisible: false,
      input: "",
      currentPage1: 5,
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    rowDel(index, row, event) {
      // 让当前删除按钮失焦
      event.target.blur();

      this.$confirm("确定要删除当前行吗？", "删除", {
        comfirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.tableData.splice(row.id, 1);
        this.$message.success("删除成功");
        return false;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.argActiveManage {
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171725;
  margin: 20px 0;
  flex: 1;
}
// .nsxq {
//   font-size: 16px;
//   font-weight: 400;
// }
.fg {
  height: 20px;
}
// .createDate {
//   margin-right: 10px;
// }
.el-button--primary {
  width: 396px;
  height: 51px;
  background: #0052d9;
  margin-right: 23px;
  margin-top: 10px;
}
.el-button--danger {
  width: 396px;
  height: 51px;
  margin-top: 10px;
  background: #e34d59;
  margin-left: -1px;
}
/deep/ .el-table__body {
  width: 100% !important;
}
/deep/ .el-table--enable-row-transition .el-table__body td.el-table__cell {
  background: #fff !important;
}

.title {
  display: flex;
}
/deep/ .el-pagination .el-input__inner {
  border-color: #409eff !important;
}
/deep/ table {
  width: 100% !important;
}
/deep/ .el-dialog__header {
  background-color: #fff !important;
  color: #171725 !important;
  text-align: left !important;
  margin-left: 15px !important;
  margin-bottom: -25px !important;
}
/deep/ .el-dialog__title {
  //   line-height: 24px;
  //   color: #303133 !important;
  text-align: left !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  color: #777777 !important;
}
/deep/ .el-dialog__close {
  color: #409eff !important;
}

.inputV {
  position: relative;
}
.inputTkcd {
  position: absolute;
  width: 264px;
  height: 40px;
  left: 40px;
}
.inputCgq {
  position: absolute;
  width: 264px;
  height: 40px;
  left: 55px;
}
.editorRight {
  width: 427px;
  height: 1010px;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  border: 1px solid rgba(151, 151, 151, 0.3);
  filter: blur(undefinedpx);
  padding: 15px;
  margin-top: -20px;
  margin-left: 60px;
}
</style>