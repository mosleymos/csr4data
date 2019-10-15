<script>
    import Header from './Header.svelte';
    import HomePageArticle from './HomePageArticle.svelte';
    import Footer from './Footer.svelte';
    import About from './About.svelte';
    import ListeHomePageArticles from './ListeHomePageArticle.svelte';

</script>

<Header/>
<div id="list_articles">
  <ListeHomePageArticles/>
</div>
<div id="about_time">
  <About/>
</div>
<Footer/>

<style>
 #about_time{
  visibility: hidden;
}
 #list_articles{
  visibility: hidden;
}
</style>
