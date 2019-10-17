<script>
  import HomePageArticle from './HomePageArticle.svelte'
  import { onMount } from 'svelte'
  let articles = []
  const getArticles = async ()=>{
	  const res = await fetch(`/articles.json`);
	  articles = await res.json();
  }
  onMount(getArticles)

</script>

<h1>Articles</h1>
{#each articles as article }
  <HomePageArticle article={article} />
{/each}
