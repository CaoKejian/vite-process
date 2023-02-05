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
  <div v-show="isShow">123</div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
import type { FormInstance } from "element-plus";
import { adminLoginApi, getAdminInfoApi } from '../../request/api'
import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'

const state = reactive({
  ruleForm: {
    username: "admin",
    pwd: "123456",
  },
});

let ruleFormRef = ref()
let router = useRouter()

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
let isShow = true
const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    adminLoginApi(ruleForm.value).then(res => {
      if (res.code == 200) {
        Cookie.set('token', res.data.token, { expires: 7 })
        getAdminInfoApi().then(res => {
          console.log(res);
          if (res.code === 200) {
            //跳转
            router.push('../home/home.vue')
          }
        })
      }
    })
  }).catch(() => {

  })
};

let { ruleForm } = toRefs(state);
</script>
