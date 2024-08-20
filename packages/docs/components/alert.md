---
title: Alert
description: Alert 组件文档

next:
  link: /components/loading
  text: Loading 加载

prev:
  link: /components/dropdown
  text: Dropdown 下拉菜单
---

::: tip
**🚧 组件库更新通知 🚧**：我们正在努力完善我们的组件库。
:::


# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 `type` 属性指定，为 `success | warning | danger | info` , 默认值为 `info`。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 主题

通过设置 `effect` 属性来改变主题(light|dark)，默认为 `light`。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 不可关闭

可以设置 Alert 组件是否为可关闭状态， `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 展示图标

通过设置 `show-icon` 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 文字居中

使用 `center` 属性来让文字水平居中。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 文字描述

除了必填的 `title` 属性外，你可以设置 `description` 属性来帮助你更好地介绍，我们称之为辅助性文字。

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## 带图标和描述

::: tip
🔨 **施工中**：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。
:::

## Alert API

### Props

| Name        | Description  | Type                                                 | Default |
| ----------- | ------------ | ---------------------------------------------------- | ------- |
| title       | Alert 标题   | `string`                                             | —       |
| type        | Alert 类型   | `enum` - `'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| description | 描述性文本   | `string`                                             | —       |
| closable    | 是否可以关闭 | `boolean`                                            | true    |
| center      | 文字是否居中 | `boolean`                                            | false   |
| show-icon   | 是否展示图标 | `boolean`                                            | false   |
| effect      | 主题样式     | `enum` - `'light'\| 'dark'\`                         | light   |

### Events

| Name  | Description             | Type                         |
| ----- | ----------------------- | ---------------------------- |
| close | 关闭 Alert 时触发的事件 | `(event: MouseEvent)=> void` |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | 默认插槽，用于设置 Alert 的内容描述 |
| title   | 标题的内容                          |

### Expose

| Name  | Description | Type         |
| ----- | ----------- | ------------ |
| open  | 打开 Alert  | `() => void` |
| close | 关闭 Alert  | `() => void` |
