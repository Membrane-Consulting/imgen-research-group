export default {
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'pubDate',
      title: 'Publish Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
    {
      name: 'pdf',
      title: 'PDF File',
      type: 'file',
    },
  ],
}