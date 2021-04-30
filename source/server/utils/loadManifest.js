import { readJSONFile } from '@nore/std/fs';

const dimport = 'https://unpkg.com/dimport/nomodule';
const toStyle = (file) => `<link rel="stylesheet" href="${file}" />`;

const toScript = (file) => `
	<script defer type="module" src="${file}"></script>
	<script defer nomodule src="${dimport}" data-main="${file}"></script>
`;

const toPreload = (file) => {
	const type = file.endsWith('.css') ? 'style' : 'script';
	return `<link rel="preload" href="${file}" as="${type}">`;
};

export default async function loadManifest() {
	const manifest = await readJSONFile(`.nore/client/manifest.json`);

	manifest.preload = manifest.styles.concat(manifest.scripts).map(toPreload).join('\n');

	manifest.styles = manifest.styles.map(toStyle).join('\n');
	manifest.scripts = manifest.scripts.map(toScript).join('\n');

	return manifest;
}
