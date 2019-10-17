<script>
export let article = {
  title: "Lorem Titre",
  descriptif: `
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ` 
}
const { title, descriptif }  =  article

</script>
<section>
<article class="csr-data-article-homepage">
<h3 class="csr-data-article-title"><center>{ title }<center></h3>
<h4 class="csr-data-article-court">{descriptif }</h4>
<a href="#" class="csr-data-en_savoir_plus_btn">En apprendre plus</a>
</article>
</section>

<style>
.csr-data-article-homepage{
  border: 1px solid black;
  margin: 1em 1em;
  padding: 2em 2em;
}

.csr-data-article-title{
	font-size: 2em;
	margin: 0em 0em;
	padding: 0em 0em;
	background-color: #000;
	color: #fff;
	border: 45px solid black;
	
}
.csr-data-article-court{
    padding: 1em 1em;
}
.csr-data-en_savoir_plus_btn{
  border: 2px solid black;
  border-radius: 12px 12px;
  margin: 1em 1em;
  padding: 1em 1em;
  text-decoration: none;
  color: black;
}
.csr-data-en_savoir_plus_btn:hover{
  background-color: black;
  color: white;
}

</style>
