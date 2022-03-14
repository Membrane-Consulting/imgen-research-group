<script lang=ts context=module>
  import { sanity, urlFor } from '$lib/client'
  import { title, siteTitle } from '$lib/stores/title'
  title.set('About') 

  export const load = async () => {
    const query = `*[_type == 'aboutPage'][0]`
    const data = await sanity.fetch(query)

    return {
      props: { data }
    }
  }
</script>
<script lang=ts>
  import PortableText from '@portabletext/svelte'
  import ImageBlock from '$lib/components/ImageBlock.svelte'
  import SvelteSeo from 'svelte-seo'

  export let data

  $:({ content, seo } = data)
</script>

<SvelteSeo 
  title='{$siteTitle} | {seo.title}'
  description={seo.description}
  openGraph={{
    title: `${$siteTitle} | ${seo.title}`,
    description: seo.description,
    url: 'https://www.imgenresearchgroup.com/about',
    type: 'website',
    images: [
      {
        url: urlFor(seo.image).width(850).height(650).url(),
        width: 850,
        height: 650,
        alt: 'Imgen Research Group'
      }
     ]
  }}
/>

<PortableText 
  blocks={content}
  serializers={{
    types: {
      image: ImageBlock,
    },
  }}
/>