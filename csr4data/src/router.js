export function router(){

    if (location.hash === '#about') {
        console.log("You're visiting a cool feature!");
        let $about_time = document.getElementById("about_time")
        $about_time.style = `
            visibility: visible;
        `
    }
}
