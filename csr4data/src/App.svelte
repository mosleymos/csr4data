<script>
    import Header from './Header.svelte';
    import HomePageArticle from './HomePageArticle.svelte';
    import Footer from './Footer.svelte';
    import About from './About.svelte';
    import ListeHomePageArticles from './ListeHomePageArticle.svelte';
	
//    import { onMount } from 'svelte';


//     async function hasChange(){
// 
//      		const path = window.location.hash.slice(1);
// 			debugger
// 		if(path =="about"){
// 			await fetch('http://localhost:5000/#about').then(r => console.log("ok"))
// 			let $about_page = window.document.getElementById('about_time') 
// 			$about_page.style=`
// 				visibility:visible;
// 
//             `
// 
//         }
// 		/* if(path == "about"){ */
// 		/*   $about_page = document.getElementById('about_time') */
// 		/*    */
//         /* } */
// 
//    }
// 
//    onMount(hasChange)

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
