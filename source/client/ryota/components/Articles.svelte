<script>
	import { Link } from "@nore/web";
	import iconLink from "$public/icons/link.svg";
	import getImages from "$ryota/utils/getAbstractImages.js";

	export let list = [];

	let images = getImages(list.length);

	function getLink({ layout, link }) {
		return layout ? `/${layout}/${link}` : `/articol/${link}`;
	}
</script>

<style>
	.container {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		align-items: center;
	}
	.container :global(.article) {
		max-width: 440ru;
		display: block;
		background-color: #e8ded1;
	}
	.container :global(.article) + :global(.article) {
		margin-top: 20ru;
	}
	.image {
		height: 8ru;
		overflow: hidden;
	}
	.image > :global(img) {
		margin-top: calc(-50% - 40ru);
		opacity: 0.4;
		mix-blend-mode: multiply;
		transition: opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	:global(.article):hover .image > :global(img) {
		opacity: 1;
	}
	.info {
		padding: 16ru;
	}
	.category {
		font-size: 10ru;
		font-family: var(--font-sans);
		font-weight: bold;
		text-transform: uppercase;
		color: var(--color-light-80);
	}
	.tagline {
		margin-top: 20ru;
		line-height: 24ru;
		font-size: 18ru;
		font-family: var(--font-serif);
		color: var(--color-dark-20);
	}
	.title {
		margin-top: 20ru;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		line-height: 1.4em;
		font-size: 14ru;
	}
	.title > :global(svg) {
		display: inline-block;
		margin-left: 12ru;
		width: 14ru;
		height: 14ru;
	}
	@media (min-width: 640px) {
		.info {
			padding: 20ru;
		}
	}
	@media (min-width: 800px) {
		.container {
			max-width: 980ru;
			padding: 0 8ru;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.container :global(.article) {
			height: 200ru;
			margin-bottom: 20ru;
			display: flex;
			flex-direction: row;
			flex-basis: calc(50% - 10ru);
			max-width: none;
		}
		.container :global(.article) + :global(.article) {
			margin-top: 0;
		}
		.image {
			width: 40ru;
			height: auto;
			overflow: hidden;
		}
		.image > :global(img) {
			max-width: unset;
			max-height: 100%;
			margin: 0 50%;
			transform: translateX(-50%);
			opacity: 0.7;
		}
		.info {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
		.tagline {
			flex-grow: 1;
			display: flex;
			align-items: center;
			font-size: 20ru;
			line-height: 28ru;
		}
	}
	@media (min-width: 960px) {
		.image {
			width: 100ru;
		}
	}
</style>

<b class="container">
	{#each list as article, index}
		<Link class="article" to={getLink(article)}>
			<b class="image"> <img src={images[index]} alt={article.title} /> </b>
			<b class="info">
				<b class="category">{article.category}</b>
				<b class="tagline">{article.tagline}</b>
				<b class="title">{article.title}
					{@html iconLink}</b>
			</b>
		</Link>
	{/each}
</b>
