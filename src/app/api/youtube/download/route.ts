import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET(request: Request, response: Response) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("link");
    const responseHeaders = new Headers(response.headers);
  
    if (!url) {
      return NextResponse.json({ data: "No URL" });
    }
  
    const randomName = Math.random().toString(36).substring(2, 15);
  
    responseHeaders.set(
      "Content-Disposition",
      `attachment; filename="${randomName}.mp4"`,
    );
  
    const data = ytdl(url);
  
    return new Response(data as any, {
      headers: responseHeaders,
    });
}