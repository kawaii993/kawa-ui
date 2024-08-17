<template>
  <div>
    <kawa-button type="primary" loading>Loading</kawa-button>
    <kawa-button type="primary" loading-icon="circle-notch" loading
      >Loading</kawa-button
    >
    <kawa-button type="primary" loading>
      <template #loading>
        <kawa-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </kawa-button>
  </div>
</template>
