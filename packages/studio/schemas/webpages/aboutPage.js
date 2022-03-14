export default {
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Page Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    }
  ],
  fields: [
    {
      name: 'content',
      title: 'Page Content',
      type: 'blockContent',
      group: 'content'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}