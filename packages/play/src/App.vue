<!-- <script setup lang="ts">

</script>

<template>
  <kawa-button type="primary" size="small">test</kawa-button>
</template>

-->


<script setup lang="ts">
import { ref, reactive } from "vue";

const openVal = ref(["a"]);
const loading = ref(false);

const formData = reactive({
  email: "123",
  password: "",
  confirmPwd: "",
});
const formRules: any = {
  email: [{ type: "email", required: true, trigger: "blur" }],
  password: [
    { type: "string", required: true, trigger: "blur", min: 3, max: 5 },
  ],
  confirmPwd: [
    { type: "string", required: true, trigger: "blur" },
    {
      validator: (_: typeof formRules, value: string) =>
        value === formData.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
};


setInterval(() => {
  loading.value = !loading.value;
}, 2000);


</script>

<template>
  <div>
    <p>
      <kawa-button :use-throttle="false">Default</kawa-button>
      <kawa-button type="primary">Primary</kawa-button>
      <kawa-button type="success" @click="console.log('click')">Success</kawa-button>
      <kawa-button type="info">Info</kawa-button>
      <kawa-button type="warning">Warning</kawa-button>
      <kawa-popconfirm title="Are you sure to delete this?">
        <kawa-button type="danger">Danger</kawa-button>
      </kawa-popconfirm>
    </p>
    <p>
      <kawa-button plain>Plain</kawa-button>
      <kawa-button type="primary" plain>Primary</kawa-button>
      <kawa-button type="success" plain>Success</kawa-button>
      <kawa-button type="info" plain>Info</kawa-button>
      <kawa-button type="warning" plain>Warning</kawa-button>
      <kawa-button type="danger" plain>Danger</kawa-button>
    </p>
    <p>
      <kawa-button round>Round</kawa-button>
      <kawa-button type="primary" round>Primary</kawa-button>
      <kawa-button type="success" round>Success</kawa-button>
      <kawa-button type="info" round>Info</kawa-button>
      <kawa-button type="warning" round loading>Warning</kawa-button>
      <kawa-button type="danger" round>Danger</kawa-button>
    </p>
    <p>
      <kawa-button icon="search" circle />
      <kawa-button type="primary" icon="edit" circle />
      <kawa-button type="success" icon="check" circle />
      <kawa-button type="info" icon="message" circle />
      <kawa-button type="warning" icon="star" circle />
      <kawa-button type="danger" icon="trash" circle />
    </p>
    <p>
      <kawa-button-group size="small" type="primary">
        <kawa-button round>Round</kawa-button>
        <kawa-button type="primary" round>Primary</kawa-button>
        <kawa-button type="success" round>Success</kawa-button>
        <kawa-button type="info" round>Info</kawa-button>
        <kawa-button type="warning" round loading>Warning</kawa-button>
        <kawa-button type="danger" round>Danger</kawa-button>
      </kawa-button-group>
    </p>
    <kawa-collapse v-model="openVal" accordion>
      <kawa-collapse-item name="a" title="Title a">
        <h1>headline title</h1>
        <div>this is content a</div>
      </kawa-collapse-item>
      <kawa-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </kawa-collapse-item>
      <kawa-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </kawa-collapse-item>
    </kawa-collapse>
  </div>

</template>
