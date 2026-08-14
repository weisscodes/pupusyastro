import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Pupusyastro Learner | Blog",
    description: "My journey learning Pupusyastro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
    site: "https://pupusyastro.netlify.app/", 
  });
}
