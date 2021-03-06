import seoTitle from "../components/seoTitle";

export default {
  name: 'seo',
  title: 'Seo',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      inputComponent: seoTitle,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A description of the page\'s intention',
      validation: Rule => Rule.max(200),
    },
  ],
}