<template>
  <div class="login-container">
    <!-- <h2 class="login-title">大电网复杂系统人机协同双向学习引擎</h2> -->
    <h2 class="login-title">模型分析与交互系统</h2>
    <el-form class="login-form" :model="registerForm" :rules="registerFormRules"
             ref="registerFormRef">
      <el-form-item prop="username">
        <el-input clearable  v-model="registerForm.username" placeholder="请输入账号" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item prop="old_password">
        <el-input clearable type="password" v-model="registerForm.password" placeholder="请输入密码" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item prop="new_password">
        <el-input clearable type="password" v-model="registerForm.password" placeholder="请输入密码" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="12">
            <el-button  type="primary" @click="submitMotify" style="width:160px">修改</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="cancel" style="width:170px" >取消</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        // username: 'admin',
        // password: '123456',
        // email: 'wang@123'
        username: '',
        password: '',
        email: ''
      },
      // 登录表单验证规则
      registerFormRules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录功能实现
    submitRegister () {
      this.$refs.registerFormRef.validate(valid => {
        if (valid) {
          // this.$router.push('/login')
          registerApi.register(this.registerForm).then(response => {
            const resp = response.data
            if (resp.meta.code === 200) {
              this.$message.success('注册成功')
              this.$router.push('/login')
            } else {
              this.$message.error('注册失败')
            }
          })
        } else {
          return false
        }
      })
    },
    // 跳转至登录页面
    gotoLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.login-container{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/back.jpg");
  /* background-position: 500px 400px; */
  background-size: cover;
  background-position: absolute;
  overflow: hidden;
}
.login-form{
  width: 350px;
  margin: 40px auto;
  /* background: rgba(255,255,255,0.8); */
  padding: 30px;
  border-radius: 20px;
}
.login-title{
  text-align: center;
  /* color: #303133; */
  color: white;
  /* margin-bottom: 50px; */
  margin-top: 100px;
  letter-spacing: 0.5em;
  font-weight: 600;
  font-size: 30px;
}
.el-form-item__label{
  text-align: center !important;
}
.el-button{
  /* margin: 0 20px; */
  background: rgb(36, 46, 73);
  border: 1px solid rgb(36, 46, 73);
}
</style>
