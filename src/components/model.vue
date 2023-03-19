<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-steps :active="1" align-center>
          <el-step title="步骤 1" description="上传model.py文件"></el-step>
          <el-step title="步骤 2" description="选择表格中的一行模型项，作为模型诊断用的模型"></el-step>
          <el-step title="步骤 3" description="完成步骤1和2后点击任务页面，开始模型诊断与治疗"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="6">
        <el-upload class="upload-demo" :on-success="getData" action="/modeldoctor/model" style="float: left">
          <el-button size="small" type="primary">上传模型</el-button>
        </el-upload>
      </el-col>
    </el-row>

    <el-table :data="tableData">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="time" label="生成日期">
      </el-table-column>
      <el-table-column prop="model_name" label="名称">
      </el-table-column>
      <el-table-column prop="model" label="是否选择">
        <template slot-scope="scope">
          <el-button size="small" @click="fun(scope.row.id)" type="primary">YES</el-button>

        </template>
      </el-table-column>
    </el-table>

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
      value: new Date(),
      tableData: [],
    }
  },

  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.axios.get("/modeldoctor/model", {}, {}).then(response => {
        this.tableData = response.data;
      });
    },
    fun(id) {
      localStorage.setItem('modelID', id)
      console.log(localStorage.getItem('modelID'))
    }
  }
}
</script>
