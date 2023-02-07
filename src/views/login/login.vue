<template #default="{route,Component}">
  <div :class="isshow !== 1 ? 'active' : 'wrapper' && `animate__animated ${$route.meta.transition}`">
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

    <div id="cssLoader17" class="main-wrap main-wrap--white " v-show="isshow !== 1"
      :class="`animate__animated ${$route.meta.transition}`">
      <div class="cssLoader17"></div>
    </div>
  </div>

  <!-- <div id="cssLoader1" class="main-wrap">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
  </div> -->
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, toRaw } from "vue";
import type { FormInstance } from "element-plus";
import { adminLoginApi, getAdminInfoApi } from '../../request/api'
import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'
import './login.css'
import 'animate.css';
import { useMainStore } from "../../stores/text";

const mainStore = useMainStore();

const state = reactive({
  ruleForm: {
    username: "admin",
    pwd: "123456",
  },
});
const isshow = ref(1)

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
const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    adminLoginApi(ruleForm.value).then(res => {
      if (res.code == 200) {
        Cookie.set('token', res.data.token, { expires: 7 })
        // getAdminInfoApi().then(res => {
        //   if (res.code === 200) {
        //     isshow.value = 2
        //     mainStore.menus = res.data.menus
        //     // localStorage.setItem('menus', JSON.stringify(menus))
        //     //跳转
        //     setTimeout(() => {
        //       router.push('../index')
        //     }, 500)
        //   }
        // })
        mainStore.getAdminInfo().then(res=>{
          setTimeout(() => {
              router.push('../index')
            }, 500)
        })
      }
    })
  }).catch(() => {

  })
};

let { ruleForm } = toRefs(state);
</script>
