<script>
  import Language from './Language.svelte'
</script>

<nav>
  <a href="/">
    Tripensiero
  </a>

  <Language/>
</nav>

<style>
  nav {
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background);
    color: var(--primary);
    padding: 0 clamp(25px, 15vw, 15vw);
  }

  nav a {
    text-decoration: none;
    color: var(--primary);
    font-size: 18px;
    font-weight: bold;
  }
</style>