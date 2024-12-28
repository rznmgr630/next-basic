import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === Number(id));

  if (comment) return Response.json(comment);

  return new Response("Comment not found", { status: 404 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const data = await request.json();

  const index = comments.findIndex((comment) => comment.id === Number(id));

  if (index > -1) {
    comments[index].comment = data.comment;
    return Response.json(comments[index]);
  } else return new Response("Comment not found", { status: 404 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === Number(id));

  if (index > -1) {
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  } else return new Response("Comment not found", { status: 404 });
}
