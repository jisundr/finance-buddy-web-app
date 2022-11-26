import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Container } from "./Container";

export default {
  title: "Components/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "This is a container",
  css: {
    backgroundColor: "$neutral100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
};
