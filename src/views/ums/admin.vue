<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="address" label="编号" />
    <el-table-column prop="address" label="账号" />
    <el-table-column prop="address" label="姓名" />
    <el-table-column prop="address" label="邮箱" />
    <el-table-column prop="address" label="添加时间" />
    <el-table-column prop="address" label="最后登录" />
    <el-table-column prop="address" label="是否启用" />
    <el-table-column prop="address" label="操作" />
  </el-table>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'

const state = reactive({
  tableData: []
})

const { tableData } = toRefs(state)
</script>
<style lang='less' scoped>

</style>