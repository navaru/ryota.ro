import { log, on, use } from "@nore/cms";
import { render } from "@nore/pwa";
import loadManifest from "$server/utils/loadManifest.js";
import template from "$client/index.html";
import ryota from "$ryota/index";

on("ready", async () => {
	const http = await use("nore/http");

	http.get("*", async (request, reply) => {
		const manifest = await loadManifest();
		const state = { url: request.url };
		const rendered = await render(ryota, state);

		reply.type("text/html");

		return template({
			state: JSON.stringify(rendered.state),
			head: rendered.head,
			content: rendered.html,
			styles: manifest.styles,
			scripts: manifest.scripts,
			preload: manifest.preload,
		});
	});
});
