<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'

  export const load = async () => {
    title.set('Publications') 

    const query = `*[_type == 'publicationsPage'][0]{
      "publications": publications[]-> {
        abstract,
        author-> {
          name
        },
        pubDate,
        slug,
        title
      }
    }`
    const res = await sanity.fetch(query)

    return {
      props: {
        data: res,
      }
    }
  }
</script>
<script lang=ts>
  import PortableText from '@portabletext/svelte';
  export let data

  $:({ publications } = data)
</script>

{#each publications as text }
  <article>
    <h2>{text.title}</h2>
    <p>{text.author.name}</p>
    <PortableText blocks={text.abstract}/>
  </article>
{/each}

<style>
  article {
    padding: 10px 0;
    border-bottom: var(--border);
    margin-bottom: 2rem;
  }
</style>