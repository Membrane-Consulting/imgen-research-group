<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'
  

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
  import {urlFor} from '$lib/client'
  import PortableText from '@portabletext/svelte'
  export let member

  $:console.log(member)
</script>

<section>
  <div class="img-wrap">
    {#if member.image}
      <img src={urlFor(member.image).url()} alt={member.name}/>
    {:else}
      <img src="/images/avatar.png" alt="A person's silouhette"/>
    {/if}
    <div class="img-border"></div>
  </div>
  <div class="content-wrap">
    <p class="pos">{member.position}</p>
    <PortableText blocks={member.bio}/>
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