import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall } from "@kawa-ui/utils";

export const kawaCollapse = withInstall(Collapse);
export const kawaCollapseItem = withInstall(CollapseItem);

export * from "./types";
