<script>
	import { Link } from "@nore/web";
	import MainBar from "$ryota/components/MainBar";
</script>

<style>
	.container {
		background-color: var(--color-background);
		color: var(--color-foreground);
	}
	.wrap {
		padding: 40ru 12ru;
		min-height: calc(100vh - 60ru);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.note {
		padding: 32ru 0;
		line-height: 1.4em;
		font-size: 20ru;
		font-weight: 300;
		text-align: center;
		background-color: #e8ded1;
	}
	.title {
		line-height: 2.5em;
		font-size: 28ru;
		font-family: var(--font-display);
		color: var(--color-dark-30);
	}
	.description {
		color: var(--color-dark-60);
	}
	.divider {
		position: relative;
		margin: 32ru 0;
		height: 2ru;
		background-color: var(--color-background);
	}
	.alternative {
		padding: 0 20ru;
	}
	@media (min-width: 580px) {
		.note {
			max-width: 540ru;
		}
	}
</style>

<svelte:head>
	<title>Activitate temporar suspendată</title>
</svelte:head>

<b class="container">
	<MainBar />

	<b class="wrap">
		<b class="note content">
			<b class="title">Activitate temporar suspendată</b>
			<b class="description">
				Momentan activitatea institutului este suspendată <br /> datorită
				<Link
					class="link"
					newtab
					to="https://en.wikipedia.org/wiki/COVID-19_pandemic"
					label="pandemiei COVID-19" />.
			</b>
			<b class="divider" />
			<b class="alternative">
				Vă recomandăm
				<Link class="link" to="/articole" label="secțiunea de articole" />, unde
				postăm saptămânal conținut relevant situației actuale:
			</b>
			<Link class="cta" to="/articole" label="Secțiunea de articole" />
		</b>
	</b>
</b>
