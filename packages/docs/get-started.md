---
search: true
next:
  link: /components/button
  text: Button 按钮
---

# kawa-ui 组件库

## 简介

kawa-ui 是一个基于 Vue 3 和 TypeScript 的现代 UI 组件库，专为开发者提供高效率和高性能的组件，同时保持了与 Element Plus 类似的开发体验。

## 安装

将 kawa-ui 组件库集成到您的项目中非常简单，只需使用 npm 进行安装：

```bash
npm i ui-kawa --save


```

## 开始使用

**全局使用**


```js
// 引入所有组件
import kawaUI from 'kawa-ui'
// 引入样式
import 'kawa-ui/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(kawaUI).mount('#app')
```

```vue
<template>
  <kawa-button>我是 Button</kawa-button>
</template>
```

**单个导入**

kawa-ui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <kawa-button>我是 Button</kawa-button>
</template>
<script>
import { kawaButton } from 'kawa-ui'
export default {
  components: { kawaButton },
}
</script>
```

## 亮点

::: details
- 🛠️ 现代化工具链：采用 Vite + Vitest + Vitepress，为您提供快速的开发和测试体验
- 🔍 monorepo 分包管理：便于维护和扩展的代码组织方式
- 🚀 自动化部署：通过 GitHub Actions 实现 CI/CD，自动化您的部署流程
- 🤖 大模型辅助开发：利用先进的大模型技术辅助完成需求分析和设计，提升开发效率
- 📦 开箱即用的 npm 包：提供完善的文档和示例，让您快速上手
:::
