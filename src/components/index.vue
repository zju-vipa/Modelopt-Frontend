<template style="margin: 0">
  <el-container style="height: 960px; border: 1px solid #eee; margin: 0">
      <el-header style="background: #2c3e50">
  <!--      <div style="text-align:center;">模型优化平台</div>-->
  <!--      模型治疗总体流程：确定数据集>>确定模型文件>>进入任务，进行模型诊断并查看结果>>确定优化方案，进行模型优化-->
        <div style="height: 100px;">
          <!-- <span class="logo-title">HML</span> -->
          <el-row>
            <el-col span="4">
              <div href="#" class="logo" style="text-align: left; margin-left: -20px">
                <img class="logo-img" src="../assets/zd.png" alt="图标" style="height: 40px; width: 60px">
                <span class="logo-title" style="margin-left: -20px">模型分析与交互系统</span>
              </div>
            </el-col>
            <el-col span="20" style="text-align: right">
              <el-dropdown class="dropdown" @command="handleCommand">
              <span class="el-dropdown-link">
                {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="update">修改密码</el-dropdown-item>
                  <el-dropdown-item command="exit">退出系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main style="height: 860px">
        <el-col span="4" >
          <el-menu class="el-menu-demo" @select="handleSelect" router :default-active="$route.path" style="height: 897px" background-color="#333744" text-color="#fff" active-text-color="#409EFF" >
            <el-menu-item index="/dataset">数据集</el-menu-item>
            <el-menu-item index="/model">模型</el-menu-item>
            <el-menu-item index="/diagnose">模型诊断</el-menu-item>
            <el-menu-item index="/treat">模型治疗</el-menu-item>
            <el-menu-item index="/historyTask">历史任务</el-menu-item>
          </el-menu>
        </el-col>
        <el-col span="19" style="margin-top: 30px; margin-left: 30px">
          <router-view/>
        </el-col>
      </el-main>
  </el-container>
</template>

<style scoped>
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-main {
    padding: 0;
    margin: 0;
  }
  body{
    margin:0;
    padding:0;
  }
  .dropdown{
    cursor: pointer;
    float: right;
    margin-right: 20px;
    color: white
  }
  .logo{
    text-decoration: none
  }
  .logo-img{
    width: 25px;
    height: 25px;
    vertical-align:middle;
    padding: 0 10px 0 40px
  }
  .logo-title{
    color: white;
    cursor: pointer;
    padding-left: 10px;
    font-size: 18px;
  }
</style>

<script>
    export default {
        data() {
            return {
                activeIndex: this.$route.path,
                username: '',
            };
        },
      created() {
          console.log(this.$route.query.username)
          this.username = this.$route.query.username
      },
      methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(key)
            },
            handleCommand (command) {
              // console.log(this.user)
              // 这里也可以使用switch
              if (command === 'exit') {
                // 退出系统
                this.handleExit()
              } else {
                // this.handleUpdatePass()
              }
            },
            // // 退出系统
            handleExit () {
              // 1, 获取系统的token
              // const token = JSON.parse(localStorage.getItem('token'))
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              this.$router.push('/login')
            }
        }
    }
</script>
