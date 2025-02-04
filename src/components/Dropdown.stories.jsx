import MultiSelectDropdown from "./Dropdown";

export default {
  title: "Component/Select Dropdown Field",
  component: MultiSelectDropdown,
  argTypes: {
    id: { control: "text" },
    withSearch: { control: "boolean" },
    usePortal: { control: "boolean" },
    multiple: { control: "boolean" },
  },
};

const Template = (args) => <MultiSelectDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "sdd-1",
  placeholder: "Select options...",
  options: [
    "Option 1",
    "Option with icon",
    "Long Long Option 3",
    "Long Long Long Option 4",
    "Long Long Long Long Option 5",
    "Long Long Long Long Long Option 6",
  ],
  label: "Label",
  withSearch: true,
  usePortal: false,
  multiple: true,
};
