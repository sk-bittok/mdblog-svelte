import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import { createHighlighter } from "shiki";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await createHighlighter({
				themes: ["poimandres", "material-theme-ocean"],
				langs: ["javascript", "typescript", "rust", "c", "java", "python", "zig", "go"],
			});
			await highlighter.loadLanguage("javascript", "typescript", "rust", "c", "java", "python", "go", "zig");
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang, theme: "material-theme-ocean" }),
			);
			return `{@html \`${html}\`}`;
		},
	},
	// layout: {
	// 	_: "./src/mdsvex.svelte",
	// },
	rehypePlugins: [rehypeSlug],
	remarkPlugins: [[remarkToc, { tight: true }]],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
	},
};

export default config;
