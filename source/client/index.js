import global from '@nore/std/global';
import { http } from '@nore/web';
import Ryota from '$ryota/index.svelte';
import ro from '$ryota/lang/ro';

const ryota = new Ryota({
	target: document.getElementById('canvas'),
	props: global.STATE,
	hydrate: true,
});

window.addEventListener('keydown', (event) => {
	if (event.ctrlKey && event.key === 'r') {
		if (location.pathname.includes('/articol/')) {
			const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

			http.get(`/api/notion/sync/${id}`).then(reload);
		} else {
			http.get(`/api/notion/sync/${ro.notion.blog}`).then(reload);
		}

		function reload() {
			location.reload();
		}

		event.preventDefault();
	}
});
