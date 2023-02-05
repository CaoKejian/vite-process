<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="loginFn()">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
import type { FormInstance } from "element-plus";
import adminLoginApi from '../../request/api'
import Cookie from 'js-cookie'

const state = reactive({
  ruleForm: {
    username: "",
    pwd: "",
  },
});

let ruleFormRef = ref()

const validatePwd = (rule: unknown, value: string | undefined, cb: (msg?: string) => void) => {
  if (!value) {
    cb('密码不能为空')
  } else {
    cb()
  }
}

//校验
const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  pwd: [
    { validator: validatePwd, trigger: 'blur' }
  ]

});

const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    adminLoginApi(ruleForm.value).then(res => {
      console.log(res);
      if (res.code == 200) {
        console.log('登陆成功');
        Cookie.set('token',res.data.token, {expires:7})
      }
    })
  }).catch(() => {

  })
};

let { ruleForm } = toRefs(state);
</script>
