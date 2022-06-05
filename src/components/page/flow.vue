<!--<script src="../../assets/js/app.js"></script>-->
<!--<link href="../../assets/js/app.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/chunk-elementUI.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/chunk-libs.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/chunk-vue.js" rel="preload" as="script">-->
<!--<link href="../../assets/js/runtime.js" rel="preload" as="script">-->
<template>

  <div>
    <button @click="nextNode"
            class="el-button el-button--primary el-button--mini">执行流程
    </button>
    <button @click="loadXMLFromServer"
            class="el-button el-button--primary el-button--mini">从服务器加载
      xml
    </button>
<!--    <button @click="deletePro"-->
<!--            class="el-button el-button&#45;&#45;primary el-button&#45;&#45;mini">删除该备份-->
<!--    </button>-->
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

</template>

<script>
import bpmnModeler from "workflow-bpmn-modeler";
import axios from "axios";

export default {
  components: {
    bpmnModeler,
  },
  data() {
    return {
      xml: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
          "<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:bioc=\"http://bpmn.io/schema/bpmn/biocolor/1.0\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" targetNamespace=\"http://www.flowable.org/processdef\">\n" +
          "  <process id=\"process_xkzcwvvp\" name=\"name_69oalh0m\">\n" +
          "    <startEvent id=\"startNode1\" name=\"开始\" />\n" +
          "    <task id=\"Activity_0kh8c0j\" />\n" +
          "    <task id=\"Activity_1lh7wub\" />\n" +
          "    <task id=\"Activity_0dahzu8\" />\n" +
          "  </process>\n" +
          "  <bpmndi:BPMNDiagram id=\"BPMNDiagram_flow\">\n" +
          "    <bpmndi:BPMNPlane id=\"BPMNPlane_flow\" bpmnElement=\"process_xkzcwvvp\">\n" +
          "      <bpmndi:BPMNShape id=\"BPMNShape_startNode1\" bpmnElement=\"startNode1\" bioc:stroke=\"\">\n" +
          "        <omgdc:Bounds x=\"240\" y=\"200\" width=\"30\" height=\"30\" />\n" +
          "        <bpmndi:BPMNLabel>\n" +
          "          <omgdc:Bounds x=\"242\" y=\"237\" width=\"23\" height=\"14\" />\n" +
          "        </bpmndi:BPMNLabel>\n" +
          "      </bpmndi:BPMNShape>\n" +
          "      <bpmndi:BPMNShape id=\"Activity_0kh8c0j_di\" bpmnElement=\"Activity_0kh8c0j\">\n" +
          "        <omgdc:Bounds x=\"-200\" y=\"110\" width=\"100\" height=\"80\" />\n" +
          "      </bpmndi:BPMNShape>\n" +
          "      <bpmndi:BPMNShape id=\"Activity_1lh7wub_di\" bpmnElement=\"Activity_1lh7wub\">\n" +
          "        <omgdc:Bounds x=\"230\" y=\"70\" width=\"100\" height=\"80\" />\n" +
          "      </bpmndi:BPMNShape>\n" +
          "      <bpmndi:BPMNShape id=\"Activity_0dahzu8_di\" bpmnElement=\"Activity_0dahzu8\">\n" +
          "        <omgdc:Bounds x=\"-70\" y=\"240\" width=\"100\" height=\"80\" />\n" +
          "      </bpmndi:BPMNShape>\n" +
          "    </bpmndi:BPMNPlane>\n" +
          "  </bpmndi:BPMNDiagram>\n" +
          "</definitions>\n",
          // "<definitions xmlns=“http://www.omg.org/spec/BPMN/20100524/MODEL” xmlns:xsi=“http://www.w3.org/2001/XMLSchema-instance” xmlns:bpmndi=“http://www.omg.org/spec/BPMN/20100524/DI” xmlns:omgdc=“http://www.omg.org/spec/DD/20100524/DC” xmlns:bioc=“http://bpmn.io/schema/bpmn/biocolor/1.0” xmlns:xsd=“http://www.w3.org/2001/XMLSchema” targetNamespace=“http://www.flowable.org/processdef”><process id=“process_rrkz5szm” name=“name_ccdm8zy5”><startEvent id=“startNode1” name=“开始” /><bpmndi:BPMNDiagram id=“BPMNDiagram_flow”><bpmndi:BPMNPlane id=“BPMNPlane_flow” bpmnElement=“process_rrkz5szm”><bpmndi:BPMNShape id=“BPMNShape_startNode1” bpmnElement=“startNode1” bioc:stroke=”\"><omgdc:Bounds x=“240” y=“200” width=“30” height=“30” />bpmndi:BPMNLabel<omgdc:Bounds x=“242” y=“237” width=“23” height=“14” /></bpmndi:BPMNLabel></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram>", // Query the xml
      users: [
        {name: "The Beatles", id: "1"},
        {name: "The Rolling Stones", id: "2"},
        {name: "Pink Floyed", id: "3"},
      ],
      groups: [
        {name: "Folk Music", id: "4"},
        {name: "Rock Music", id: "5"},
        {name: "Classical Music", id: "6"},
      ],
      categorys: [
        {name: "Music", id: "7"},
        {name: "Articles", id: "8"},
      ],
    };
  },
  methods: {
    getModelDetail() {
      // Send request to get xml
      // this.xml = response.xml
    },
    save(data) {
      // { process: {...}, xml: '...', svg: '...' }
      var axios = require('axios');
      var config = {
        method: 'post',
        url: '/apis/rice/addProcess?fileName=' + data.process.name +
            + '&content=' + this.xml,
        // headers: {
        //   'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
        // }

      };
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
      var axios = require('axios');
      var config = {
        method: 'post',
        url: '/apis/rice/delProcess?userName=' + data.process +
            '.bpmn20.xml'
            + '&id=' + 1,
        headers: {
          'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
        }

      };

      axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    nextNode() {
      var axios = require('axios'), pName = "apply-request", approved = "通过";
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
        method: 'post',
        url: '/apis/rice/startOneProcess?pName=' + pName
            + '&approved=' + approved,
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
    loadXMLFromServer(){
      var axios = require('axios');
      var config = {
        method: 'post',
        url: '/apis/rice/getProcess?pName=apply-request',
        // headers: {
        //   'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
        // }

      };

      axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert(response.data.data);
            this.xml = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });

    }

  }
}
;


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
