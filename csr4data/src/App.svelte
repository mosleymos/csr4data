<script>
    import Header from './Header.svelte';
    import HomePageArticle from './HomePageArticle.svelte';
    import Footer from './Footer.svelte';
    import About from './About.svelte';
    import Edit from './Edit.svelte';
    import Accueil from './Accueil.svelte';
    import ListeHomePageArticles from './ListeHomePageArticle.svelte';

   let show = null

    // Sorte de router?
	function handleHashChange(event) {
		console.log("You've changed page", window.location.hash);
        show = window.location.hash
	}
</script>
<svelte:window on:hashchange={handleHashChange}/>

<Header/>
{#if show == null || show == ""}
  <Accueil/>
{/if}
{#if show == "#articles"}
<div id="list_articles">
  <ListeHomePageArticles/>
</div>
{/if}
{#if show == "#about"}
<div id="about_time">
  <About/>
</div>
{/if}
{#if show == "#edit"}
    <Edit/>
{/if}
<Footer/>
