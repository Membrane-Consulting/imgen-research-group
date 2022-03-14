<script lang=ts context=module>
  import { sanity, urlFor } from '$lib/client'
  import { title, siteTitle } from '$lib/stores/title'
  

  export const load = async ({ params }) => {
    const { slug } = params
    const query = `*[_type == 'teamMember' && slug.current == '${slug}'][0]`
    const data = await sanity.fetch(query)

    title.set(data.name)

    return {
      props: {
        member: data
      }
    }
  }
</script>
<script lang=ts>
  import PortableText from '@portabletext/svelte'
  import SvelteSeo from 'svelte-seo'

  export let member

  $:({ image, name, position, bio, slug} = member)
</script>

<SvelteSeo 
  title='{$siteTitle} | {name}'
  description='{name}, {position} at Imgen Research Group'
  openGraph={{
    title: `${$siteTitle} | ${name}`,
    description: `${name}, ${position} at Imgen Research Group`,
    url: `https://www.imgenresearchgroup.com/team/${slug.current}`,
    type: 'website',
  }}
/>

<section>
  <div class="img-wrap">
    {#if image}
      <img src={urlFor(image).url()} alt={name}/>
    {:else}
      <img src="/images/avatar.png" alt="A person's silouhette"/>
    {/if}
    <div class="img-border"></div>
  </div>
  <div class="content-wrap">
    <p class="pos">{position}</p>
    <PortableText blocks={bio}/>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .img-wrap {
    max-width: 400px;
  }

  .content-wrap {
    max-width: 450px;
  }

</style>