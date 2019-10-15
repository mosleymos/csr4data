import {  router  } from './router.js'
import App from './App.svelte';
const app = new App({
	target: document.body,
	props: { }
});


window.onload = function(event){ console.log("Chargeement ..") }
window.onhashchange = router;

export default app;
