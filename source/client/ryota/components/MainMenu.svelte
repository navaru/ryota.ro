<script>
	import { Link } from "@nore/pwa";

	export let links = [];
	export let open = false;
</script>

<style>
	.menu {
		position: fixed;
		top: 61ru;
		right: 0;
		bottom: 0;

		min-width: 180ru;
		padding: 20ru 0;

		background-color: var(--color-background-highlight);
		box-shadow: none;

		transform: translateX(110%);

		transition-property: transform;
		transition-duration: 256ms;
		transition-timing-function: cubic-bezier(0.02, 0.01, 0.47, 1);

		overflow-y: auto;
		z-index: 20;
	}
	.menu.open {
		box-shadow: 0 20ru 20ru rgba(0, 0, 0, 0.2);
		transform: translateX(0);
	}
	.links {
		display: flex;
		flex-direction: column;
		margin-top: 12ru;
		cursor: pointer;
	}
	.links :global(.link) {
		padding: 0 40ru;
		line-height: 60ru;
		font-size: 18ru;
		font-weight: 300;
		letter-spacing: .05em;
		text-transform: uppercase;
		cursor: pointer;
		user-select: none;
	}
</style>

<b class="menu" class:open>
	<b class="links">
		{#each links as item}
			<Link class="link" to={item.link} label={item.label} />
		{/each}
	</b>
</b>