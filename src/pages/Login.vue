<template>
  <div class="">
    <div class="login-form">
      <h2 class="login-title">考生登录</h2>
      <el-form 
        :model="LoginForm"
        status-icon
        :rules="rules"
        ref="LoginForm"
        label-width="100px"
        class="LoginForm"
      >
        <el-form-item label="学号" prop="ksNumber">
          <el-input class="login-input"
            type="text"
            v-model="LoginForm.ksNumber"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <br>

        <el-form-item label="密码" prop="ksPassword">
          <el-input class="login-input"
            type="password"
            v-model="LoginForm.ksPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
          <el-button class="login-button" @click="submitLoginForm('LoginForm')"
            >立即登录</el-button>
            <br>
            <br>
            <el-button class="login-button" @click="goRegister()"
            >没有账号,去注册！</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      LoginForm: {
        ksPassword: "",
        ksNumber: "",
      },
      rules: {
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
      },
    };
  },
  methods: {
    submitLoginForm(){
        this.$axios.post('/login',this.LoginForm).then(resp => {
         if(resp.data.code == 200){
            this.$message.success("登陆成功")
            console.log(resp)
         }   
        })
    },
    goRegister(){
      this.$router.replace('/register')
    }
  },
};
</script>
<style scoped>
.login-form {
  width: 700px;
  height: 300px;
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
.login-title {
  margin-top: -20px;
  font-size: 40px;
  text-align: center;
}
.login-input{
    width: 350px;
    padding-left: 5%;
    text-align: center;
}
.LoginForm{
    padding-left: 10%;
}
.login-button{
    width: 350px;
    margin-left: 20%;
    text-align: center;
}
</style>