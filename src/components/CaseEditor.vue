<template>
  <div class="main">
    <el-button @click="editeJson">编辑器</el-button>
    <el-button @click="save">保存</el-button>
    <div v-show="isShow" id="jsoneditor" style="width: 400px; height: 400px;
    position: fixed;z-index: 1;opacity: 0.9;"></div>
    <chart style="position: fixed" :jsonData="jsonData">案例库编辑</chart>
  </div>
</template>

<script>
import chart from './Chart';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

export default {
  name: "CaseEdite",
  data() {
    return {
      editor: null,
      isShow: true,
      jsonData: null
    }
  },
  mounted() {
    this.init();
  },
  components: {
    chart,
    // vueMermaid
  },
  watch: {
    jsonData: function () {
      if (this.editor == null) {
        return;
      }
      console.log("json changed!");
      this.editor.set(this.jsonData);
    }
  },
  methods: {
    init() {
      const container = document.getElementById("jsoneditor");
      const options = {
        mode: 'code',
        search: false,
        enableSort: false,
        enableTransform: false
        // mainMenuBar:false
      };
      this.editor = new JSONEditor(container, options);
      this.jsonData = {
        "nodes": [
          {
            "name": "A",
            "id": 1
          }, {
            "name": "B",
            "id": 2
          }
        ],
        "relations": [{
          "source": 1,
          "target": 2
        }]
      };
    },
    editeJson() {
      this.isShow = !this.isShow;
    },
    save() {
      // getJson
      this.isShow = false;
      const updatedJson = this.editor.get();
      try {
        if (JSON.stringify(this.jsonData) === JSON.stringify(updatedJson)) {
          return;
        }
      } catch (e) {
        console.log("json 格式错误")
        return;
      }
      this.jsonData = updatedJson;
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
