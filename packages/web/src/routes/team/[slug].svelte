<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'
  title.set('Contact') 

  export const load = async ({ params }) => {
    const { slug } = params

    return {
      props: {
        
      }
    }
  }
</script>
<script lang=ts>

</script>

<style>

</style>