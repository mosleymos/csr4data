export function router(){

    if (location.hash === '') {
        console.log("Visite de home");
        let $about_time = document.getElementById("about_time")
        $about_time.style = `visibility: hidden;`;
        let $list_articles = document.getElementById("list_articles")
        $list_articles.style = `visibility: hidden;`;
    }

    if (location.hash === '#articles') {
        console.log("Visite d'articles");
        let $about_time = document.getElementById("about_time")
        $about_time.style = `visibility: hidden;`;
        let $list_articles = document.getElementById("list_articles")
        $list_articles.style = `visibility: visible;`; }

    if (location.hash === '#about') {
        console.log("Visite de about");
        let $about_time = document.getElementById("about_time")
        $about_time.style = ` visibility: visible;`;
        let $list_articles = document.getElementById("list_articles")
        $list_articles.style = `visibility: hidden;`;
    }
}
