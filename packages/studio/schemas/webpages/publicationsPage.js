export default {
  name: 'publicationsPage',
  title: 'Publications page',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Page Description',
      type: 'blockContent',
    },
    {
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [{type: 'publication'}],
      validation: Rule => Rule.min(1)
    },
  ],
}