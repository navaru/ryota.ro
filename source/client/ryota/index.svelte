<script context="module">
	import "$ryota/styles";
	import { Application, Scope, dynamic } from "@nore/web";
	import Suspended from "./pages/Suspended";

	const Home = dynamic(() => import("./pages/Home"));
	const Articles = dynamic(() => import("./pages/Articles"));
	const Article = dynamic(() => import("./pages/Article"));
	const ChildDevelopment = dynamic(() => import("./pages/ChildDevelopment"));
</script>

<style>
	:global(body) {
		background-color: var(--color-background);
		font-family: var(--font-primary);
	}
</style>

<svelte:head>
	<title>Ryota | Institut de Dezvoltare Socială și Emoțională</title>
</svelte:head>

<Application {...$$restProps}>
	<Scope exact match="/" render={Home} />
	<Scope match="/ateliere" render={Suspended} />
	<Scope match="/servicii" render={Suspended} />
	<Scope match="/cursuri" render={Suspended} />
	<Scope match="/contact" render={Suspended} />
	<Scope match="/articole" render={Articles} />
	<Scope match="/articol/:id" render={Article} />
	<Scope match="/dezvoltarea-copilului/:id" render={ChildDevelopment} />
	<Scope match="/dezvoltare-personala" render={Suspended} />
</Application>
