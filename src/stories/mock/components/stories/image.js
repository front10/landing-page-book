export default {
  name: 'Image',
  summary:
    'Simple element image to use on your website. Images can improve the design and the appearance of a web page.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Image
    alt="This is an image example"
    src="/images/backers/woman.svg"
    tooltip="This is a woman"
    width="100"
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Responsive image',
      summary: '',
      code: `<Image
    alt="Responsive image example"
    src="/images/image/214210-P0L8ES-375.jpg"
    tooltip="This is our galaxy"
    width="100%"
/>`,
      tabsActive: []
    },
    {
      name: 'Aligning images',
      summary: '',
      code: `<React.Fragment>
    <Image
        alt="This is an image example"
        src="/images/backers/astronaut.svg"
        tooltip="Float left"
        width="150"
        className="float-left"
    />
    <Image
        alt="This is an image example"
        src="/images/backers/doctor.svg"
        tooltip="Float right"
        width="150"
        className="float-right"
    />
    <div className="clearfix"/>
</React.Fragment>`,
      tabsActive: []
    },
    {
      name: 'Aligning images with classname',
      summary: '',
      code: `<React.Fragment>
    <Image 
        alt="This is an image example"
        src="/images/backers/astronaut.svg" 
        tooltip="Centered with MX-AUTO"
        width="150"
        className="mx-auto d-block"
    />
    <div className="text-center mt-5">
        <Image 
            alt="This is an image example"
            src="/images/backers/doctor.svg" 
            tooltip="Centered with TEXT-CENTER"
            width="150"
        />
    </div>
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
