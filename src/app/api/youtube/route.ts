import ytdl from "ytdl-core";

export async function POST(request: Request) {
  const body = await request.json();

  let { videoDetails } = await ytdl.getInfo(body.url);

  return Response.json(
    {
      data: {
        title: videoDetails.title,
        author: videoDetails.author.name,
        image: videoDetails.thumbnails[0].url,
      },
    },
    { status: 200 }
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("link");

  let id : string | null = ytdl.getVideoID(url ?? "");

  return Response.json({ id: id }, { status: 200 });
}
