export default {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'textContent',
      title: 'Intro Paragraph',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
    },
    {
      name: 'featuredPublication',
      title: 'Featured Publication',
      type: 'reference',
      to: [{type: 'publication'}]
    },
  ],
}