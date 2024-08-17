<script setup>
// import { kawaMessage } from "kawa-ui";
// function handleBtnClick() {
//   kawaMessage.info("btn click");
// }
</script>

<template>
  <p>
    <kawa-button @click="handleBtnClick"> with throttle</kawa-button>
    <kawa-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</kawa-button
    >
  </p>
</template>
