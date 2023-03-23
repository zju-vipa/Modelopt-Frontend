<template>
  <div class="main">
    step1：确定需要诊断原始特征的缺陷还是路径缺陷，原始特征的缺陷指受到背景的干扰导致预测结果错误，路径缺陷指哪些卷积核的卷积路径导致了错误的预测结果。
    <br/>缺陷诊断的工具：<br/>
    <template>
      针对原始特征：
      <el-radio v-model="feature_radio" label="1">是</el-radio>
      <el-radio v-model="feature_radio" label="2">否</el-radio>
    </template>
    <br/>
    <template>
      针对路径：
      <el-radio v-model="route_radio" label="1">是</el-radio>
      <el-radio v-model="route_radio" label="2">否</el-radio>
    </template>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    step2:展示模型治疗的结果，以下选项可以输出：
    <br/>
    错误原因显示：
    <br/>
    <template>
      样本特征使用错误：
      <el-radio v-model="feature_radio" label="1">是</el-radio>
      <el-radio v-model="feature_radio" label="2">否</el-radio>
    </template>
    <br/>
    <template>
      路径走错：
      <el-radio v-model="radio" label="1">是</el-radio>
      <el-radio v-model="radio" label="2">否</el-radio>
    </template>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" @click='train'>开启模型预训练</el-button>
    <br/>
    <br/>
    <el-button type="text" @click="dialogVisible = true">查看模型诊断结果</el-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="70%" center>
      模型诊断及优化结果：
      <br/>
      <br/>
      样本特征使用错误分析：
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      路径走错分析：
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible: false,
      feature_radio: '1',
      route_radio: '1',
    }
  },
  methods: {
    train() {
      this.axios.post("/modeldoctor/task/step1", {
        'data_id':localStorage.getItem('datasetID'),
        'model_id':localStorage.getItem('modelID')
      }, {}).then(response => {

      });
    }
  }

}
</script>
