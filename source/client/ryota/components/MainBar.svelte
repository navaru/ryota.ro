<script>
	import { Link } from "@nore/web";
	import iconMenu from "$public/icons/menu.svg";
	import ryotaLogo from "$public/ryota_logo.svg";
	import MainMenu from "$ryota/components/MainMenu";
	import ro from "$ryota/lang/ro";

	const leftLinks = ro.menu.slice(0, 3);
	const rightLinks = ro.menu.slice(3, 6);
	const menu = ro.menu.slice(6);

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<style>
	.container {
		position: relative;
		display: flex;
		border-bottom: 1px solid var(--color-brand);
	}
	.wrap {
		display: flex;
		margin: 0 auto;
		height: 60ru;
		max-width: 1080ru;
		flex: 1;
	}
	.ryota_symbol {
		width: 56ru;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ryota_symbol :global(img) {
		height: 40ru;
		width: 40ru;
		max-width: none;
	}
	.ryota_logo {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ryota_logo :global(svg) {
		width: 68ru;
		fill: var(--color-dark-40);
	}
	.links {
		display: none;
	}
	.links :global(.link) {
		position: relative;
		display: flex;
		align-items: center;
		padding: 0 12ru;
		font-size: 14ru;
		font-family: var(--font-primary);
		letter-spacing: 0.035em;
		text-transform: uppercase;
		color: var(--color-dark-50);
	}
	.links :global(.link):hover,
	.links :global(.link):active {
		color: var(--color-black);
	}
	.menu_toggle {
		display: flex;
		align-items: center;
		padding: 0 16ru;
		background-color: var(--color-brand);
		cursor: pointer;
	}
	.menu_toggle > :global(svg) {
		width: 24ru;
		fill: #5b544c;
	}
	@media (min-width: 600px) {
		.ryota_logo {
			display: none;
		}
		.links.right {
			display: flex;
			flex-grow: 1;
			justify-content: center;
		}
	}
	@media (min-width: 840px) {
		.ryota_symbol {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.links.left {
			display: flex;
			padding-left: 12ru;
		}
		.links.right {
			justify-content: flex-end;
		}
		.menu_toggle {
			display: none;
		}
	}
</style>

<b class="container">
	<b class="wrap">
		<b class="links left">
			{#each leftLinks as item}
				<Link class="link" to={item.link} label={item.label} />
			{/each}
		</b>
		<b class="ryota_symbol">
			<Link to="/"><img src="/ryota_symbol.png" alt="Ryota symbol" /></Link>
		</b>
		<b class="ryota_logo">
			<Link to="/">
				{@html ryotaLogo}
			</Link>
		</b>
		<b class="links right">
			{#each rightLinks as item}
				<Link class="link" to={item.link} label={item.label} />
			{/each}
		</b>
	</b>

	<b class="menu_toggle" on:click={toggleMenu}>
		{@html iconMenu}
	</b>
	<MainMenu links={ro.menu} open={isMenuOpen} />
</b>
