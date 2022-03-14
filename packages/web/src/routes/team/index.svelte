<script lang=ts context=module>
  import { title, siteTitle } from '$lib/stores/title'
  import { sanity, urlFor } from '$lib/client'

  export const load = async () => {
    title.set('Our Team')
    const query = `*[_type == 'teamPage'][0]{
      "teamMembers": teamMembers[]-> {
        name,
        slug,
        position,
        bio
      },
      seo
    }`
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
  import SvelteSeo from 'svelte-seo'
  
  export let data

  $:({ teamMembers, seo } = data)
</script>

<SvelteSeo 
  title='{$siteTitle} | {seo.title}'
  description={seo.description}
  openGraph={{
    title: `${$siteTitle} | ${seo.title}`,
    description: seo.description,
    url: 'https://www.imgenresearchgroup.com/team',
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

<section class="member-grid">
  {#each teamMembers as member}
    <article>
      <div class="img-wrap">
        {#if member.image}
          <img src={urlFor(member.image).url()} alt={member.name}/>
        {:else}
          <img src="/images/avatar.png" alt="A person's silouhette"/>
        {/if}
        <div class="img-border"></div>
      </div>
      <header>
        <h2><a href="/team/{member.slug.current}">{member.name}</a></h2>
        <p class="pos">{member.position}</p>
        <PortableText blocks={member.bio}/>
      </header>
    </article>
  {/each}
</section>

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
    margin-bottom: 5px;
    line-height: 1;
  }

  h2 > a {
    font-size: clamp(1.25rem, calc(1.25rem + 1vw), 1.5rem);
    color: var(--black);
    line-height: 1;
  }

  h2 > a:hover {
    text-decoration: underline;
  }

</style>