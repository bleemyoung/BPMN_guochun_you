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

  </div>

</template>

<script>
import bpmnModeler from "workflow-bpmn-modeler";
import axios from "axios";

function loadXMLFromServer(data) {

}

export default {
  components: {
    bpmnModeler,
  },
  data() {
    return {
      xml: "",
      // "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:flowable=\"http://flowable.org/bpmn\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\" typeLanguage=\"http://www.w3.org/2001/XMLSchema\" expressionLanguage=\"http://www.w3.org/1999/XPath\" targetNamespace=\"http://www.flowable.org/processdef\">\n  <process id=\"apply-request\" name=\"apply-request\" isExecutable=\"true\">\n    <startEvent id=\"startEvent1\"></startEvent>\n    <userTask id=\"teacher_decision\" name=\"教师审批\" flowable:candidateGroups=\"teacher\"></userTask>\n    <exclusiveGateway id=\"apply_decision\"></exclusiveGateway>\n    <serviceTask id=\"email_call\" name=\"邮件通知\" flowable:class=\"com.processes.ag_bpmn_v1.callback_service.EmailCallDelegate\"></serviceTask>\n    <serviceTask id=\"meg_call\" name=\"短信通知\" flowable:class=\"com.processes.ag_bpmn_v1.callback_service.MsgCallDelegate\"></serviceTask>\n    <userTask id=\"person_received\" name=\"个人收到通知并确认\" flowable:candidateGroups=\"student\"></userTask>\n    <endEvent id=\"sid-0060B1F5-71D9-4263-9958-0C4AC0679CF6\"></endEvent>\n    <endEvent id=\"sid-65A68B27-3824-4E11-825E-D04ADD103B1B\"></endEvent>\n    <sequenceFlow id=\"approve_task\" name=\"apply your req\" sourceRef=\"startEvent1\" targetRef=\"teacher_decision\"></sequenceFlow>\n    <sequenceFlow id=\"email_info\" name=\"give you a emai to confirm\" sourceRef=\"email_call\" targetRef=\"person_received\"></sequenceFlow>\n    <sequenceFlow id=\"meg_info\" name=\"give you a meg call\" sourceRef=\"meg_call\" targetRef=\"sid-65A68B27-3824-4E11-825E-D04ADD103B1B\"></sequenceFlow>\n    <sequenceFlow id=\"end_this_event\" sourceRef=\"person_received\" targetRef=\"sid-0060B1F5-71D9-4263-9958-0C4AC0679CF6\"></sequenceFlow>\n    <sequenceFlow id=\"decision\" sourceRef=\"teacher_decision\" targetRef=\"apply_decision\"></sequenceFlow>\n    <sequenceFlow id=\"req_success\" name=\"通过\" sourceRef=\"apply_decision\" targetRef=\"email_call\">\n      <conditionExpression xsi:type=\"tFormalExpression\"><![CDATA[${approved}]]></conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id=\"req_failed\" name=\"驳回\" sourceRef=\"apply_decision\" targetRef=\"meg_call\">\n      <conditionExpression xsi:type=\"tFormalExpression\"><![CDATA[${!approved}]]></conditionExpression>\n    </sequenceFlow>\n  </process>\n  <bpmndi:BPMNDiagram id=\"BPMNDiagram_apply-request\">\n    <bpmndi:BPMNPlane bpmnElement=\"apply-request\" id=\"BPMNPlane_apply-request\">\n      <bpmndi:BPMNShape bpmnElement=\"startEvent1\" id=\"BPMNShape_startEvent1\">\n        <omgdc:Bounds height=\"30.0\" width=\"30.0\" x=\"100.0\" y=\"163.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"teacher_decision\" id=\"BPMNShape_teacher_decision\">\n        <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"330.0\" y=\"135.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"apply_decision\" id=\"BPMNShape_apply_decision\">\n        <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"555.0\" y=\"158.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"email_call\" id=\"BPMNShape_email_call\">\n        <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"705.0\" y=\"30.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"meg_call\" id=\"BPMNShape_meg_call\">\n        <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"705.0\" y=\"210.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"person_received\" id=\"BPMNShape_person_received\">\n        <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"990.0\" y=\"30.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"sid-0060B1F5-71D9-4263-9958-0C4AC0679CF6\" id=\"BPMNShape_sid-0060B1F5-71D9-4263-9958-0C4AC0679CF6\">\n        <omgdc:Bounds height=\"28.0\" width=\"28.0\" x=\"1140.0\" y=\"56.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape bpmnElement=\"sid-65A68B27-3824-4E11-825E-D04ADD103B1B\" id=\"BPMNShape_sid-65A68B27-3824-4E11-825E-D04ADD103B1B\">\n        <omgdc:Bounds height=\"28.0\" width=\"28.0\" x=\"1005.0\" y=\"236.0\"></omgdc:Bounds>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge bpmnElement=\"req_failed\" id=\"BPMNEdge_req_failed\">\n        <omgdi:waypoint x=\"591.312515553712\" y=\"181.63672199170122\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"705.0\" y=\"229.11764705882354\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge bpmnElement=\"end_this_event\" id=\"BPMNEdge_end_this_event\">\n        <omgdi:waypoint x=\"1089.95\" y=\"70.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"1140.0\" y=\"70.0\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge bpmnElement=\"approve_task\" id=\"BPMNEdge_approve_task\">\n        <omgdi:waypoint x=\"129.9499986183554\" y=\"178.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"230.0\" y=\"178.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"230.0\" y=\"175.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"330.0\" y=\"175.0\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge bpmnElement=\"decision\" id=\"BPMNEdge_decision\">\n        <omgdi:waypoint x=\"429.95000000000005\" y=\"175.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"493.5\" y=\"175.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"555.6746453900709\" y=\"177.28994082840237\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge bpmnElement=\"email_info\" id=\"BPMNEdge_email_info\">\n        <omgdi:waypoint x=\"804.949999999983\" y=\"70.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"989.9999999999905\" y=\"70.0\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge bpmnElement=\"req_success\" id=\"BPMNEdge_req_success\">\n        <omgdi:waypoint x=\"587.9341145833332\" y=\"170.96527777777777\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"705.0\" y=\"100.19261838440114\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge bpmnElement=\"meg_info\" id=\"BPMNEdge_meg_info\">\n        <omgdi:waypoint x=\"804.9499999999999\" y=\"250.0\"></omgdi:waypoint>\n        <omgdi:waypoint x=\"1005.0\" y=\"250.0\"></omgdi:waypoint>\n      </bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>",
      isShow: true,
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
    save() {
      // { process: {...}, xml: '...', svg: '...' }
      var axios = require('axios');
      var config = {
        method: 'post',
        url: '/apis/rice/addProcess?fileName=apply-request&content=' + this.xml,
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
    loadXMLFromServer(data) {
      var axios = require('axios');
      var res, that = this;
      var config = {
        method: 'get',
        url: '/apis/xml/getXmlFile?pName=apply-request',
        // headers: {
        //   'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
        // }

      };
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
