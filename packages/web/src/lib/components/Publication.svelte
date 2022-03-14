<script lang=ts>
  import PortableText from '@portabletext/svelte'
  import {urlFor} from '$lib/client'
  export let title
  export let abstract
  export let author
  export let pdf

  // $:console.log(pdf)
</script>

<article>
  
  <h2>{title}</h2>
  <p>{author}</p>
  <PortableText blocks={abstract}/>
  <a href={pdf} download class="btn">Download</a>
</article>

<style>
  article {
    padding: 10px 0;
    border-bottom: var(--border);
    margin-bottom: 2rem;
  }

  a {
    display: block;
    max-width: max-content;
    margin-left: auto;
  }
</style>