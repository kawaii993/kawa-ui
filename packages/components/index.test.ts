import type { Plugin } from "vue";
import { describe, it, expect } from "vitest";
import {
  // kawaAlert,
  kawaButton,
  kawaButtonGroup,
  kawaCollapse,
  kawaCollapseItem,
  // kawaDropdown,
  // kawaDropdownItem,
  // kawaForm,
  // kawaFormItem,
  // kawaIcon,
  // kawaInput,
  // kawaLoading,
  // kawaLoadingDirective,
  // kawaLoadingService,
  // kawaMessage,
  // kawaMessageBox,
  // kawaNotification,
  // kawaOption,
  // kawaPopconfirm,
  // kawaSelect,
  // kawaSwitch,
  // kawaTooltip,
  // kawaUpload,
} from "./index";
import { map, get } from "lodash-es";

const components = [
  kawaButton,
  kawaButtonGroup,
  kawaCollapse,
  kawaCollapseItem,
  // kawaIcon,
  // kawaDropdown,
  // kawaDropdownItem,
  // kawaTooltip,
  // kawaMessage,
  // kawaInput,
  // kawaSwitch,
  // kawaSelect,
  // kawaOption,
  // kawaForm,
  // kawaFormItem,
  // kawaAlert,
  // kawaNotification,
  // kawaLoading,
  // kawaUpload,
  // kawaPopconfirm,
  // kawaMessageBox,
] as Plugin[];

describe("components/index.ts", () => {
  it.each(map(components, (c) => [get(c, "name") ?? "", c]))("%s should be exported", (_, component) => {
    expect(component).toBeDefined();
    expect(component.install).toBeDefined()
  });

  // it('kawaLoadingService and kawaLoadingDirective should be exported',()=>{
  //   expect(kawaLoadingService).toBeDefined()
  //   expect(kawaLoadingDirective).toBeDefined()
  // })
});
