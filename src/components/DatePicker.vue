<template>
  <div style="min-inline-size: fit-content;" id="datePicker">
    <el-date-picker
      v-model="value"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="sendTime"
      value-format="timestamp"
      align="right">
    </el-date-picker>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              console.log(start);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }],
        },
        value: [new Date().getTime() - 3600 * 1000 * 24 * 7,new Date().getTime()]
      };
    },
    mounted(){
      this.sendTime();
    },
    methods:{
      sendTime(){
        console.log("时间选择器发送时间",this.value);
        this.$emit("sendTime",this.value);
      },

    }
  };
</script>

<style scoped>

  el-button{
    background-color: transparent;
  }

  .el-date-editor >>> * {
    color: white;
    background-color: transparent;
  }

  #datePicker > .el-input__inner {
    background-color: transparent;
    border: 1px solid #a2a2a2;
  }

</style>
