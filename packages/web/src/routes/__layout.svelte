<script lang=ts context=module>
  import { siteTitle } from '$lib/stores/title'
  import { sanity } from '$lib/client'
  /**
  * @type {import('@sveltejs/kit').Load}
  */
  export async function load() {
    const titleQuery = `*[_type == 'settings'][0]{ siteTitle }`
    const titleData = await sanity.fetch(titleQuery)
    siteTitle.set(titleData.siteTitle)

    return { props: {} }
  }
</script>
<script lang=ts>
  import './base.css'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { title } from '$lib/stores/title'
  import { page } from '$app/stores'

  $:basePath = $page.url.pathname
</script>

<Header/>
<div class="container main-wrap">
  {#if !!$title && basePath !== '/'}
    <h1>{$title}</h1>
  {/if}
  <div class="content">
    <slot/>
  </div>
</div>
<Footer />

<style>
  .main-wrap {
    z-index: 101;
    position: relative;
    margin-top: -150px;
  }
  .content {
    box-shadow: var(--shadow);
    background-color: var(--white);
    padding: 2rem;
    min-height: 450px;
    margin-bottom: 50px;
  }
</style>
