<template>
  <div class="main">
    <el-button @click="change">编辑器</el-button>
    <div v-show="isShow" id="jsoneditor" style="width: 400px; height: 400px;
    position: fixed;z-index: 1;opacity: 0.9;"></div>
    <chart style="position: fixed">案例库编辑</chart>
<!--    <vueMermaid type="graph LR" :config="config" :nodes="nodes"></vueMermaid>-->
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
      isShow:true,
      myMode:"code",
      json: {
        msg: 'demo of jsoneditor'
      },
      config: {
        journery: {
          fontSize: '40'
        },
        flowchart: {
          curve: 'cardinal'
        }
      },
      nodes: [
        {
          id: "1",
          text: "A",
          link: ["-- yes -->", "-- no -->"],
          linkNumber: 1,
          linkStyle: "fill:none,stroke:red,stroke-width:1px;",
          next: ["2", "3"],
          editable: true
        },
        {id: "2", text: "B"},
        {id: "3", text: "C"}
      ],
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
    }
    const editor = new JSONEditor(container, options)

    // set json
    const initialJson = {
      "Array": [1, 2, 3],
      "Boolean": true,
      "Null": null,
      "Number": 123,
      "Object": {"a": "b", "c": "d"},
      "String": "Hello World"
    }
    editor.set(initialJson)

    // get json
    const updatedJson = editor.get()
  },
  components: {
    chart,
    // vueMermaid
  },
  methods:{
    onJsonChange (value) {
      console.log('value:', value)
    },
    change(){
      this.isShow = !this.isShow;
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
