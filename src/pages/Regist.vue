<template>
    <div class="">
      <div class="register-form">
        <h2 class="register-title">考生注册</h2>
        <el-form 
          :model="ks"
          status-icon
          :rules="rules"
          ref="RegisterForm"
          label-width="100px"
          class="RegisterForm"
        >
          <el-form-item label="姓名" prop="ksName">
            <el-input class="register-input"
              type="text"
              v-model="ks.ksName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="学号" prop="ksNumber">
            <el-input class="register-input"
              type="text"
              v-model="ks.ksNumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="ksPassword">
            <el-input class="register-input"
              type="password"
              v-model="ks.ksPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="ksCheckPass">
            <el-input class="register-input"
              type="password"
              v-model="ks.ksCheckPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
            <el-button class="register-button" @click="submitRegisterForm('ks')"
              >立即注册</el-button>
              <br>
              <br>
              <el-button class="register-button" @click="goLogin()"
              >已有账号,去登录！</el-button>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        var checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ks.ksPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ks: {
          ksName:"",
          ksPassword: "",
          ksNumber: "",
          ksCheckPass:""
        },
        rules: {
          ksName:[
            {required: true, message: "姓名不能为空", trigger: "blur" },
            { min: 1, max: 8, message: '姓名应在8个字符以内', trigger: 'blur' }
          ],
          ksNumber: [
            { required: true, message: "学号不能为空", trigger: "blur" },
            {
              pattern:/^(199[0-9]|20[0-2][0-9]|2030)(0[1-9]|[1-9][0-9])(0[1-9]|[1-9][0-9])(00[1-9]|0[1-9][0-9]|[1-9][0-9][0-9])$/,
              message:"请输入正确的学号",trigger:'blur'
            }
          ],
          ksPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: '请控制密码在6-20位！！！', trigger: 'blur' },
          ],
          ksCheckPass:[

            {required: true,validator:checkPass, trigger: "blur" }
          ]
        },
      };
    },
    methods: {
      submitRegisterForm(){
          this.$axios.post('/register',this.ks).then(resp => {
           if(resp.data.code == 200){
              this.$message.success("注册成功")
              console.log(resp)
           }else {
              this.$message.error("注册失败")
           }   
          })
      },
      goLogin(){
        this.$router.replace('/')
      }
    },
  };
  </script>
  <style scoped>
  .register-form {
    width: 700px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 60px 20px;
    background-color: rgb(255, 253, 253);
    border-radius: 10px;
    position: absolute;
    top: 40%;
    left: 610px;
    right: 610px;
    bottom: 60%;
    margin: auto;
  }
  .register-title {
    margin-top: -20px;
    font-size: 40px;
    text-align: center;
  }
  .register-input{
      width: 350px;
      padding-left: 5%;
      text-align: center;
  }
  .RegisterForm{
      padding-left: 10%;
  }
  .register-button{
      width: 350px;
      margin-left: 20%;
      text-align: center;
  }
  </style>