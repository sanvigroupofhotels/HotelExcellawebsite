import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
  const htmlPath = path.join(process.cwd(), "app/orderfood/index.html")
  const originalHtml = await readFile(htmlPath, "utf8")

  const html = originalHtml
    // Replace static image source paths in HTML (e.g., logo)
    .replaceAll('src="images/', 'src="/orderfood/data/images/')
    // Replace menu.csv fetch path
    .replaceAll("fetch('menu.csv')", "fetch('/orderfood/data/menu.csv')")
    // Replace the final return statements that output image URLs to the browser
    // Line 1039: if (validName) return encodeURI(`images/${validName}`);
    .replace(
      "if (validName) return encodeURI(`images/${validName}`);",
      "if (validName) return encodeURI(`/orderfood/data/images/${validName}`);"
    )
    // Line 1041: return candidates[0] ? encodeURI(`images/${candidates[0]}`) : null;
    .replace(
      "return candidates[0] ? encodeURI(`images/${candidates[0]}`) : null;",
      "return candidates[0] ? encodeURI(`/orderfood/data/images/${candidates[0]}`) : null;"
    )

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=60",
    },
  })
}
