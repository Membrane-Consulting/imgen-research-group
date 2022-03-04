<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'
  title.set('Contact') 

  export const load = async () => {
    const query = `*[_type == 'contactPage'][0]`
    const data = await sanity.fetch(query)
    return {
      props: { data }
    }
  }
</script>
<script lang=ts>
  import Image from '$lib/components/Image.svelte'
  import { page } from '$app/stores'

  export let data

  $: console.log(data)

  $: status = $page.url.searchParams.get("status")
</script>

<section>
  <Image image={data.image} border={true}/>

  <form action="/api/contact" method="POST">
    <label for="name" hidden aria-hidden="false">Name</label>
    <input 
      type="text" 
      name="name" 
      placeholder="Your Name" 
      required 
    >

    <label for="email" hidden aria-hidden="false">Email</label>
    <input 
      type="email" 
      name="email" 
      placeholder="Your Email" 
      required 
    >

    <label for="reason" hidden aria-hidden="false">Message Subject</label>
    <select name="reason">
      {#each data.subjectOptions as option, index }
        {#if index === 0 }              
          <option value={option} selected>{option}</option>
        {:else}
          <option value={option}>{option}</option>
        {/if}
      {/each}
    </select>

    <label for="message" hidden aria-hidden="false">Message</label>
    <textarea
      name="message" 
      placeholder="Your Message" 
      required 
      
    />    
    {#if status === 'success'}
      <input class="btn-hollow" type="submit" value="Message Sent!">
    {:else if status === 'error'}
      <input class="btn-hollow" type="submit" value="Error, please try again.">
    {:else}
      <input class="btn-hollow" type="submit" value="Send">
    {/if}
  </form>
</section>

<style>
  section {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 250px;
  }

  input, select, textarea {
    font-size: 1.2rem;
    padding: 5px;
    border: var(--border);
  }

  select {
    background-color: var(--white);
  }

  input:focus, select:focus, textarea:focus {
    outline: 2px dashed var(--blue);
    outline-offset: 2px;
  }

  textarea {
    resize: none;
    height: 150px;
  }

  @media screen and (min-width: 750px){
    section{
      flex-direction: row;
    }
  }
</style>