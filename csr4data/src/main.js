import {  router  } from './router.js'
import App from './App.svelte';
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


// function locationHashChanged() {
//     debugger
//     if (location.hash === '#about') {
//         console.log("You're visiting a cool feature!");
//         let $about_time = document.getElementById("about_time")
//         $about_time.style = `
//             visibility: visible;
//         `
//     }
// }

window.onhashchange = router;

export default app;
