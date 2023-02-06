<template>
  <div class="container" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">头部</div>
    <div class="menu">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-4-1">1</el-menu-item>
          <el-menu-item index="1-4-1">1</el-menu-item>
          <el-menu-item index="1-4-1">1</el-menu-item>
          <el-menu-item index="1-4-1">1</el-menu-item>
        </el-sub-menu>

        
      </el-menu>
    </div>
    <div class="content">右侧内容</div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import 'animate.css';

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