<script lang=ts>
   export let text:string
   export let type:'primary'|'secondary'|'hollow'

</script>

<button 
  class="btn"
  class:type
>{text}</button>

<style>

</style>