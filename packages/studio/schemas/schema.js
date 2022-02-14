// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import seo from './seo'

import aboutPage from './webpages/aboutPage'
import contactPage from './webpages/contactPage'
import homePage from './webpages/homePage'
import publicationsPage from './webpages/publicationsPage'
import teamPage from './webpages/teamPage'

import publication from './publication'
import teamMember from './teamMember'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Webpages
    aboutPage,
    contactPage,
    homePage,
    publicationsPage,
    teamPage,
    author,
    blockContent,
    category,
    post,
    publication,
    teamMember,
    seo
  ]),
})