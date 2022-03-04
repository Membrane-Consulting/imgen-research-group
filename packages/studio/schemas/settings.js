export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'legal',
      title: 'Public Legal Content',
    },
  ],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      group: 'general'
    },
    {
      name: 'globalSeo',
      title: 'Global SEO Settings',
      description: 'If SEO data is not provided for a page, this data will be used as a default.',
      type: 'seo',
      group: 'seo'
    },
    {
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'blockContent',
      group: 'legal',
    },
    {
      name: 'termsOfService',
      title: 'Terms Of Service',
      type: 'blockContent',
      group: 'legal',
    },
  ],
}