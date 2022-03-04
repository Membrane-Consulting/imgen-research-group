export default {
  name: 'teamPage',
  title: 'Team page',
  type: 'document',
  groups: [
    {
      name: 'members',
      title: 'Team Members',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'reference', to: {type: 'teamMember'} }],
      group: 'members',
      validation: Rule => Rule.min(1),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}