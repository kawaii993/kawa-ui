import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from '@kawa-ui/utils'

export const kawaButton = withInstall(Button)
export const kawaButtonGroup = withInstall(ButtonGroup)

export * from './types'