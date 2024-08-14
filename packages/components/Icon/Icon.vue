<script setup lang="ts"">
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { omit } from "lodash-es";
import { computed } from 'vue';

defineOptions({
    name: 'kawaIcon',
    inheritAttrs: false,
});

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
    <i 
    class="kawa-icon" 
    :class="{ [`kawa-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
    >
        <font-awesome-icon v-bind="filterProps" />
    </i>
</template>

<style scoped>
.kawa-icon {
    --kawa-icon-color: inherit;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: var(--kawa-icon-color);
    font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
    .kawa-icon--$(val) {
        --kawa-icon-color: var(--kawa-color-$(
                val)
        );
}
}
</style>