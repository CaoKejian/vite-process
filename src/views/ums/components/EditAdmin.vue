<template>

  <el-dialog v-model="propData.visible" title="Shipping address" :before-close="close">
    <el-form :model="newform" :label-width="formLabelWidth">
      <el-form-item label="Promotion name">
        <el-input v-model="newform.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones">
        <el-select v-model="newform.username" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
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
  form: {username?:string}
}

const propData = defineProps<Props>()
const state = reactive<{
  formLabelWidth:string;
  newform:AdminObjItf}>
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