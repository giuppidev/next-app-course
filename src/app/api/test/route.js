export async function GET(request) {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();

  return Response.json({ data });
}

export async function POST(request) {
  return Response.json({ name: "new user" });
}
