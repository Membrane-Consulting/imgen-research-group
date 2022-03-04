<script lang=ts context=module>
  import { title } from '$lib/stores/title'
  import { sanity } from '$lib/client'
  

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, url, fetch, session, context }) {
    title.set('Apply at Imgen')
    const query = `*[_type == 'applicationsPages'][0]`
    const res = await sanity.fetch(query)

    return {
      props: {
        data: res,
      }
    }
  }
</script>
<script lang=ts>
  import { urlFor } from '$lib/client'
   export let data

   $:console.log(data)
   $:({ internImage, staffImage} = data)
</script>

<section>
  <div class="wrap" style="background-image: url({urlFor(internImage).url()});">
    <a href="/apply/internship">
      Apply for Internship
      <div class="img-border"></div>
    </a>
  </div>
  <div class="wrap" style="background-image: url({urlFor(staffImage).url()});">
    <a href="/apply/staff">
      Apply for Work
      <div class="img-border"></div>
    </a>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .wrap {
    aspect-ratio: 1;
    /* background-image: url('https://cdn.sanity.io/images/qvcbexv4/production/87a8e7fbc09abe5f7a8bf17add81ebb539c6f4e1-10800x7200.jpg?w=1200&fit=fillmax'); */
    background-size: cover;
    background-position: center;
    position: relative;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--overlay);
    font-size: 2rem;
  }

  @media screen and (min-width: 900px){
    section {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>