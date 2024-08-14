import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect } from '@storybook/test'

import { kawaButton } from 'kawa-ui'

type Story = StoryObj<typeof kawaButton> & { argTypes: ArgTypes };

const meta: Meta<typeof kawaButton> = {
  title: "Example/Button",
  component: kawaButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (value: string) => `
<div style="marginL5px">
${value}
</div>
`;


export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: (args) => ({
    components: { kawaButton },
    setup() {
      return { args };
    },
    template: container(
      `<kawa-button v-bind="args">{{args.content}}</kawa-button>`
    ),
  }),

  play:async({canvasElement,args,step})=>{
    const canvas = within(canvasElement);
    await step('Click btn',async()=>{
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(args.onClick).toHaveBeenCalled();
  }

}

export default meta;