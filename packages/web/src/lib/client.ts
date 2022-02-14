import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const sanity = sanityClient({
  projectId: 'qvcbexv4',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

const urlFor = (source:SanityImageSource):ImageUrlBuilder => {
  return builder.image(source)
}

export { sanity, urlFor }