export default {
  name: 'Input',
  summary:
    'The Input specifies an input field where the user can enter data. Input elements are used within a <form> element to declare input controls that allow users to input data. An input field can vary in many ways, depending on the type attribute.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Input
    name="myInput"
    placeholder="Enter a value"
    label="Input label"
    icon="fa fa-user"
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Size',
      summary: '',
      code: `<React.Fragment>
    <Input name="Large" value="This is an large input" placeholder="Enter a value" icon="fa fa-user" size="lg"/>
    <Input name="Normal" value="This is an normal input" placeholder="Enter a value" icon="fa fa-user"/>
    <Input name="Small" value="This is an small input" placeholder="Enter a value" icon="fa fa-user" size="sm"/>
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
