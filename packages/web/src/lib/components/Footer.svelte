<script lang=ts>
   
</script>

<footer>
  <div class="container footer-inner">
    <div>
      <ul>
        <li><a href="/team">Team</a></li>
        <li><a href="/publications">Publications</a></li>
        <li><a href="/apply">Apply for Internship</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><a href="/legal/terms">Terms of Service</a></li>
        <li><a href="/legal/privacy">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <span class="copyright">© Imgen Research LLC {new Date().getFullYear()}</span>
</footer>

<style>
  footer {
    background-color: var(--dark-blue);
    padding-bottom: 20px;
    padding-top: 15px;
  }
  .footer-inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1.2rem 0;
    
    border-top: 3px dashed var(--white);
  }
  ul {
    list-style: none;
  }
  .copyright {
    color: var(--white);
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin: 10px auto;
    text-align: center;
    display: block;
  }
</style>