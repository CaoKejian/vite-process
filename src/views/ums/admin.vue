<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="编号" />
    <el-table-column prop="username" label="账号" />
    <el-table-column prop="nickName" label="姓名" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column label="添加时间">
      <template #default='scope'>
        {{ formateDate(scope.row.createTime) }}
      </template>
    </el-table-column>
    <el-table-column prop="loginTIme" label="最后登录" />
    <el-table-column label="是否启用">
      <template #default='scope'>
        <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" />
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-button link type="primary">分配角色</el-button>
        <el-button link type="primary" @click="editAdmin(row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <EditAdmin :visible="visible" @close="closeDailog" :form="rowData" />
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import { getAdminLists } from '../../request/api'
import EditAdmin from './components/EditAdmin.vue';

const state = reactive<{
  tableData: {}[]
  visible: boolean
  rowData: AdminObjItf
}>({
  tableData: [],
  visible: false,
  rowData: {}
})
getAdminLists({
  keyword: '',
  pageSize: 10,
  pageNum: 1
}).then(res => {
  if (res.code === 200) {
    tableData.value = res.data.list
  }
})
const { tableData, visible, rowData } = toRefs(state)

// 格式化时间
const formateDate = (time: string | undefined) => {
  if (!time) {
    return
  } else {
    const date = new Date(time)
    let year = date.getFullYear()
    let month = addZear(date.getMonth() + 1)

    let day = addZear(date.getDate())
    let hour = addZear(date.getHours())
    let min = addZear(date.getMinutes())
    let sec = addZear(date.getSeconds())
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  }
}
// 编辑
const editAdmin = (row: AdminObjItf) => {
  visible.value = true
  rowData.value = { ...row }
}
// 隐藏弹框
const closeDailog = () => {
  visible.value = false
}
const addZear = (num: number) => {
  return num > 9 ? num : '0' + num
}
</script>
<style lang='less' scoped>

</style>