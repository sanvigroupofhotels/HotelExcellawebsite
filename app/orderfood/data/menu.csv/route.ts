import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
  const csvPath = path.join(process.cwd(), "app/orderfood/menu.csv")
  const csv = await readFile(csvPath)

  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  })
}
