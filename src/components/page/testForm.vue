<!--<script src="../../assets/js/app.js"></script>-->
<!--<link href="../../assets/js/app.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/chunk-elementUI.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/chunk-libs.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/chunk-vue.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/runtime.js" rel="preload" as="script">-->
<template>
  <div>
    <button
      @click="nextNode"
      class="el-button el-button--primary el-button--mini"
    >
      执行流程
    </button>
    <button
      @click="loadXMLFromServer"
      class="el-button el-button--primary el-button--mini"
    >
      从服务器加载 xml
    </button>

    <button
      @click="deletePro"
      class="el-button el-button&#45;&#45;primary el-button&#45;&#45;mini"
    >
      删除流程
    </button>

    <!-- 删除流程对应的Dialog -->
    <el-dialog title="删除流程" :visible.sync="delFormVisible">
        <el-form :model="form">
          <el-form-item label="请输入文件名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="delFormVisible= false">取 消</el-button>
          <el-button type="primary" @click="delFormVisible= false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    <!-- 以下测试用  -->
    <div>
      <el-button @click="testbutton"> 测试2</el-button>
      <el-button @click="testRouter"> 测试跳转</el-button>
      <el-button @click="testForm"> 测试跳转testForm</el-button>
    </div>

    <div>
      <el-button type="text" @click="callDialog"
        >打开嵌套表单的 Dialog</el-button
      >
      <!-- <el-button type="text" @click="dialogFormVisible = true"
        >打开嵌套表单的 Dialog</el-button
      > -->

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="请输入文件名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import bpmnModeler from "workflow-bpmn-modeler";
import axios from "axios";
import testFormVue from "./testForm.vue";

function loadXMLFromServer(data) {}

export default {
  components: {
    bpmnModeler,
  },
  data() {
    return {
      fileName: "yxhTest",
      test: "",
      xml: "",
      isShow: true,
      fileList: [
        {
          name: "apply-request.bpmn20.xml",
          url: "static\testXmlapply-request.bpmn20.xml",
        },
      ],
      users: [
        { name: "The Beatles", id: "1" },
        { name: "The Rolling Stones", id: "2" },
        { name: "Pink Floyed", id: "3" },
      ],
      groups: [
        { name: "Folk Music", id: "4" },
        { name: "Rock Music", id: "5" },
        { name: "Classical Music", id: "6" },
      ],
      categorys: [
        { name: "Music", id: "7" },
        { name: "Articles", id: "8" },
      ],
      dialogFormVisible: false,
      delFormVisible: false,
      saveFormVisible: false,
      form: {
        name: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    callDialog(data) {
      console.log(this.dialogFormVisible);
      if (this.dialogFormVisible == true) {
        this.dialogFormVisible = false;
      } else {
        this.dialogFormVisible = true;
      }
    },
    testbutton() {
      console.log("start");
      // console.log(this.dialogFormVisible);
      // this.dialogFormVisible=true
      var axios = require("axios");
      var config = {
        method: "get",
        url: "/apis/test/rice",
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("end");
      console.log("url:  " + config.url);
    },
    testRouter() {
      console.log("测试跳转,testRouter,跳转到flow");
      //  路径/home对应我在router目录下index.js中定义的path属性值
      this.$router.push("/flow");
    },
    // 对应保存模型
    testForm() {
      console.log("goto testForm");
      this.$router.push("/testForm");
    },

    // 未对接 2022/8/31
    // this.form.name对应删除的流程，传给后端
    deletePro(data) {
      // { process: {...}, xml: '...', svg: '...' }

      console.log(this.delFormVisible);
      this.delFormVisible=true

      var axios = require("axios");
      var config = {
        method: "post",
        url:
          "/apis/rice/delProcess?userName=" +
          data.process +
          ".bpmn20.xml" +
          "&id=" +
          1,
        headers: {
          "User-Agent": "apifox/1.0.0 (https://www.apifox.cn)",
        },
      };
      console.log("123yxh，deletePro");
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 未对接 2022/8/31
    /**
     * nextNode对应button执行流程
     */
    nextNode() {
      var axios = require("axios"),
        pName = "apply-request",
        approved = "通过";
      //
      // var config = {
      //   method: 'post',
      //   url:
      //       '/api/rice/startOneProcess?pName='+ pName
      //       +'&approved='+approved,
      // };
      //
      // axios(config)
      //     .then(function (response) {
      //       console.log(JSON.stringify(response.data));
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });

      var config = {
        method: "post",
        url:
          "/apis/rice/startOneProcess?pName=" + pName + "&approved=" + approved,
        // headers: {
        //   'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
        // }
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          alert(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadXMLFromServer(data) {
      var axios = require("axios");
      var res,
        that = this;
      var config = {
        method: "get",
        // 通过修改pName来请求后端不同的文件
        url: "/apis/xml/getXmlFile?pName=rice",
        // url: "/apis/xml/getXmlFile?pName=apply-request",
      };
      console.log("123yxh");
      console.log(this.xml);

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          res = response.data.data;
          // console.log(res);
          // console.log(response.data)
          that.xml = res;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
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
