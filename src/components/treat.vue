<template>
  <div class="main">
    step3：选择治疗方法
    <br/>
    治疗的工具：
    <br/>

    <template>
      针对卷积核：
      <el-radio v-model="kernel_radio" label="1">是</el-radio>
      <el-radio v-model="kernel_radio" label="2">否</el-radio>
    </template>
    <br/>

    <template>
      针对背景：
      <el-radio v-model="background_radio" label="1">是</el-radio>
      <el-radio v-model="background_radio" label="2">否</el-radio>
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
    step4：填写需要优化的模型层数
    <br/>
    治疗部位：
    <br/>
    <br/>
    <el-input v-model="layers" placeholder="请输入内容"></el-input>

    <template>
      <!-- 下载数据模板 -->
      <div class="div-label"><label>上传标注之前请先下载<span
        style="font-weight: bold">需要标注的图片</span></label></div>
      <el-button @click="download1" class="el-button-color add-button-box" size="medium"
                 type="primary">
        <i class="el-icon-download el-icon--right"></i>下载需要标注的图片
      </el-button>
    </template>
    <br/>
    <br/>
    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
      <el-button size="small" type="primary">上传标注</el-button>
      <div slot="tip" class="el-upload__tip">只能上传标注文件，且不超过500kb</div>
    </el-upload>
    <br/>
    <br/>
    <el-button type="primary"  @click='train_doctor'>开启模型优化训练</el-button>
    <br/>
    <br/>
    <template>
      下载模型优化结果

      <el-button @click="download2" class="el-button-color add-button-box" size="medium"
                 type="primary">
        <i class="el-icon-download el-icon--right"></i>下载优化后的模型权重
      </el-button>
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
          kernel_radio: '1',
          background_radio: '1',
          route_radio: '1',
          layers: "1",
      }
    },
    methods: {
      train_doctor() {
        this.axios.post("/modeldoctor/task/step2", {
          'data_id':localStorage.getItem('datasetID'),
          'model_id':localStorage.getItem('modelID')
        }, {}).then(response => {

        });
      }
    }

  }
</script>
