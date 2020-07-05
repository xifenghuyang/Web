<template>
  <div>
    <div v-html="dddd"></div>
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
  data() {
    return {
      eee: `graph LR;\nA-->B;`,
      dddd: `graph LR
      A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]`
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
      mermaid.render("newMermaid", this.dddd, (svgCode) => {
        this.dddd = svgCode;
        // let container = document.getElementById("mermaid1");
        // container.innerHTML = svgCode;
      });
    }
  },
  components: {}
}
</script>

<style scoped>


</style>
