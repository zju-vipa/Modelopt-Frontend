<template>
  <div class="main">

    ========================模型优化==========================<br/>
    step3：选择治疗方法
    <br/>
    治疗的工具：
    <br/>

    <template>
      针对样本：
      <el-radio v-model="radio" label="1">是</el-radio>
      <el-radio v-model="radio" label="2">否</el-radio>
    </template>
    <br/>

    <template>
      针对部件：
      <el-radio v-model="radio" label="1">是</el-radio>
      <el-radio v-model="radio" label="2">否</el-radio>
    </template>


    <br/>
    <template>
      针对路径：
      <el-radio v-model="radio" label="1">是</el-radio>
      <el-radio v-model="radio" label="2">否</el-radio>
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
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <template>
      <!-- 下载数据模板 -->
      <div class="div-label"><label>上传标注之前请先下载<span
        style="font-weight: bold">需要标注的图片</span></label></div>
      <el-button @click="download" class="el-button-color add-button-box" size="medium"
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
    <el-button type="primary" disabled>开启模型优化训练</el-button>
    <br/>
    <br/>
    <template>
      下载模型优化结果

      <el-button @click="download" class="el-button-color add-button-box" size="medium"
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
        // data() {
        //
        // }
    }
</script>
