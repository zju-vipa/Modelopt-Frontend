<template>
  <div class="main">
    <el-steps :active="step_active" align-center>
      <el-step title="步骤 1" description="选择一个需要复现的任务"></el-step>
      <el-step title="步骤 2" description="点击下载可以下载对应任务的模型优化后的权重"></el-step>
    </el-steps>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="date" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="model" label="模型" width="180">
      </el-table-column>
      <el-table-column prop="data" label="数据集">
      </el-table-column>
      <el-table-column prop="download" label="下载权重">
        <template slot-scope="scope">
          <!-- 下载数据模板 -->
          <el-button @click="download(scope.row.id)" class="el-button-color add-button-box"
                      size="medium" type="primary">
            <i class="el-icon-download el-icon--right"></i>下载
          </el-button>
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
        step_active: '1',
        tableData: []
      }
    },
    created() {
      this.getHistory()
    },
    methods: {
      getHistory() {
        this.axios.get("/modeldoctor/history").then(response => {
          console.log(response.data)
          this.tableData = response.data;
        });
      },
      download(id) {
        this.axios.get("/modeldoctor/history/hid", {params:{id:id}},
        {
          responseType: 'blob',
        }).then(res => {
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
