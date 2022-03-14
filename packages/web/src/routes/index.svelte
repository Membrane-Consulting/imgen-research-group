<script lang=ts context=module>
  import { sanity, urlFor } from '$lib/client'
  import { title } from '$lib/stores/title'
  
  export const load = async () => {
    title.set(undefined) 
    const query = `*[_type == 'homePage'][0]{
      textContent,
      introImage,
      featuredPublication-> {
        abstract,
        author-> {
          name
        },
        "pdfURL": pdf.asset->url,
        pubDate,
        title
      },
      seo
    }`
    const seoQuery = `*[_type == 'settings'][0]{ globalSeo }`
    
    const data = await sanity.fetch(query)
    const seoData = await sanity.fetch(seoQuery)

    return {
      props: { data, seoData }
    }
  }
</script>
<script lang=ts>
  import SvelteSeo from 'svelte-seo'
  import Publication from '$lib/components/Publication.svelte'
  import {siteTitle} from '$lib/stores/title'

  export let data
  export let seoData
  $:({ globalSeo } = seoData)
  $:({textContent, introImage, featuredPublication} = data)
  $:({ abstract, author, pdfURL } = featuredPublication)
</script>

<SvelteSeo 
  title='{$siteTitle} | {globalSeo.title}'
  description={globalSeo.description}
  openGraph={{
    title: `${$siteTitle} | ${globalSeo.title}`,
    description: globalSeo.description,
    url: 'https://www.imgenresearchgroup.com',
    type: 'website',
    images: [
      {
        url: urlFor(globalSeo.image).width(850).height(650).url(),
        width: 850,
        height: 650,
        alt: 'Imgen Research Group'
      }
     ]
  }}
/>

<section>
  <div class="intro-image">
    <img src={urlFor(introImage).url()} alt="">
    <div class="img-border"></div>
  </div>
  <div>
    <p>{textContent}</p>
  </div>
</section>
<section class="apply-cta">
  <p>
    Interested in working with us?
    <a href="/apply" class="btn">Apply Now!</a>
  </p> 
  
</section>

<Publication 
  title={featuredPublication.title}
  pdf={pdfURL}
  author={author.name}
  {abstract}
/>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2rem;
  }

  .intro-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .apply-cta {
    background-color: var(--dark-blue);
    color: var(--white);
    margin: 1.5rem -2rem;
    padding: 1.2rem 0;
  }

  .apply-cta > p {
    margin: 0 auto;
    text-align: center;
    line-height: 2;
  }

  .apply-cta > p > a {
    margin-left: 10px;
    display: inline-block;
    line-height: 1.5;
  }

  @media screen and (min-width: 900px){
    section {
      flex-direction: row;
    }
    .intro-image {
      max-width: 50%;
    }
  }
</style>