webpackJsonp([1],{"+7dk":function(t,e){},"8B0Z":function(t,e){},NA3i:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")({name:"App"},r,!1,function(t){a("Ttkd")},null,null).exports,n=a("/ocq"),i={data:function(){return{value:new Date,tableData:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.axios.get("/modeldoctor/dataset",{},{}).then(function(e){console.log(e.data),t.tableData=e.data})},fun:function(t){localStorage.setItem("datasetID",t),console.log(localStorage.getItem("datasetID"))}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("el-steps",{attrs:{active:1,"align-center":""}},[a("el-step",{attrs:{title:"步骤 1",description:"选择表格中的一行数据集，作为模型诊断用的数据集"}}),t._v(" "),a("el-step",{attrs:{title:"步骤 2",description:"完成步骤1和2后点击模型页面"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-upload",{staticClass:"upload-demo",staticStyle:{float:"left"},attrs:{action:"/modeldoctor/dataset","on-success":t.getData}},[a("el-button",{staticStyle:{float:"left"},attrs:{size:"small",type:"primary"}},[t._v("上传数据集")])],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"生成日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data_name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"是否选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.fun(e.row.id)}}},[t._v("YES")])]}}])})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(i,s,!1,function(t){a("NA3i")},null,null).exports,c={data:function(){return{value:new Date,tableData:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.axios.get("/modeldoctor/model",{},{}).then(function(e){t.tableData=e.data})},fun:function(t){localStorage.setItem("modelID",t),console.log(localStorage.getItem("modelID"))}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:18}},[a("el-steps",{attrs:{active:1,"align-center":""}},[a("el-step",{attrs:{title:"步骤 1",description:"上传model.py文件"}}),t._v(" "),a("el-step",{attrs:{title:"步骤 2",description:"选择表格中的一行模型项，作为模型诊断用的模型"}}),t._v(" "),a("el-step",{attrs:{title:"步骤 3",description:"完成步骤1和2后点击任务页面，开始模型诊断与治疗"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-upload",{staticClass:"upload-demo",staticStyle:{float:"left"},attrs:{"on-success":t.getData,action:"/modeldoctor/model"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传模型")])],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"生成日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model_name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model",label:"是否选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.fun(e.row.id)}}},[t._v("YES")])]}}])})],1)],1)},staticRenderFns:[]};var _=a("VU/8")(c,u,!1,function(t){a("OeOl")},null,null).exports,v={data:function(){return{dialogVisible:!1,feature_radio:"1",route_radio:"1"}},methods:{train:function(){this.axios.post("/modeldoctor/task/step1",{data_id:localStorage.getItem("datasetID"),model_id:localStorage.getItem("modelID")},{}).then(function(t){})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t._v("\n  step1：确定需要诊断原始特征的缺陷还是路径缺陷，原始特征的缺陷指受到背景的干扰导致预测结果错误，路径缺陷指哪些卷积核的卷积路径导致了错误的预测结果。\n  "),a("br"),t._v("缺陷诊断的工具："),a("br"),t._v(" "),[t._v("\n    针对原始特征：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.feature_radio,callback:function(e){t.feature_radio=e},expression:"feature_radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.feature_radio,callback:function(e){t.feature_radio=e},expression:"feature_radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),[t._v("\n    针对路径：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.route_radio,callback:function(e){t.route_radio=e},expression:"route_radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.route_radio,callback:function(e){t.route_radio=e},expression:"route_radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v("\n  step2:展示模型治疗的结果，以下选项可以输出：\n  "),a("br"),t._v("\n  错误原因显示：\n  "),a("br"),t._v(" "),[t._v("\n    样本特征使用错误：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.feature_radio,callback:function(e){t.feature_radio=e},expression:"feature_radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.feature_radio,callback:function(e){t.feature_radio=e},expression:"feature_radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),[t._v("\n    路径走错：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.train}},[t._v("开启模型预训练")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("查看模型诊断结果")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"70%",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._v("\n    模型诊断及优化结果：\n    "),a("br"),t._v(" "),a("br"),t._v("\n    样本特征使用错误分析：\n    "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v("\n    路径走错分析：\n    "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],2)},staticRenderFns:[]};var p=a("VU/8")(v,b,!1,function(t){a("vEP6")},null,null).exports,m={data:function(){return{kernel_radio:"1",background_radio:"1",route_radio:"1",layers:"1"}},methods:{train_doctor:function(){this.axios.post("/modeldoctor/task/step2",{data_id:localStorage.getItem("datasetID"),model_id:localStorage.getItem("modelID")},{}).then(function(t){})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t._v("\n  step3：选择治疗方法\n  "),a("br"),t._v("\n  治疗的工具：\n  "),a("br"),t._v(" "),[t._v("\n    针对卷积核：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.kernel_radio,callback:function(e){t.kernel_radio=e},expression:"kernel_radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.kernel_radio,callback:function(e){t.kernel_radio=e},expression:"kernel_radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),[t._v("\n    针对背景：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.background_radio,callback:function(e){t.background_radio=e},expression:"background_radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.background_radio,callback:function(e){t.background_radio=e},expression:"background_radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),[t._v("\n    针对路径：\n    "),a("el-radio",{attrs:{label:"1"},model:{value:t.route_radio,callback:function(e){t.route_radio=e},expression:"route_radio"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.route_radio,callback:function(e){t.route_radio=e},expression:"route_radio"}},[t._v("否")])],t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v("\n  step4：填写需要优化的模型层数\n  "),a("br"),t._v("\n  治疗部位：\n  "),a("br"),t._v(" "),a("br"),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.layers,callback:function(e){t.layers=e},expression:"layers"}}),t._v(" "),[t._m(0),t._v(" "),a("el-button",{staticClass:"el-button-color add-button-box",attrs:{size:"medium",type:"primary"},on:{click:t.download1}},[a("i",{staticClass:"el-icon-download el-icon--right"}),t._v("下载需要标注的图片\n    ")])],t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传标注")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传标注文件，且不超过500kb")])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.train_doctor}},[t._v("开启模型优化训练")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),[t._v("\n    下载模型优化结果\n\n    "),a("el-button",{staticClass:"el-button-color add-button-box",attrs:{size:"medium",type:"primary"},on:{click:t.download2}},[a("i",{staticClass:"el-icon-download el-icon--right"}),t._v("下载优化后的模型权重\n    ")])]],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-label"},[e("label",[this._v("上传标注之前请先下载"),e("span",{staticStyle:{"font-weight":"bold"}},[this._v("需要标注的图片")])])])}]};var h=a("VU/8")(m,f,!1,function(t){a("+7dk")},null,null).exports,g={data:function(){return{step_active:"1",tableData:[]}},created:function(){this.getHistory()},methods:{getHistory:function(){var t=this;this.axios.get("/modeldoctor/history").then(function(e){console.log(e.data),t.tableData=e.data})},download:function(t){console.log("id",t),this.axios.get("/modeldoctor/history/hid",{params:{id:t}},{responseType:"blob"}).then(function(t){var e=document.createElement("a");try{var a=new Blob([t.data],{type:"application/vnd.ms-excel"}),o=t.headers["content-disposition"].split(";")[1].split("=")[1];e.style.display="none";var r=window.URL||window.webkitURL||window.moxURL;e.href=r.createObjectURL(a),e.setAttribute("download",o.substring(o.lastIndexOf("_")+1)),document.body.appendChild(e),e.click(),document.body.removeChild(e),r.revokeObjectURL(e.href)}catch(t){console.log("下载的文件出错",t)}}),console.log(1212)}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-steps",{attrs:{active:t.step_active,"align-center":""}},[a("el-step",{attrs:{title:"步骤 1",description:"选择一个需要复现的任务"}}),t._v(" "),a("el-step",{attrs:{title:"步骤 2",description:"点击下载可以下载对应任务的模型优化后的权重"}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"创建时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model",label:"模型",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data",label:"数据集"}}),t._v(" "),a("el-table-column",{attrs:{prop:"download",label:"下载权重"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"el-button-color add-button-box",attrs:{size:"medium",type:"primary"},on:{click:function(a){return t.download(e.row.id)}}},[a("i",{staticClass:"el-icon-download el-icon--right"}),t._v("下载\n        ")])]}}])})],1)],1)},staticRenderFns:[]};var k=a("VU/8")(g,y,!1,function(t){a("y5dw")},null,null).exports,x={data:function(){return{activeIndex:this.$route.path}},methods:{handleSelect:function(t,e){console.log(t,e),this.$router.push(t)}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{height:"800px",border:"1px solid #eee"}},[a("el-header",[a("div",{staticStyle:{"text-align":"center"}},[t._v("模型优化平台")])]),t._v(" "),a("el-main",[a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",router:"","default-active":t.$route.path},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/dataset"}},[t._v("数据集")]),t._v(" "),a("el-menu-item",{attrs:{index:"/model"}},[t._v("模型")]),t._v(" "),a("el-menu-item",{attrs:{index:"/diagnose"}},[t._v("模型诊断")]),t._v(" "),a("el-menu-item",{attrs:{index:"/treat"}},[t._v("模型治疗")]),t._v(" "),a("el-menu-item",{attrs:{index:"/historyTask"}},[t._v("历史任务")])],1),t._v(" "),a("router-view")],1)],1)},staticRenderFns:[]};var D=a("VU/8")(x,w,!1,function(t){a("8B0Z")},"data-v-23645669",null).exports;o.default.use(n.a);var S=new n.a({mode:"history",routes:[{path:"/",name:"index",component:D,redirect:"/dataset",children:[{path:"/dataset",name:"dataset",component:d},{path:"/model",name:"model",component:_},{path:"/diagnose",name:"diagnose",component:p},{path:"/treat",name:"treat",component:h},{path:"/historyTask",name:"historyTask",component:k}]}]}),C=a("zL8q"),I=a.n(C),R=(a("tvR6"),a("mtWM"));o.default.config.productionTip=!1,o.default.use(I.a),o.default.prototype.axios=R.a,new o.default({el:"#app",router:S,components:{App:l},template:"<App/>"})},OeOl:function(t,e){},Ttkd:function(t,e){},tvR6:function(t,e){},vEP6:function(t,e){},y5dw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bc4b12f2536165367200.js.map