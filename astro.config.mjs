import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
    ],
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    content: { type: "text", value: " ↗" },
                    target: "_blank",
                },
            ],
        ],
    },
});
