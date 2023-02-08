<template>

  <el-dialog v-model="propData.visible" title="Shipping address" :before-close="close">
    <el-form :model="newform" :label-width="formLabelWidth">
      <el-form-item label="账号：">
        <el-input v-model="newform.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="newform.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="newform.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="newform.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注：">
        <el-input v-model="newform.note" type="textarea" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否启用：">
        <el-radio v-model="newform.status" :label="1" size="large">是</el-radio>
        <el-radio v-mode="newform.status" :label="0" size="large">否</el-radio>
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="modifyAdmin">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, watch } from 'vue'

type Props = {
  visible: boolean,
  form: { username?: string }
}

const propData = defineProps<Props>()
const state = reactive<{
  formLabelWidth: string;
  newform: AdminObjItf
}>
  ({
    formLabelWidth: '120px',
    newform: {}
  })
const emit = defineEmits<{
  (event: "close"): void
}>()

const close = () => {
  emit("close")
}
// 确定
const modifyAdmin = () => {
  emit("close")
}

const { formLabelWidth, newform } = toRefs(state)
// 拷贝from
watch(() => propData.form, () => {
  newform.value = { ...propData.form }

})

</script>
<style lang='less' scoped>

</style>