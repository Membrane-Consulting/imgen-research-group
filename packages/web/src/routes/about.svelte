<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'
  title.set('About') 

  export const load = async () => {
    const query = `*[_type == 'aboutPage'][0]`
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
  $:console.log(data)
</script>

<PortableText 
  blocks={data.content}
  serializers={{
    types: {
      image: ImageBlock,
    },
  }}
/>

<style>

</style>