export default {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
}