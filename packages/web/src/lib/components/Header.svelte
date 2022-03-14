<header>
  <div class="container header-inner">
    <a href="/" class="logo-link">
      <img src="/images/logo.png" alt="Imgen Research Group Logo">
    </a>
    <nav>
      <ul>
        <li><a href="/team">Team</a></li>
        <li><a href="/publications">Publications</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/apply" class="btn">Apply</a></li>
      </ul>
    </nav>
  </div>
  <div class="header-filter"></div>
</header>

<style>
  header {
    background-image: url('/images/header-default.jpg');
    background-size: cover;
    background-position: center;
    height: clamp(300px, 22vh, 400px);
    position: relative;
    z-index: 0;
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 10px;
    margin: auto;
    padding-top: 2rem;
    z-index: 100;
    position: relative;
    border-bottom: 3px solid var(--white);
  }

  img {
    width: 250px;
  }

  .logo-link {
    line-height: 0;
  }

  .logo-link:focus {
    outline: 2px dashed var(--blue);
    outline-offset: 2px;
  }

  .header-filter {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    background-color: #182035;
    opacity: 85%;
    z-index: 0;
  }

  nav {
    max-width: 100%;
    overflow-x: scroll;
    padding-top: -7px;
    margin-bottom: -10px;
    padding: 10px 0;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: clamp(5px, calc(5px + 1vw), 15px);
  }

  ul {
    list-style: none;
  }

  @media screen and (min-width: 530px){
    nav{
      overflow-x: unset;
    }
  }
</style>