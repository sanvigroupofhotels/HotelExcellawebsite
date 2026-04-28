import { readFile } from "node:fs/promises"
import path from "node:path"

const mimeTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
}

export async function GET(_: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path: imagePath } = await context.params
  const decoded = imagePath.map((segment) => decodeURIComponent(segment))
  const filePath = path.join(process.cwd(), "app/orderfood/images", ...decoded)

  try {
    const file = await readFile(filePath)
    const ext = path.extname(filePath).toLowerCase()
    const contentType = mimeTypes[ext] ?? "application/octet-stream"

    return new Response(file, {
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=86400",
      },
    })
  } catch {
    return new Response("Not found", { status: 404 })
  }
}
