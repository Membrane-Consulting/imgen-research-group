export default {
  name: 'publicationsPage',
  title: 'Publications page',
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
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [{type: 'reference', to: {type: 'publication'}}],
      validation: Rule => Rule.min(1),
      group: 'content',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}