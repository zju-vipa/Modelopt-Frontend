<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="20">
        <el-steps :active="1" align-center>
          <el-step title="步骤 1" description="选择表格中的一行数据集，作为模型诊断用的数据集"></el-step>
          <el-step title="步骤 2" description="完成步骤1和2后点击模型页面"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="4">
        <el-upload class="upload-demo" action="/modeldoctor/dataset" :on-success="getData" style="float: left">
          <el-button size="small" type="primary" style="float: left">上传数据集</el-button>
        </el-upload>
      </el-col>
    </el-row>

    <el-table :data="tableData">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="time" label="生成日期">
      </el-table-column>
      <el-table-column prop="data_name" label="名称">
      </el-table-column>
      <el-table-column label="是否选择">
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
      this.axios.get("/modeldoctor/dataset", {}, {}).then(response => {
        console.log(response.data)

        this.tableData = response.data;
      });
    },
    fun(id) {
      localStorage.setItem('datasetID', id)
      console.log(localStorage.getItem('datasetID'))
    }
  }
}
</script>
