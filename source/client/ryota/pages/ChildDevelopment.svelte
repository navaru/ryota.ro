<script context="module">
	import { toHTML } from "@nore/notion";
	import MainBar from "$ryota/components/MainBar";
	import Loader from "$ryota/components/Loader";
	import iconLink from "$public/icons/link.svg";
	import Articles from "$ryota/components/Articles";

	function getSections(page) {
		let sections = [];
		let section = {};

		for (let i = 0; i < page.content.length; i++) {
			const block = page.content[i];

			if (block.type === "header") {
				section.title = toHTML(block);

				const divider = page.content[i + 1];
				const text = page.content[i + 2];

				if (divider && text) {
					if (divider.type === "divider" && text.type === "text") {
						section.description = toHTML(text);
						i += 2;
						continue;
					}
				}
			}

			if (block.type === "collection_view") {
				section.articles = block.collection.pages.map(page => ({
					link: page.id,
					title: page.title,
					tagline: page.attributes.Tagline,
					category: page.attributes.Category,
				}));

				sections.push(section);
				section = {};
			}
		}

		return sections;
	}
</script>

<script>
	import { onMount } from "svelte";
	import { http, Link } from "@nore/web";

	export let id = null;

	let page = null;
	let sections = [];
	let isLoading = true;

	onMount(() => {
		isLoading = true;

		http.get(`/api/notion/page/${id}`).then(reply => {
			isLoading = false;
			page = reply.body;
			sections = getSections(page);
		});
	});
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
	.title {
		margin-top: 40ru;
		line-height: 36ru;
		font-size: 28ru;
		font-family: var(--font-display);
		text-align: center;
		color: var(--color-dark-30);
	}
	@media (min-width: 800px) {
		.title {
			padding: 0 12%;
			margin-top: 80ru;
			line-height: 48ru;
			font-size: 40ru;
		}
	}

	.sections {
		padding: 0 12ru;
		margin: 0 auto 40ru;
		max-width: 480ru;
	}
	@media (min-width: 800px) {
		.sections {
			padding: 0 20ru;
			max-width: 960ru;
		}
	}
	.section {
		margin-top: 60ru;
	}
	.section_title {
		font-size: 24ru;
		font-weight: 900;
		color: var(--color-dark-40);
	}
	.section_description {
		padding-top: 12ru;
		margin-top: 12ru;
		line-height: 1.4em;
		font-size: 18ru;
		color: var(--color-dark-50);
		border-top: 1px solid var(--color-brand);
	}
	@media (min-width: 800px) {
		.sections {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.section {
			flex-basis: 48%;
		}
	}
	@media (min-width: 960px) {
		.section {
			margin-top: 80ru;
			flex-basis: 46%;
		}
	}

	.articles {
		margin-top: 28ru;
	}
	.sections :global(.article) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12ru;
		background-color: #e8ded1;
	}
	.sections :global(.article) + :global(.article) {
		margin-top: 12ru;
	}
	.sections :global(.article) :global(svg) {
		display: inline-block;
		width: 14ru;
		height: 14ru;
	}
	.article_title {
		line-height: 24ru;
		font-size: 18ru;
		font-family: var(--font-serif);
		color: var(--color-dark-10);
	}
</style>

<b class="container">
	<MainBar />

	{#if isLoading}
		<b class="loader">
			<Loader />
		</b>
	{:else if page && sections.length}
		<b class="title">{page.title}</b>
		<b class="sections">
			{#each sections as section}
				<b class="section">
					<b class="section_title">
						{@html section.title}
					</b>
					<b class="section_description">
						{@html section.description}
					</b>
					<b class="articles">
						{#each section.articles as article}
							<Link class="article" to={`/articol/${article.link}`}>
								<b class="article_title">{article.title}</b>
								{@html iconLink}
							</Link>
						{/each}
					</b>
				</b>
			{/each}
		</b>
	{/if}
</b>
