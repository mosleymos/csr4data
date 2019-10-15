<script>
  import HomePageArticle from './HomePageArticle.svelte'
  let articles = [
    { title: "Hello World", descriptif: "developpemeent en svelte javascript c'est cool" },
    { title: "Ruby", descriptif: "Programmation Ruby en code rapide" },
    { title: "Rust", descriptif: "Rust for real programmers" }
  ]
</script>

<h1>Articles</h1>
{#each articles as article }
  <HomePageArticle article={article} />
{/each}
