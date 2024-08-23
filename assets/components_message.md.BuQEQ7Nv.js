import{_ as t,a as e,o as a,ab as s}from"./chunks/framework.uTkN8JXe.js";const u=JSON.parse('{"title":"Message","description":"Message 组件文档","frontmatter":{"title":"Message","description":"Message 组件文档","next":{"link":"/components/messagebox","text":"MessageBox 消息弹出框"},"prev":{"link":"/components/loading","text":"Loading 加载"}},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md"}'),o={name:"components/message.md"},d=s('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>🚧 组件库更新通知 🚧</strong>：我们正在努力完善我们的组件库。</p></div><h1 id="message-消息提示" tabindex="-1">Message 消息提示 <a class="header-anchor" href="#message-消息提示" aria-label="Permalink to &quot;Message 消息提示&quot;">​</a></h1><p>常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>🔨 <strong>施工中</strong>：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>🔨 <strong>施工中</strong>：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。</p></div><h2 id="不同类型" tabindex="-1">不同类型 <a class="header-anchor" href="#不同类型" aria-label="Permalink to &quot;不同类型&quot;">​</a></h2><p>用来显示「成功、警告、消息、错误」类的操作反馈。通过 <code>type</code> 属性来配置。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>🔨 <strong>施工中</strong>：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。</p></div><h2 id="可关闭的" tabindex="-1">可关闭的 <a class="header-anchor" href="#可关闭的" aria-label="Permalink to &quot;可关闭的&quot;">​</a></h2><p>默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true 此外，和 Notification 一样，Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为 0 便表示该消息不会被自动关闭。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>🔨 <strong>施工中</strong>：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。</p></div><h2 id="文字居中" tabindex="-1">文字居中 <a class="header-anchor" href="#文字居中" aria-label="Permalink to &quot;文字居中&quot;">​</a></h2><p>通过 <code>center</code> 属性来配置文字是否居中。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>🔨 <strong>施工中</strong>：我们的团队正在全力以赴，以确保为您提供最高质量的组件。请稍后再来查看这些组件的最新进展。</p></div><h2 id="全局方法" tabindex="-1">全局方法 <a class="header-anchor" href="#全局方法" aria-label="Permalink to &quot;全局方法&quot;">​</a></h2><p>Message 组件提供了全局方法 <code>$message</code>，在 Vue 实例中可以作为 <code>this.$message</code> 使用。</p><h2 id="单独引用" tabindex="-1">单独引用 <a class="header-anchor" href="#单独引用" aria-label="Permalink to &quot;单独引用&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { kawaMessage } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;kawa-ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="message-api" tabindex="-1">Message API <a class="header-anchor" href="#message-api" aria-label="Permalink to &quot;Message API&quot;">​</a></h2><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>type</td><td>主题类型</td><td><code>enum</code> - <code>success | warning | error | danger | info</code></td><td>info</td></tr><tr><td>duration</td><td>显示时间，设置为 0 则不会自动关闭</td><td><code>number</code></td><td>3000</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td><code>boolean</code></td><td>false</td></tr><tr><td>offset</td><td>Message 距离窗口顶部的偏移</td><td><code>number</code></td><td>10</td></tr><tr><td>transitionName</td><td>自定义 CSS 过渡动画名称</td><td><code>string</code></td><td>fade-up</td></tr></tbody></table><h3 id="handler" tabindex="-1">Handler <a class="header-anchor" href="#handler" aria-label="Permalink to &quot;Handler&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>close</td><td>关闭 Message</td><td><code>() =&gt; void</code></td></tr></tbody></table>',24),i=[d];function r(c,n,l,h,p,g){return a(),e("div",null,i)}const b=t(o,[["render",r]]);export{u as __pageData,b as default};