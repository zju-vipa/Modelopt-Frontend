<template>
  <div style="margin-left: 20px">
    <div class="title">
      Step3：选择治疗方法
    </div>
    <div class="min-title">治疗的工具：</div>
    <el-row style="text-align: left; margin-top: 40px">
      <el-col span="2">
        针对卷积核：
      </el-col>
      <el-col span="6" style="margin-left: -20px">
        <el-radio v-model="kernel_radio" label="1">是</el-radio>
        <el-radio v-model="kernel_radio" label="2">否</el-radio>
      </el-col>
    </el-row>

    <el-row style="text-align: left; margin-top: 20px">
      <el-col span="2">
        针对背景：
      </el-col>
      <el-col span="6" style="margin-left: -20px">
        <el-radio v-model="background_radio" label="1">是</el-radio>
        <el-radio v-model="background_radio" label="2">否</el-radio>
      </el-col>

    </el-row>


    <el-row style="text-align: left; margin-top: 20px">
      <el-col span="2">
        针对路径：
      </el-col>
      <el-col span="6" style="margin-left: -20px">
        <el-radio v-model="route_radio" label="1">是</el-radio>
        <el-radio v-model="route_radio" label="2">否</el-radio>
      </el-col>
    </el-row>


    <div class="title" style="margin-top: 70px">
      Step4：填写需要优化的模型层数
    </div>
    <div class="min-title">治疗部位：</div>
    <el-row style="text-align: left; margin-top: 40px">
      <el-col span="2">
        治疗部位：
      </el-col>
      <el-col span="2" style="margin-left: -40px; margin-top: -10px">
        <el-input-number v-model="layers" placeholder="请输入内容"></el-input-number>
      </el-col>
    </el-row>
    <el-row style="text-align: left; margin-top: 40px">
      <el-col span="2">
        上传标注：
      </el-col>
      <el-col span="6" style="margin-left: -40px; margin-top: -10px">
        <el-row>
          <div>
            <el-button @click="download1" class="el-button-color add-button-box" size="medium"
                       type="primary" plain>
              <i class="el-icon-download el-icon--right"></i> 下载待标注的图片
            </el-button>
            <span slot="tip" class="el-upload__tip" style="margin-left: 20px;color: #72767b">* 上传标注之前请先下载</span>
          </div>
        </el-row>
        <el-row style="margin-top: 20px">
<!--          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">-->
<!--            <el-button size="medium" type="primary">-->
<!--              <i class="el-icon-upload2 el-icon&#45;&#45;right"></i>-->
<!--              上传标注-->
<!--            </el-button>-->
<!--            <span slot="tip" class="el-upload__tip" style="margin-left: 20px; color: #72767b">*只能上传标注文件，且不超过500kb</span>-->
<!--          </el-upload>-->
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">* 只能上传标注文件，且不超过500kb</div>
          </el-upload>
        </el-row>
      </el-col>

    </el-row>
<el-row style="text-align: left;margin-top: 40px;margin-left: 10px">
  <el-button type="primary" :loading=button_loading @click='train_doctor'>{{button}}</el-button>
  <el-button type="success"  disabled v-if="!button_download">
    <i class="el-icon-download el-icon--right"></i>下载优化后的模型权重
  </el-button>
  <el-button type="success" v-if="button_download">
    <i class="el-icon-download el-icon--right"></i>下载优化后的模型权重
  </el-button>
</el-row>
  </div>
</template>

<style>
  /*.main {*/
  /*  margin: 20px;*/
  /*}*/
  .title{
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
    margin-top: 30px;
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
          button: "开启模型优化训练",
          button_loading: false,
          button_download: false,
      }
    },
    methods: {
      train_doctor() {
        this.button = "模型优化训练中"
        this.button_loading = true
        this.axios.post("/modeldoctor/task/step2", {
          'data_id':localStorage.getItem('datasetID'),
          'model_id':localStorage.getItem('modelID')
        }, {}).then(response => {

        });
      }
    }

  }
</script>
