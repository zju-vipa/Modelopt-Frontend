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
    
    <!-- <el-row style="text-align: left; margin-top: 40px">
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
    </el-row> -->

    <el-row style="text-align: left;margin-top: 40px;margin-left: 10px">
      <el-button type="primary" :loading=button_loading @click='train_doctor'>{{button}}</el-button>
      <el-button type="success" disabled v-if="!button_download">
        <i class="el-icon-download el-icon--right"></i>下载优化后的模型权重
      </el-button>
      <el-button type="success" v-if="button_download" @click='weight_download'>
        <i class="el-icon-download el-icon--right"></i>下载优化后的模型权重
      </el-button>

      <el-button type="success"  disabled v-if="!button_download">
        <i class="el-icon-download el-icon--right"></i>查看模型诊断结果
      </el-button>
      <el-button type="success" v-if="button_download" @click="dialogVisible = true">
        <i class="el-icon-download el-icon--right"></i>查看模型诊断结果
      </el-button>
    </el-row>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="70%" center>
      <el-row>
        模型诊断及优化结果：
      </el-row>
      <el-row>
        <img :src="'data:image/png;base64,'+ images.channel" alt="无效" width="1200px" height="200px" />
      </el-row>
      <el-row>样本特征使用分析：</el-row>
      <el-row>输入样例图：</el-row>
      <el-row>
        <img :src="'data:image/png;base64,'+ images.origin" alt="无效" width="300px" />
      </el-row>
      <el-row>样例图注意力可视化：</el-row>
      <el-row>
        <img :src="'data:image/png;base64,'+ images.cam" alt="无效" width="300px" />
      </el-row>
      <el-row>样本路径分析：</el-row>
      <el-row>
        <img :src="'data:image/png;base64,'+ images.route" alt="无效" width="300px" />
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
        images:{
          channel: '',
          cam: '',
          origin: '',
          route: ''
        }
      }
    },
    methods: {
      train_doctor() {
        this.button = "模型优化训练中"
        this.button_loading = true
        this.axios.post("/modeldoctor/task/step2", {
          'data_id':localStorage.getItem('datasetID'),
          'model_id':localStorage.getItem('modelID'),
          'kernel_radio':this.kernel_radio,
          'background_radio':this.background_radio,
          'route_radio':this.route_radio,
          'layers':this.layers
        }, {}).then(response => {
          console.log('asas')
          this.button_loading=false
          this.button = "开启模型优化训练"
          this.button_download=true

          console.log(res)
          console.log(res.data)
          console.log(res.data['result'])
          console.log(res.data['result']['channel'])
          console.log(res.data['result']['origin'])
          console.log(res.data['result']['cam'])
          this.images.channel=res.data['result']['channel']
          this.images.origin=res.data['result']['origin']
          this.images.cam=res.data['result']['cam']
          this.images.route=res.data['result']['route']
        });
      },
      weight_download(){
        this.axios.post("/modeldoctor/task/weight", {
          responseType: 'blob',
        }, {}).then(res => {
          const link=document.createElement('a');
          try {
            let blob = new Blob([res.data],{type: 'application/vnd.ms-excel'});
            let _fileName = res.headers['content-disposition'].split(';')[1].split('=')[1];//文件名，中文无法解析的时候会显示 _(下划线),生产环境获取不到
            link.style.display='none';
            // 兼容不同浏览器的URL对象
            const url = window.URL || window.webkitURL || window.moxURL;
            link.href=url.createObjectURL(blob);
            link.setAttribute('download', _fileName.substring(_fileName.lastIndexOf('_')+1));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            url.revokeObjectURL(link.href);//销毁url对象
          } catch (e) {
            console.log('下载的文件出错',e)
          }
        });
      }
    }

  }
</script>
