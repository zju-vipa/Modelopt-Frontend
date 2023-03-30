<template>
  <div class="main">
    <div class="title">
      Step1：确定需要诊断的缺陷类型
    </div>
    <el-alert
      title="提示"
      type="info" style="text-align: left;line-height: 20px;margin-top: 10px;width: 400px">
      原始特征缺陷：指受到背景的干扰导致预测结果错误
      <br />
      路径缺陷：指由于卷积核的卷积路径导致了错误的预测结果
    </el-alert>
<!--    <div style="text-align: left;line-height: 35px">-->
<!--    </div>-->
    <div class="min-title">缺陷诊断的工具：</div>
    <template>
      <el-row style="margin-top: 10px; text-align: left">
        <el-col span="2" >针对原始特征：</el-col>
        <el-col span="20">
          <el-radio v-model="feature_radio" label="1">是</el-radio>
          <el-radio v-model="feature_radio" label="2">否</el-radio>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px; text-align: left">
        <el-col span="2" >针对路径：</el-col>
        <el-col span="20" style="text-align: left">
          <el-radio v-model="route_radio" label="1">是</el-radio>
          <el-radio v-model="route_radio" label="2">否</el-radio>
        </el-col>
      </el-row>
    </template>

    <div style="text-align: left;font-size: 20px;font-weight: bolder;margin-top: 40px;">
      Step2:选择模型治疗结果展示方式：
    </div>
    <el-alert
      title="提示"
      type="info" style="text-align: left;line-height: 20px;margin-top: 10px;width: 400px">
      对缺陷诊断结果的显示方式进行选择
    </el-alert>
    <div class="min-title">错误原因显示方式：</div>
    <template>
      <el-row style="margin-top: 10px; text-align: left">
        <el-col span="3" >样本特征使用错误：</el-col>
        <el-col span="20" style="margin-left: -20px">
          <el-radio v-model="feature_error_radio" label="1">是</el-radio>
          <el-radio v-model="feature_error_radio" label="2">否</el-radio>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px; text-align: left">
        <el-col span="3" >路径走错：</el-col>
        <el-col span="20" style="margin-left: -20px">
          <el-radio v-model="path_error_radio" label="1">是</el-radio>
          <el-radio v-model="path_error_radio" label="2">否</el-radio>
        </el-col>
      </el-row>
    </template>
    <el-row style="text-align: left;margin-top: 40px;">
      <el-button type="primary" :loading=button_loading @click='train'>{{button}}</el-button>
      <el-button type="success"  disabled v-if="!button_download">
        <i class="el-icon-download el-icon--right"></i>查看模型诊断结果
      </el-button>
      <el-button type="success" v-if="button_download" @click="dialogVisible = true">
        <i class="el-icon-download el-icon--right"></i>查看模型诊断结果
      </el-button>
    </el-row>

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
.min-title{
  text-align: left;
  font-size: 15px;
  font-weight: bolder;
  margin-top: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      feature_radio: '1',
      route_radio: '1',
      feature_error_radio: '1',
      path_error_radio: '1',
      button: "开启模型诊断",
      button_loading: false,
      button_download: false,
    }
  },
  methods: {
    train() {
      this.button = "模型诊断中"
      this.button_loading = true
      this.axios.post("/modeldoctor/task/step1", {
        'data_id':localStorage.getItem('datasetID'),
        'model_id':localStorage.getItem('modelID')
      }, {}).then(response => {

      });
    }
  }

}
</script>
