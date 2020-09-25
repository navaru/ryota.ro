import { ms } from "@nore/std/time";
import { log, on, use } from "@nore/cms";
import Notion from "@nore/notion";
import config from "$server/config";

on("ready", async () => {
	const http = await use("nore/http");
	const notion = new Notion({ token: config.notion.token });
	const cache = new Map();

	http.on("GET /api/notion/page/:id", async ({ params }, reply) => {
		if (params.id?.length < 32) {
			return reply.error(400, "Invalid record ID");
		}

		if (cache.has(params.id)) {
			return cache.get(params.id);
		}

		const page = await notion.page(params.id);

		if (!page) {
			// TODO: this is not implemented (reply.error)
			return reply.error(404, "Page not found");
		}

		cache.set(params.id, page);

		return page;
	});

	http.on("GET /api/notion/sync/:id", async ({ params }, reply) => {
		if (cache.has(params.id)) {
			cache.delete(params.id);
		} else {
			cache.clear();
		}

		return { sync: params.id };
	});
});
