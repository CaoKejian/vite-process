<template>
  <div class="container" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">头部</div>
    <div class="menu">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
        <el-sub-menu :index="menus.id + ''" v-for="menus in  newMenus" :key="menus.id">
          <template #title>
            <span>{{ menus.title }}</span>
          </template>
          <template v-for="submenu in menus.children" :key="submenu.id">
            <el-menu-item :index="'/' + menus.name + '/' + submenu.name" v-if="!submenu.hidden">{{
              submenu.title
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>

</template>
<script setup lang='ts'>
import { onMounted } from 'vue'
import 'animate.css';
import { useMainStore } from "../../stores/text";
const mainStore = useMainStore();

interface State {
  menus: MenuObj[]
}
interface MenuObj {
  parentId: number
  id: number
  hidden?: 0 | 1
  title?: string
  children?: MenuObj[]
  name?: string
}
type NewMenus = {
  [key: number]: MenuObj
}
type MenusArr = {

}

const newMenus: NewMenus = mainStore.getNewMenus

const handleOpen = (key: string, keyPath: string[]) => {
}
const handleClose = (key: string, keyPath: string[]) => {
}
onMounted(() => {

 

})
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