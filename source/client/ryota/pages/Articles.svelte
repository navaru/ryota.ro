<script context="module">
	import { http } from "@nore/pwa";
	import ro from "$ryota/lang/ro";

	export function load({ id }) {
		return http
			.get(`/api/notion/page/${ro.notion.blog}`)
			.then(reply => reply.body);
	}
</script>

<script>
	import Articles from "$ryota/components/Articles";
	import MainBar from "$ryota/components/MainBar";
	import Loader from "$ryota/components/Loader";

	export let state = null;
	export let data = null;
	export let error = null;

	function toArticles(page) {
		const collection = page.content[0].collection;

		return collection.pages.map(page => ({
			link: page.id,
			title: page.title,
			tagline: page.attributes.Tagline,
			category: page.attributes.Category,
			layout: page.attributes.Layout,
		}));
	}
</script>

<style>
	.container {
		flex: 1;
		background-color: var(--color-background);
		color: var(--color-foreground);
	}

	.title {
		margin-top: 40ru;
		line-height: 36ru;
		font-size: 28ru;
		font-family: var(--font-display);
		text-align: center;
		color: var(--color-dark-30);
	}
	@media (min-width: 840px) {
		.title {
			padding: 0 12%;
			margin-top: 80ru;
			line-height: 48ru;
			font-size: 40ru;
		}
	}

	.articles {
		margin: 40ru 8ru 8ru;
	}
	.articles.isLoading {
		display: flex;
		justify-content: center;
	}
	@media (min-width: 840px) {
		.articles {
			margin-top: 100ru;
		}
	}
</style>

<svelte:head>
	<title>Articole</title>
</svelte:head>

<b class="container">
	<MainBar />

	<b class="title">Articole</b>
	<b class="articles" class:isLoading={state === 'loading'}>
		{#if data}
			<Articles list={toArticles(data)} />
		{:else if state === 'loading'}
			<Loader />
		{/if}
	</b>
</b>
