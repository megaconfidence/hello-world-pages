import './style.css';

(async function start() {
	const hello = await fetch('/hello').then((r) => r.text());
	document.querySelector('h1')!.textContent = hello;
})();
