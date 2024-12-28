import { NextRequest } from "next/server";
import { comments } from "./data";

export function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams;
  const searchKeyword = searchQuery.get("search");

  let responseData = comments;

  if (searchKeyword)
    responseData = comments.filter((comment) =>
      comment.comment.includes(searchKeyword)
    );

  return Response.json(responseData);

  // return new Response("Hello world");
}

export async function POST(request: Request) {
  const data = await request.json();
  comments.push({
    id: comments.length + 1,
    comment: data.comment,
  });
  return new Response("New comment created successfully");
}
