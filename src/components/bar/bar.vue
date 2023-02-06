<template>
  <div class="wrapper">
    <div ref="bar" class="bar"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
let speed = ref<number>(1); //初始速度
let bar = ref<HTMLElement>();
let timer = ref<number>(0); //定义一个定时器
//开始
const startLoading = () => {
  let dom = bar.value as HTMLElement; //获取元素
  speed.value = 1;

  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1; //递增
      dom.style.width = speed.value + "%"; //设置百分比样式
      timer.value = window.requestAnimationFrame(fn); //递归
    } else {
      speed.value = 1;
      window.cancelAnimationFrame(timer.value); //终止
    }
  });
};
//结束
const endLoading = () => {
  let dom = bar.value as HTMLElement;
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100;
      dom.style.width = speed.value + "%";
      const a = document.querySelector(".bar") as HTMLElement;
      a.style.display = "none";
    });
  }, 1000);
};
//暴露给全局方法
defineExpose({
  startLoading,
  endLoading,
});
</script>
<style lang="less" scoped>
.wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 4px;

  .bar {
    height: inherit;

    width: 0;
    background-color: rgb(43, 200, 19);
  }
}
</style>