<template>
  <div>
<!--    <div v-html="dddd"></div>-->
    <div id="mermaid1"></div>
  </div>

</template>

<script>
import mermaid from 'mermaid';

const defaultConfig = {
  theme: "default",
  startOnLoad: false,
  securityLevel: "loose",
  journery: {
    fontSize: 40
  },
  flowchart: {
    curve: 'basis'
  }
};

export default {
  name: "Chart",
  props: ['jsonData'],
  data() {
    return {
      dddd: ""
    }
  },
  watch: {
    jsonData: function () {
      console.log("mermadi数据变化");
      this.dddd = `graph LR
      01[${this.jsonData.nodes[0].name}] --> |Text| B(Round)`;
      this.loadNodes();
    }
  },
  mounted() {
    this.init();
    this.loadNodes();
  },
  methods: {
    init() {
      mermaid.initialize(defaultConfig);
    },
    edit(id) {
      console.log(id);
      this.$emit("nodeClick", id);
    },
    loadNodes() {
      if (this.dddd == "") {
        return;
      }
      mermaid.render("newMermaid", this.dddd, (svgCode) => {
        // this.dddd = svgCode;
        let container = document.getElementById("mermaid1");
        container.innerHTML = svgCode;
      });
    }
  },
  components: {}
}
</script>

<style scoped>


</style>
