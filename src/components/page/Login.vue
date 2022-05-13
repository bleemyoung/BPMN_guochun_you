<template>
  <div class="login-wrapper">
    <div class="bg">
      <div class="login-box">
        <div class="login-left">
          <div class="login-left-top">
            <img src="@/assets/img/login-txt.png" class="login-txt" alt="" />
          </div>

          <div class="login-news">
            <div class="login-news-title">农事平台资讯</div>
            <!-- 组件 -->
            <div style="display: flex">
              <!-- 有两个组件，遍历 -->
              <div style="flex: 1" v-for="i in 2" :key="i">
                <uilist></uilist>
              </div>
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="login-main">
            <div style="width: 100%" class="center">
              <img
                src="@/assets/img/logo.png"
                style="width: 70%; margin: 50px auto"
                alt=""
              />
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item prop="username">
                <i class="el-icon-user login-icon"></i>
                <el-input
                  v-model="ruleForm.username"
                  placeholder="请输入用户命"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <i class="el-icon-lock login-icon"></i>
                <el-input
                  type="password"
                  placeholder="请输入密码"
                  :type="passwordType"
                  v-model="ruleForm.password"
                  @keyup.enter.native="submitForm('ruleForm')"
                ></el-input>

                <i
                  @click="showPwd"
                  class="el-icon-view login-icon"
                  style="right: 8px; left: auto"
                ></i>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="login-btn"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  >登录</el-button
                >

                <el-button
                  class="login-btn"
                  style="margin-left: 0px"
                  type="info"
                  @click="reg"
                  >注册账号</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="forget">
            <el-button class="login-btn" @click="forget">忘记密码</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <canvas id="canvas" class="login-anim"></canvas> -->
  </div>
</template>

<script>
import uilist from "@/components/ullist";
export default {
  name: "login",
  components: { uilist },
  data: function () {
    return {
      ruleForm: {
        username: "admin",
        password: "123123",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },

      passwordType: "password",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message.error("登录表单字段输入格式有误");
          return false;
        }
        localStorage.setItem("username", this.ruleForm.username);
        this.$router.push("/");
      });
    },
    reg() {
      this.$router.push("/reg");
    },
    forget() {},
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
  },
  mounted() {
    // 实现页面底部波纹特效
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;
    console.log(canvas.width, canvas.height);

    // 如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    // 波浪大小
    let boHeight = 40; // canvas.height / 10;
    let posHeight = canvas.height - 150; // canvas.height / 1.2;

    // 初始角度为0
    let step = 0;
    // 定义三条不同波浪的颜色
    let lines = [
      "rgba(69, 159, 117, 0.1)",
      "rgba(95, 170, 135, 0.6)",
      "rgba(69, 159, 117, 0.4)",
    ];

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step++;
      // 画3个不同颜色的矩形
      for (let j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j];

        //每个矩形的角度都不同，每个之间相差45度
        let angle = ((step + j * 70) * Math.PI) / 180; // 50
        let deltaHeight = Math.sin(angle) * boHeight;
        let deltaHeightRight = Math.cos(angle) * boHeight;
        ctx.beginPath();
        ctx.moveTo(0, posHeight + deltaHeight);
        ctx.moveTo(0, posHeight + deltaHeight);
        ctx.bezierCurveTo(
          canvas.width / 2,
          posHeight + deltaHeight - boHeight,
          canvas.width / 2,
          posHeight + deltaHeightRight - boHeight,
          canvas.width,
          posHeight + deltaHeightRight
        );
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, posHeight + deltaHeight);
        ctx.closePath();
        ctx.fill();
      }
      requestAnimFrame(loop);
    }
    loop();
  },
};
</script>

<style scoped lang="less">
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper {
  height: 100%;
  width: 100%;
  background-image: url(../../assets/img/bg.png);
}
.bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 108, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
.login-left {
  flex: 1;
  background: #fff;
  border-radius: 15px;
  height: 600px;
  padding: 0 25px;
  margin-right: 20px;

  .login-left-top {
    width: 100%;
    height: 266px;
    background: #7e7e7e;
    border-radius: 6px;
    margin-top: 25px;
    position: relative;

    .login-txt {
      position: absolute;
      left: 5%;
      width: 90%;
      bottom: 20px;
    }
  }

  .login-news {
    .login-news-title {
      font-size: 18px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      margin-top: 20px;
    }
  }
}

.login-right {
  width: 340px;
  background: #fff;
  border-radius: 15px;
  height: 600px;
  padding: 0 30px;
  position: relative;
}

.forget {
  width: 340px;
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 0 30px;
}
#canvas {
  width: 100%;
}
.login-main {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // width: 320px;
  // height: 370px;
  // padding: 20px 35px;
  // border: 1px solid #eee;
  // margin: -185px 0 0 -160px;
  // &::before,
  // &::after {
  //   position: absolute;
  //   height: 12px;
  //   content: "";
  // }
  // &::before {
  //   left: 4px;
  //   right: 4px;
  //   top: -12px;
  //   z-index: 2;
  //   background-color: #f5f5f5;
  // }
  // &::after {
  //   left: 10px;
  //   right: 10px;
  //   top: -22px;
  //   z-index: 1;
  //   background-color: #f0f0f0;
  // }
}

.login-icon {
  position: absolute;
  left: 8px;
  top: 12px;
  z-index: 99;
}
/deep/ .el-input__inner {
  padding-left: 30px;
}
/deep/ .el-form-item {
  margin-bottom: 15px;
}
.login-title {
  padding-bottom: 15px;
  border-bottom: 2px solid @mainColor;
  margin: 15px 0 45px 0;
  color: #555;
  text-align: center;
  font-size: 30px;
}
.login-btn {
  width: 100%;
  height: 36px;
  margin-top: 15px;
  font-size: 14px;
}
.login-tip {
  color: #999;
  font-size: 12px;
  line-height: 30px;
}
.login-anim {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
