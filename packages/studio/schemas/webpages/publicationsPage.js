export default {
  name: 'publicationsPage',
  title: 'Publications page',
  type: 'document',
  fields: [
    {
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [{type: 'reference', to: {type: 'publication'}}],
      validation: Rule => Rule.min(1)
    },
  ],
}