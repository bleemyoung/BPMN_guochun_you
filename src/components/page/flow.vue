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
      
    </div>

    <div>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :file-list="fileList"
        :auto-upload="false"
        accept=".xml"
      >
        <el-button slot="trigger" size="small" type="primary"
          >选取文件</el-button
        >
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >上传到服务器</el-button
        >
        <!-- <el-button type="info"
        @click="handleClear"
        >清空文件列表</el-button> -->

        <el-button 
        @click="testbutton">
        测试</el-button>
      </el-upload>
      <div>
        
      </div>
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
      test:"",
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
    };
  },
  methods: {
    
    
    // 上传xml/
    submitUpload() {
      // 
      console.log("call submitUpload()");
      this.$refs.upload.submit();//
    },
    // ok
    handleRemove(file, fileList) {
       console.log("handleRemove")
      console.log(file, fileList);
      
    },
    beforeRemove(file, fileList){
       console.log("beforeRemove")
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handlePreview(file) {
      // const reader=new FileReader()
      // reader.fileAsText(file)

      // console.log(reader)
      console.log(file.name);
     
      //  console.log(file);
    },
    // 清空文件列表
    handleClear(){
      console.log("clear files")
// TODOs
    }, 
    testbutton(){
      console.log("124")
      // var axios=require("axios")
      // var config={
      //   method:"get",
      //   url:""
      // }
      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      this.$axios
        .get("http://localhost:8080/api/coffee/selectAllCoffee")
        .then(res => {
          console.log(res);
        });
      console.log("321end")
    },
    // 对应保存模型

    save() {
      // { process: {...}, xml: '...', svg: '...' }
    
      var axios = require("axios");
      
       var config = {
        method: "post",
        // url: "http://w5chdi.natappfree.cc/rice/addProcess?fileName=apply-request&content=" + this.xml,
        url: "/apis/rice/addProcess?fileName=apply-request&content=" + this.xml,
      };
      console.log("123yxh，save");
       console.log(config.url);
      //  console.log(api);
      // console.log(config);
      console.log("show xml:"+this.xml);

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
