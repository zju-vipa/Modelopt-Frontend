<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-header>
      <div style="text-align:center;">模型优化平台</div>
<!--      模型治疗总体流程：确定数据集>>确定模型文件>>进入任务，进行模型诊断并查看结果>>确定优化方案，进行模型优化-->

    </el-header>
    <el-main>
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" router :default-active="$route.path">
        <el-menu-item index="/dataset">数据集</el-menu-item>
        <el-menu-item index="/model">模型</el-menu-item>
        <el-menu-item index="/diagnose">模型诊断</el-menu-item>
        <el-menu-item index="/treat">模型治疗</el-menu-item>
        <el-menu-item index="/historyTask">历史任务</el-menu-item>
      </el-menu>
      <router-view/>
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
</style>

<script>
    export default {
        data() {
            return {
                activeIndex: this.$route.path,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(key)
            }
        }
    }
</script>
