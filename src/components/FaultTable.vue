<template>
  <div>
    <div style="font-size: 18px;font-weight: bold;">故障列表</div>
    <el-table id="el-table" :data="tableData" :row-class-name="tableRowClassName"
              style="width: 1200px;padding-left: 100px;">
      <el-table-column label="开始时间" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="故障名称" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="根因推荐" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span size="medium">{{ scope.row.rootCause }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="影响范围" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span size="medium">{{ scope.row.influence }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="修复建议" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span size="medium">{{ scope.row.advice }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props:['timeArea'],
    data() {
      return {
        tableData: [
          {
            date: '2020-06-19 10:43:35',
            name: 'Spine设备重启',
            rootCause: 'reBoot',
            influence: 'spine1',
            advice: '无需操作',
            address: 'Spine设备重启'
          }, {
            date: '2020-06-19 11:43:35',
            name: '二层环路',
            rootCause: 'cpCar',
            influence: 'spine1',
            advice: 'shutdown接口',
            address: '二层环路'
          }, {
            date: '2020-06-19 09:43:35',
            name: 'ARP攻击',
            rootCause: 'HostIpConflict',
            influence: 'spine1',
            advice: '无需操作',
            address: 'ARP攻击'
          }, {
            date: '2020-06-19 06:43:35',
            name: 'RootId冲突',
            rootCause: 'RootIdConflict',
            influence: 'spine1',
            advice: '无需操作',
            address: 'RootId冲突'
          }]
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        console.debug(row);
        return '';
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    watch: {
      timeArea: function () {
        console.log('故障列表获取时间,开始渲染', this.timeArea);
      }
    }
  }
</script>

<style scoped>
  #el-table >>> .warning-row {
    background: oldlace;
  }

  #el-table >>> .success-row {
    background: #f0f9eb;
  }
</style>
