<script context="module">
	import { http } from "@nore/pwa";
	import MainBar from "$ryota/components/MainBar";
	import Loader from "$ryota/components/Loader";
	import facebook from "$public/icons/facebook.svg";
	import twitter from "$public/icons/twitter.svg";
	import ro from "$ryota/lang/ro";

	export function load({ id }) {
		return http.get(`/api/notion/page/${id}`).then(reply => reply.body);
	}
</script>

<script>
	import { toHTML } from "@nore/notion";

	export let state = null;
	export let data = null;
	export let error = null;
	export let id = null;

	function toContent(page) {
		return page.content
			.map(toHTML)
			.join("")
			.replace(/href=["'](.*?)["']/g, (href, url) =>
				url.includes("notion.so")
					? `href="/articol/${url.slice(url.lastIndexOf("-") + 1)}"`
					: `${href} target="_blank"`
			);
	}
</script>

<style>
	.container {
		background-color: var(--color-background);
		color: var(--color-foreground);
	}
	.loader {
		margin-top: 28vh;
		display: flex;
		justify-content: center;
	}
	.article {
		margin: 0 auto;
		padding: 0 12ru 40ru;
		max-width: 600ru;
		line-height: 28ru;
		font-size: 18ru;
		font-family: var(--font-serif);
	}
	@media (min-width: 840px) {
		.article {
			margin: 0 auto;
			padding-left: 0;
			padding-right: 0;
			line-height: 32ru;
			font-size: 20ru;
		}
	}

	/*	.footer {
		margin-top: 40ru;
		padding-top: 20ru;
		line-height: 20ru;
		font-size: 14ru;
		border-top: 1px solid var(--color-brand);

		display: flex;
		align-items: center;
	}
	.share {
		font-family: var(--font-display);
		letter-spacing: .05em;
		text-transform: uppercase;
	}
	.icon {
		display: inline-block;
	}
	.icon > :global(svg) {
		width: 24ru;
		height: 24ru;
	}*/
</style>

<svelte:head>
	{#if data}
		<!-- Meta Tags -->
		<title>{data.title}</title>
		<meta name="title" content={data.title} />
		<meta name="description" content={data.attributes.Tagline} />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="article" />
		<meta property="og:url" content="{ro.meta.url}/articol/{data.id}" />
		<meta property="og:title" content={data.title} />
		<meta property="og:description" content={data.attributes.Tagline} />
		<meta property="og:image" content="{ro.meta.url}/featured.jpg" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="{ro.meta.url}/articol/{data.id}" />
		<meta property="twitter:title" content={data.title} />
		<meta property="twitter:description" content={data.attributes.Tagline} />
		<meta property="twitter:image" content="{ro.meta.url}/featured.jpg" />
		<!-- End Meta Tags -->
	{/if}
</svelte:head>

<b class="container">
	<MainBar />

	{#if state === 'loading'}
		<b class="loader">
			<Loader />
		</b>
	{/if}

	{#if state === 'failed'}
		<h3>{error.message}</h3>
	{/if}

	{#if data}
		<b class="article content notion">
			<b class="title">{data.title}</b>

			{#if data.attributes.Tagline}
				<b class="tagline">{data.attributes.Tagline}</b>
			{/if}

			{@html toContent(data)}
		</b>
	{/if}
</b>
