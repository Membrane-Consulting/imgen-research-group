<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'
  title.set('Terms of Service') 

  export const load = async () => {
    const query = `*[_type == 'settings'][0]`
    const data = await sanity.fetch(query)

    return {
      props: {
        data
      }
    }
  }
</script>
<script lang=ts>
  import PortableText from '@portabletext/svelte'
  import ImageBlock from '$lib/components/ImageBlock.svelte'

  export let data
</script>

<PortableText 
  blocks={data.termsOfService}
  serializers={{
    types: {
      image: ImageBlock,
    },
  }}
/>