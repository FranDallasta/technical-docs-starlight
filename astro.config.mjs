import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 1234,
	},
	integrations: [
		starlight({
			title: 'Docs',
			sidebar: [
				{
					label: 'Product Documentation',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Ghost ?', link: 'guides/example' },
						{ label: 'Ghost vs Wordpress', link: 'guides/ghostvswordpress/' },
						{
							label: 'Start publishing',
							items: [
								{ label: 'New Post', link: 'guides/startpublishing/newpost' },
								{ label: 'New account', link: 'guides/startpublishing/newaccount' },
							]
						},
					],
				},
			],
		}),
	],
});
