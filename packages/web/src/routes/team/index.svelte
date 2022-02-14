<script lang=ts context=module>
  import { title } from '$lib/stores/title'
  import { sanity } from '$lib/client'

  title.set('Our Team')

  export const load = async () => {
    const query = `*[_type == 'teamPage'][0]`
    const data = await sanity.fetch(query)

    return {
      status: 200,
      props: {
        data
      }
    }
  };
</script>
<script lang=ts>
  import PortableText from '@portabletext/svelte'
  import { urlFor } from '$lib/client'
  export let data

  $:({ teamMembers } = data)
</script>

<div class="member-grid">
  {#each teamMembers as member}
    <article>
      <div class="img-wrap">
        {#if member.image}
          <img src={urlFor(member.image).url()} alt={member.name}/>
        {:else}
          <img src="/images/avatar.png" alt="A Placeholder image of a person's silouhette"/>
        {/if}
        <div class="img-border"></div>
      </div>
      <header>
        <h2>{member.name}</h2>
        <p class="pos">{member.position}</p>
        <PortableText blocks={member.bio}/>
      </header>
    </article>
  {/each}
</div>

<style>
  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    grid-gap: 1rem;
  }

  article {
    width: clamp(150px, calc(200px + 15vw), 275px);
    max-width: 100%;
  }

  h2 {
    font-size: clamp(1.25rem, calc(1.25rem + 1vw), 1.75rem);
    margin-bottom: 5px;
  }

  .img-wrap {
    max-width: 100%;
    margin-bottom: 10px;
    position: relative;
  }
  img {
    max-width: 100%;
  }
  .img-border {
    position: absolute;
    top: 3px;
    right: 3px;
    bottom: 7px;
    left: 3px;
    border: 3px dashed var(--white);
  }

  .pos {
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 95%;
    margin-bottom: 10px;
    font-style: italic;
    padding-bottom: 3px;
    /* border-bottom: 3px dashed var(--black); */
  }
</style>