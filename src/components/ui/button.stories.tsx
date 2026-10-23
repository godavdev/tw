import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "./button"
import { ReactNode } from "react"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "The size of the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button" as ReactNode,
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button" as ReactNode,
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button" as ReactNode,
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button" as ReactNode,
  },
}
