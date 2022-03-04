export default {
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
  ],
}