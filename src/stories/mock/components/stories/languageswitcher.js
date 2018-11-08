export default {
  name: 'Language Switcher',
  summary:
    'Website translation, the process of converting text from a source language into a target language, is also known as website globalization. In order to translate a website into other languages, you may need both website internationalization (I18N) and website localization (L10N). This component allow you to easy change the language on your website.',
  import: ``,
  withStyles: true,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<LanguageSwitcher
    showLabel placeholder="Select language..."
    languages={['US', 'FR', 'ES', 'DE']}
    customLabels={{
        US: 'English',
        FR: 'Français',
        ES: 'Español',
        DE: 'Deutsch'
    }}
/>`,
      tabsActive: ['code']
    }
  ]
};
