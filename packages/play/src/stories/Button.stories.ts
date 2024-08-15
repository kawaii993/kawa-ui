import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect } from '@storybook/test'

import { kawaButton, kawaButtonGroup } from 'kawa-ui'

type Story = StoryObj<typeof kawaButton> & { argTypes?: ArgTypes };

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

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('Click btn', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(args.onClick).toHaveBeenCalled();
  }

}

export const Circle: Story = {
  args: {
    icon: "search",
  },
  render: (args) => ({
    components: { kawaButton },
    setup() {
      return { args };
    },
    template: container(`
      <kawa-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    groupSize: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    groupDisabled: {
      control: "boolean",
    },
    content1: {
      control: { type: "text" },
      defaultValue: "Button1",
    },
    content2: {
      control: { type: "text" },
      defaultValue: "Button2",
    },
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: (args) => ({
    components: { kawaButton, kawaButtonGroup },
    setup() {
      return { args };
    },
    template: container(`
       <kawa-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <kawa-button v-bind="args">{{args.content1}}</kawa-button>
         <kawa-button v-bind="args">{{args.content2}}</kawa-button>
       </kawa-button-group>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  },
};


export default meta;