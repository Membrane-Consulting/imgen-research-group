export default {
  name: 'applicationsPages',
  title: 'Applications pages',
  type: 'document',
  description: 'Content for all application pages',
  groups: [
    {
      name: 'internship',
      title: 'Internship',
      default: 'true',
    },
    {
      name: 'staff',
      title: 'Staff',
    },
  ],
  fields: [
    {
      name: 'internImage',
      title: 'Intern Cover Image',
      type: 'image',
      group: 'internship',
    },
    {
      name: 'staffImage',
      title: 'Staff Cover Image',
      type: 'image',
      group: 'staff',
    },
  ],
}