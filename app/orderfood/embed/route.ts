import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
  const htmlPath = path.join(process.cwd(), "app/orderfood/index.html")
  const originalHtml = await readFile(htmlPath, "utf8")

  const html = originalHtml
    // Replace all image source paths
    .replaceAll('src="images/', 'src="/orderfood/data/images/')
    // Replace menu.csv fetch path
    .replaceAll("fetch('menu.csv')", "fetch('/orderfood/data/menu.csv')")
    // Replace template literal image paths
    .replaceAll('`images/', '`/orderfood/data/images/')
    // Replace encodeURI image paths
    .replaceAll("encodeURI(`images/", "encodeURI(`/orderfood/data/images/")

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=60",
    },
  })
}
