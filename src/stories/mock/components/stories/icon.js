import icons from '../icons';

let generateCode = '';
generateCode += `<Container>
    <Link href="https://fontawesome.com/v4.7.0/icons/" tooltip="View all icons" target="_blank" className="btn btn-primary float-right m-3">View all icons</Link >
    <div className="clearfix" />
    <Row>`;
// eslint-disable-next-line array-callback-return
icons.map(icon => {
  generateCode += `
      <Column className="col col-xs-3 col-sm-2 text-center">
          <div className="p-2 float-left">
              <Icon icon='${icon}' className='fa-2x' />
              <span style={{ fontSize: '12px' }} className='d-block'>${icon}</span>
          </div>
      </Column>`;
});
generateCode += `
    </Row>
</Container>`;

export default {
  name: 'Icon',
  summary: 'Icon element.',
  import: '',
  withStyles: true,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Icon icon="fa fa-cubes" className="fa-3x" />`,
      tabsActive: ['code']
    },
    {
      name: 'Differents sizes',
      summary: '',
      code: `<>
    <Icon icon="fa fa-home" className="fa-1x" />
    <Icon icon="fa fa-home" className="fa-2x" />
    <Icon icon="fa fa-home" className="fa-3x" />
    <Icon icon="fa fa-home" className="fa-4x" />
    <Icon icon="fa fa-home" className="fa-5x" />
</>`,
      tabsActive: []
    },
    {
      name: 'Differents colors',
      summary: '',
      code: `<>
    <Icon icon="fa fa-home" className="fa-1x text-primary" />
    <Icon icon="fa fa-home" className="fa-2x text-secondary" />
    <Icon icon="fa fa-home" className="fa-3x text-success" />
    <Icon icon="fa fa-home" className="fa-4x text-danger" />
    <Icon icon="fa fa-home" className="fa-5x text-warning" />
</>`,
      tabsActive: []
    },
    {
      name: 'All Icons',
      summary: '',
      code: generateCode,
      tabsActive: []
    }
  ]
};
