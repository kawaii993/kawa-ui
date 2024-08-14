<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { throttle } from 'lodash-es'
import kawaIcon from '../Icon/Icon.vue';



defineOptions({
    name: 'kawaButton'
});
const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
    // type: 'primary', // 添加默认值
    // size: 'default',  // 添加默认值
    useThrottle: true,
    throttleDuration: 500,
});
const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
    marginRight: slots.default ? "6px" : "0px"
}))

const handleBtnClick = (e: MouseEvent) => {
    emits("click", e);
};
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);


defineExpose<ButtonInstance>({
    ref: _ref,
})

</script>

<template>
    <component :is="tag" ref="_ref" :autofocus="autofocus" class="kawa-button"
        :type="tag === 'button' ? nativeType : void 0" :disabled="disabled || loading ? true : void 0" :class="{
            [`kawa-button--${type}`]: type,
            [`kawa-button--${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled,
            'is-loading': loading,
        }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">

        <template v-if="loading">
            <slot name="loading">
                <kawa-icon class="loading-Icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin />
            </slot>
        </template>
        <kawa-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x" />

        <slot></slot>
    </component>
</template>

<style lang="postcss" scoped>
@import './style.css';
</style>