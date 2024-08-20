---
title: Message
description: Message 组件文档

next: 
  link: /components/messagebox
  text: MessageBox 消息弹出框

prev:
  link: /components/loading
  text: Loading 加载
---

::: tip
**🚧 组件库更新通知 🚧**：我们正在努力完善我们的组件库。
:::

# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基本用法

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 不同类型

用来显示「成功、警告、消息、错误」类的操作反馈。通过 `type` 属性来配置。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 可关闭的

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true 此外，和 Notification 一样，Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为 0 便表示该消息不会被自动关闭。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 文字居中

通过 `center` 属性来配置文字是否居中。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 全局方法

Message 组件提供了全局方法 `$message`，在 Vue 实例中可以作为 `this.$message` 使用。

## 单独引用

```typescript
import { kawaMessage } from "kawa-ui";
```

## Message API

### Options

| Name           | Description                       | Type                                                     | Default |
| -------------- | --------------------------------- | -------------------------------------------------------- | ------- |
| message        | 消息文字                          | `string \| VNode`                                        | -       |
| type           | 主题类型                          | `enum` - `success \| warning \| error \| danger \| info` | info    |
| duration       | 显示时间，设置为 0 则不会自动关闭 | `number`                                                 | 3000    |
| showClose      | 是否显示关闭按钮                  | `boolean`                                                | false   |
| center         | 文字是否居中                      | `boolean`                                                | false   |
| offset         | Message 距离窗口顶部的偏移        | `number`                                                 | 10      |
| transitionName | 自定义 CSS 过渡动画名称           | `string`                                                 | fade-up |

### Handler

| Name  | Description  | Type         |
| ----- | ------------ | ------------ |
| close | 关闭 Message | `() => void` |
