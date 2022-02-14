export default {
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Page Content',
      default: true,
    },
    {
      name: 'fields',
      title: 'Form Fields',
    }
  ],
  fields: [
    {
      name: 'content',
      title: 'Page Content',
      type: 'blockContent',
      group: 'content',
    },
    {
      name: 'subjectOptions',
      title: 'Subject Field Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The options for "Message Subject"',
      group: 'fields',
    },
  ],
}