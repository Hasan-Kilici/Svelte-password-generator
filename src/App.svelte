<script>
 import './script.js';
 import Passwords from './Component/Passwords.svelte';
 import Generate from './Component/Generate-password.svelte';
</script>
<svelte:head>
  <title>Password Generator</title>
</svelte:head>
<main>
  <Generate/>
  <Passwords/>
</main>
<style>
  main{
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    height:100vh;
  }
</style>
