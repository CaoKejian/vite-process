<template>
  <div class="container" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">头部</div>
    <div class="menu">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1" v-for="menus in  newMenus" :key="menus.id">
          <template #title>
            <span>{{ menus.title }}</span>
          </template>
          <el-menu-item index="1-4-1" v-for="submenu in menus.children" :key="submenu.id">{{ submenu.title }}</el-menu-item>
        </el-sub-menu>


      </el-menu>
    </div>
    <div class="content">右侧内容</div>
  </div>
</template>
<script setup lang='ts'>
import { ref ,onMounted} from 'vue'
import 'animate.css';
import { storeToRefs } from 'pinia'
import { useMainStore } from "../../stores";
const mainStore = useMainStore();

interface State {
  menus:MenuObj[]
}
interface MenuObj {
  parentId:number
  id:number
  title?:string
  children?:MenuObj[]
}
type NewMenus = {
  [key:number]:MenuObj
}
const newMenus:NewMenus = mainStore.getNewMenus
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang='less' scoped>
.container {
  height: 100vh;
  position: relative;

  .header {
    height: 4.375rem;
    background-color: pink;
  }

  .menu {
    position: absolute;
    width: 15.625rem;
    top: 4.375rem;
    left: 0;
    bottom: 0;
    background-color: rgb(47, 47, 129);
  }

  .content {
    position: absolute;
    top: 4.375rem;
    right: 0;
    left: 15.625rem;
    bottom: 0;
    background-color: skyblue;
  }
}
</style>