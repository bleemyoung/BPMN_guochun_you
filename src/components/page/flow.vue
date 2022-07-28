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
    <!--    <button @click="deletePro"-->
    <!--            class="el-button el-button&#45;&#45;primary el-button&#45;&#45;mini">删除该备份-->
    <!--    </button>-->
    <div v-if="isShow">
      <bpmn-modeler
        ref="refNode"
        :xml="xml"
        :users="users"
        :groups="groups"
        :categorys="categorys"
        :is-view="false"
        @save="save"
      />
    </div>
    <div>
      <el-row>
        <el-button type="primary">主要按钮</el-button>
      </el-row>
      <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  
</el-upload>
    </div>
  </div>
</template>

<script>
import bpmnModeler from "workflow-bpmn-modeler";
import axios from "axios";

function loadXMLFromServer(data) {}

export default {
  components: {
    bpmnModeler,
  },
  data() {
    return {
      xml: "",
      isShow: true,
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
    };
  },
  methods: {
    // 对应保存模型
    save() {
      // { process: {...}, xml: '...', svg: '...' }
      var axios = require("axios");
      var config = {
        method: "post",
        url: "/apis/rice/addProcess?fileName=apply-request&content=" + this.xml,
      };
      console.log("123yxh，save");
      console.log(config);

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deletePro(data) {
      // { process: {...}, xml: '...', svg: '...' }
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
        url: "/apis/xml/getXmlFile?pName=apply-request",
      };
      //  console.log("123yxh");
      console.log(this.xml);

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          res = response.data.data;
          console.log(res);
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
