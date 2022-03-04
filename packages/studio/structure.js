import S from '@sanity/desk-tool/structure-builder'
import {
  BookIcon,
  CogIcon,
  ComposeIcon,
  EarthGlobeIcon,
  RocketIcon,
  StarIcon,
  UserIcon
} from '@sanity/icons'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Webpages')
        .child(
          S.list()
            .title('Web Content')
            .id('web-content')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor()
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Home Page')
                )
                .icon(RocketIcon),
              S.listItem()
                .title('About Page')
                .child(
                  S.editor()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('About Page')
                )
                .icon(StarIcon),
              S.listItem()
                .title('Contact Page')
                .child(
                  S.editor()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .title('Contact Page')
                )
                .icon(ComposeIcon)
                ,
                S.listItem()
                .title('Publications Page')
                .child(
                  S.editor()
                    .schemaType('publicationsPage')
                    .documentId('publicationsPage')
                    .title('Publications Page')
                )
                .icon(BookIcon),
                S.listItem()
                .title('Team Page')
                .child(
                  S.editor()
                    .schemaType('teamPage')
                    .documentId('teamPage')
                    .title('Team Page')
                )
                .icon(UserIcon),
                S.listItem()
                .title('Application Pages')
                .child(
                  S.editor()
                    .schemaType('applicationsPages')
                    .documentId('applicationsPages')
                    .title('Application Pages')
                )
                .icon(UserIcon),
            ])
        )
        .icon(EarthGlobeIcon),
      S.divider(),
      S.listItem()
            .title('Settings')
            .child(
              S.editor()
                .schemaType('settings')
                .documentId('settings')
                .title('Settings')
            )
            .icon(CogIcon)
    ])