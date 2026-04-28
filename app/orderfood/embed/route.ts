import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
  const htmlPath = path.join(process.cwd(), "app/orderfood/index.html")
  const originalHtml = await readFile(htmlPath, "utf8")

  const html = originalHtml
    .replaceAll('src="images/', 'src="/orderfood/data/images/')
    .replaceAll("fetch('menu.csv')", "fetch('/orderfood/data/menu.csv')")
    .replaceAll('`images/', '`/orderfood/data/images/')
    .replaceAll("encodeURI(`images/", "encodeURI(`/orderfood/data/images/")

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  })
}
