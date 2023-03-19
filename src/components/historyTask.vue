<template>
  <div class="main">
    <el-steps :active="step_active" align-center>
      <el-step title="步骤 1" description="选择一个需要复现的任务"></el-step>
      <el-step title="步骤 2" description="点击下载可以下载对应任务的模型优化后的权重"></el-step>
    </el-steps>

    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="创建时间" width="180">
        </el-table-column>
        <el-table-column prop="model" label="模型" width="180">
        </el-table-column>
        <el-table-column prop="data" label="数据集">
        </el-table-column>
        <el-table-column prop="download" label="下载权重">
          <template>
            <!-- 下载数据模板 -->
            <el-button @click="download" class="el-button-color add-button-box"
                       size="medium" type="primary">
              <i class="el-icon-download el-icon--right"></i>下载
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>


  </div>
</template>

<style>
  .main {
    margin: 20px;
  }
</style>

<script>
    export default {
        data() {
          return {
              step_active: '1'
          }
        }
    }
</script>
