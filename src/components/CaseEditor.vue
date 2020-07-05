<template>
  <div class="main">
    <el-button @click="editeJson">编辑器</el-button>
    <el-button @click="save">保存</el-button>
    <div v-show="isShow" id="jsoneditor" style="width: 400px; height: 400px;
    position: fixed;z-index: 1;opacity: 0.9;"></div>
    <chart style="position: fixed">案例库编辑</chart>
  </div>
</template>

<script>
import chart from './Chart';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css'

export default {
  name: "CaseEdite",
  data() {
    return {
      editor: null,
      isShow:true,
      jsonData1:"",
      jsonData:`graph LR;\nA-->B;`
    }
  },
  mounted(){
    const container = document.getElementById("jsoneditor")
    const options = {
      mode:'code',
      search:false,
      enableSort:false,
      enableTransform:false
      // mainMenuBar:false
    };
    this.editor = new JSONEditor(container, options);
    this.editor.set(this.jsonData);
  },
  components: {
    chart,
    // vueMermaid
  },
  methods:{
    editeJson(){
      this.isShow = !this.isShow;
      // set json
      const initialJson = {
        "Array": [1, 2, 3],
        "Boolean": true,
        "Null": null,
        "Number": 123,
        "Object": {"a": "b", "c": "d"},
        "String": "Hello World"
      }
      this.editor.set(initialJson)
    },
    save(){
      // getJson
      const updatedJson = this.editor.get();
      console.log(updatedJson);
    }
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
}
</style>
