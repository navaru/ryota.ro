<script>
	import { http } from "@nore/pwa";
	import { onMount } from "svelte";
	import logoRyota from "$public/ryota_logo_background.svg";
	import Articles from "$ryota/components/Articles";
	import MainBar from "$ryota/components/MainBar";
	import Loader from "$ryota/components/Loader";
	import ro from "$ryota/lang/ro";

	let articles = [];

	onMount(() => {
		http.get(`/api/notion/page/${ro.notion.blog}`).then(reply => {
			const page = reply.body;
			const collection = page.content[0].collection;

			articles = collection.pages.map(page => ({
				link: page.id,
				title: page.title,
				tagline: page.attributes.Tagline,
				category: page.attributes.Category,
				layout: page.attributes.Layout,
			}));
		});
	});
</script>

<style>
	.container {
		flex: 1;
		background-color: var(--color-background);
		color: var(--color-foreground);
	}
	.intro {
		position: relative;
		margin-top: 60ru;
		text-align: center;
		z-index: 1;
	}
	.intro_title {
		line-height: 36ru;
		font-size: 28ru;
		font-family: var(--font-display);
		color: var(--color-dark-30);
	}
	.intro_subtitle {
		max-width: 400ru;
		margin: 20ru auto 0;
		line-height: 28ru;
		font-size: 18ru;
		font-weight: 300;
		letter-spacing: 0.025em;
	}
	.intro_background {
		display: none;
		position: absolute;
		bottom: 8%;
		left: 50%;
		width: 94%;
		max-width: 760ru;
		transform: translate(-50%, 50%);
		z-index: -1;
	}
	.intro_background > :global(svg) {
		fill: #ece3d8;
	}
	@media (min-width: 600px) {
		.intro_title {
			line-height: 48ru;
			font-size: 36ru;
		}
		.intro_subtitle {
			margin-top: 40ru;
		}
	}
	@media (min-width: 840px) {
		.intro_background {
			display: block;
			bottom: auto;
			top: -56ru;
			width: 100%;
		}
		.intro_subtitle {
			max-width: 500ru;
			padding: 0;
			margin: 64ru auto 0;
			line-height: 32ru;
			font-size: 22ru;
		}
	}

	.articles {
		margin: 80ru 8ru 8ru;
	}
	.articles.isLoading {
		display: flex;
		justify-content: center;
	}
	@media (min-width: 640px) {
		.articles {
			margin-top: 120ru;
		}
	}
	@media (min-width: 860px) {
		.articles {
			margin-top: 120ru;
		}
	}
</style>

<svelte:head>
	<title>Institut de Dezvoltare Socială și Emoțională</title>
</svelte:head>

<b class="container">
	<MainBar />

	<b class="intro">
		<b class="intro_title">
			Institut de Dezvoltare
			<br />
			Socială și Emoțională
		</b>
		<b class="intro_subtitle">
			Este nevoie de-o schimbare, vechile obiceiuri nu creează noi oportunități.
		</b>
		<b class="intro_background">
			{@html logoRyota}
		</b>
	</b>

	<b class="articles" class:isLoading={!articles.length}>
		{#if articles.length}
			<Articles list={articles} />
		{:else}
			<Loader />
		{/if}
	</b>
</b>
